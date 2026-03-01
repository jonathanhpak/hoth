import { useState, useEffect, useRef } from "react";

const FILTERS = ["all", "active", "done"];
const STORE_ITEMS = [];

const DIFFICULTIES = [
  { id: "trivial",   label: "TRIVIAL",   xp: 10,  color: "#5a5a8a", glow: "rgba(90,90,138,0.4)",   icon: "·"  },
  { id: "easy",      label: "EASY",      xp: 25,  color: "#4ecb71", glow: "rgba(78,203,113,0.4)",  icon: "▲"  },
  { id: "medium",    label: "MEDIUM",    xp: 50,  color: "#f5c842", glow: "rgba(245,200,66,0.4)",  icon: "▲▲" },
  { id: "hard",      label: "HARD",      xp: 100, color: "#e07030", glow: "rgba(224,112,48,0.4)",  icon: "▲▲▲"},
  { id: "legendary", label: "LEGENDARY", xp: 200, color: "#cc44ff", glow: "rgba(204,68,255,0.5)",  icon: "★"  },
];
const DEFAULT_DIFF = "easy";
const getDiff = (id) => DIFFICULTIES.find(d => d.id === id) || DIFFICULTIES[1];

function getInitialTasks() {
  return [
    { id: 1, text: "Slay the Dragon of Procrastination", done: false, created: Date.now() - 3000, difficulty: "legendary" },
    { id: 2, text: "Forge the Sword of Productivity",    done: false, created: Date.now() - 2000, difficulty: "hard"      },
    { id: 3, text: "Deliver the Sacred Scroll 📜",       done: false, created: Date.now() - 1000, difficulty: "medium"    },
  ];
}

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    try { const s = localStorage.getItem("quests-v2"); return s ? JSON.parse(s) : getInitialTasks(); } catch { return getInitialTasks(); }
  });
  const [totalXP, setTotalXP] = useState(() => {
    try { return parseInt(localStorage.getItem("xp-v2") || "0"); } catch { return 0; }
  });
  const [owned, setOwned] = useState(() => {
    try { return JSON.parse(localStorage.getItem("owned-v2") || "[]"); } catch { return []; }
  });
  const [input, setInput] = useState("");
  const [newDifficulty, setNewDifficulty] = useState(DEFAULT_DIFF);
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [xpPopups, setXpPopups] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [view, setView] = useState("quests");
  const [buyMsg, setBuyMsg] = useState("");
  const inputRef = useRef(null);

  useEffect(() => { try { localStorage.setItem("quests-v2", JSON.stringify(tasks)); } catch {} }, [tasks]);
  useEffect(() => { try { localStorage.setItem("xp-v2", String(totalXP)); } catch {} }, [totalXP]);
  useEffect(() => { try { localStorage.setItem("owned-v2", JSON.stringify(owned)); } catch {} }, [owned]);

  const awardXP = (amount, x, y) => {
    const id = Date.now() + Math.random();
    setXpPopups(prev => [...prev, { id, amount, x, y }]);
    setTimeout(() => setXpPopups(prev => prev.filter(p => p.id !== id)), 1400);
    const newSparkles = Array.from({ length: 6 }, (_, i) => ({
      id: id + i, x, y,
      dx: (Math.random() - 0.5) * 80,
      dy: -(Math.random() * 60 + 20),
      color: ["#ffe066","#ff6b6b","#51cf66","#74c0fc","#cc5de8"][Math.floor(Math.random()*5)],
    }));
    setSparkles(prev => [...prev, ...newSparkles]);
    setTimeout(() => setSparkles(prev => prev.filter(s => !newSparkles.find(n => n.id === s.id))), 800);
    setTotalXP(prev => prev + amount);
  };

  const buyItem = (item) => {
    if (totalXP < item.cost) { setBuyMsg("NOT ENOUGH XP!"); setTimeout(() => setBuyMsg(""), 1500); return; }
    if (owned.includes(item.id)) { setBuyMsg("ALREADY OWNED!"); setTimeout(() => setBuyMsg(""), 1500); return; }
    setTotalXP(prev => prev - item.cost);
    setOwned(prev => [...prev, item.id]);
    setBuyMsg("PURCHASED!");
    setTimeout(() => setBuyMsg(""), 2000);
  };

  const addTask = () => {
    const text = input.trim(); if (!text) return;
    setTasks(prev => [{ id: Date.now(), text, done: false, created: Date.now(), difficulty: newDifficulty }, ...prev]);
    setInput(""); inputRef.current?.focus();
  };

  const toggleTask = (id, e) => {
    const task = tasks.find(t => t.id === id); if (!task) return;
    const nowDone = !task.done;
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: nowDone } : t));
    const xp = getDiff(task.difficulty).xp;
    if (nowDone) {
      const rect = e?.currentTarget?.getBoundingClientRect?.();
      awardXP(xp, rect ? rect.left + rect.width/2 : window.innerWidth/2, rect ? rect.top : 200);
    } else {
      setTotalXP(prev => Math.max(0, prev - xp));
    }
  };

  const setTaskDifficulty = (id, diffId) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, difficulty: diffId } : t));
  };

  const deleteTask = (id) => {
    setDeletingId(id);
    setTimeout(() => { setTasks(prev => prev.filter(t => t.id !== id)); setDeletingId(null); }, 300);
  };

  const startEdit = (task) => { setEditingId(task.id); setEditText(task.text); };
  const saveEdit = () => {
    if (editText.trim()) setTasks(prev => prev.map(t => t.id === editingId ? { ...t, text: editText.trim() } : t));
    setEditingId(null);
  };
  const clearDone = () => setTasks(prev => prev.filter(t => !t.done));

  const filtered = tasks.filter(t => filter === "all" ? true : filter === "active" ? !t.done : t.done);
  const activeCount = tasks.filter(t => !t.done).length;
  const doneCount = tasks.filter(t => t.done).length;
  const filterLabels = { all: "⚔ ALL", active: "🗡 ACTIVE", done: "✦ DONE" };

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a1a", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem", boxSizing:"border-box", imageRendering:"pixelated" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323:wght@400&display=swap');

        * { box-sizing:border-box; image-rendering:pixelated; cursor: default; }
        button, input, .check-box, .icon-btn, .filter-btn, .add-btn, .clear-btn, .task-text, .nav-btn, .buy-btn, .diff-btn { cursor: pointer; }

        :root {
          --gold: #f5c842;
          --green: #4ecb71;
          --red: #e05252;
          --bg: #0a0a1a;
          --panel: #12122a;
          --border: #3a3a6a;
          --text: #c8c8f0;
          --muted: #5a5a8a;
        }

        .wrap { width:100%; max-width:620px; position:relative; z-index:1; }

        .pixel-box { background:var(--panel); border:4px solid var(--border); box-shadow:0 0 0 2px var(--bg), 4px 4px 0 0 #000, inset 2px 2px 0 0 rgba(255,255,255,0.04); position:relative; }

        .nav-row { display:flex; gap:0.5rem; margin-bottom:1rem; }
        .nav-btn { flex:1; background:#0d0d22; border:3px solid var(--border); color:var(--muted); padding:0.6rem; font-family:'Press Start 2P',monospace; font-size:0.45rem; letter-spacing:0.05em; box-shadow:2px 2px 0 #000; transition:all 0.1s; }
        .nav-btn:hover { color:var(--text); }
        .nav-btn.active { background:#1a0a2a; border-color:var(--gold); color:var(--gold); box-shadow:2px 2px 0 #000, 0 0 10px rgba(245,200,66,0.2); }
        .nav-btn:active { transform:translate(1px,1px); box-shadow:1px 1px 0 #000; }

        .header { padding:1.25rem 1.5rem 1rem; margin-bottom:1rem; }
        .title-row { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; }
        .title { font-family:'Press Start 2P',monospace; font-size:1rem; color:var(--gold); text-shadow:3px 3px 0 #000, 0 0 20px rgba(245,200,66,0.3); line-height:1.6; }
        .title .sub { display:block; font-size:0.4rem; color:var(--muted); text-shadow:none; margin-top:0.4rem; }
        .xp-badge { font-family:'Press Start 2P',monospace; font-size:0.5rem; background:#1a0a00; border:3px solid var(--gold); color:var(--gold); padding:0.5rem 0.75rem; text-align:center; box-shadow:3px 3px 0 #000; white-space:nowrap; flex-shrink:0; }
        .xp-badge .xp-num { display:block; font-size:0.9rem; color:#fff; text-shadow:0 0 10px var(--gold), 2px 2px 0 #000; margin-bottom:2px; }
        .stats-row { display:flex; gap:1rem; }
        .stat-chip { font-family:'VT323',monospace; font-size:1rem; color:var(--muted); border:2px solid var(--border); padding:2px 8px; background:var(--bg); }
        .stat-chip span { color:var(--green); }

        .pixel-divider { height:4px; background:repeating-linear-gradient(90deg, var(--gold) 0px, var(--gold) 8px, transparent 8px, transparent 16px); margin:0 0 1rem 0; opacity:0.4; }

        .input-section { padding:1rem 1.5rem; margin-bottom:1rem; }
        .input-label { font-family:'Press Start 2P',monospace; font-size:0.4rem; color:var(--muted); letter-spacing:0.1em; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem; }
        .input-label::before { content:'▶'; color:var(--gold); font-size:0.5rem; }
        .input-row { display:flex; }
        .task-input { flex:1; background:#08081a; border:3px solid var(--border); border-right:none; color:var(--text); padding:0.75rem 1rem; font-family:'VT323',monospace; font-size:1.2rem; outline:none; box-shadow:inset 2px 2px 0 rgba(0,0,0,0.5); }
        .task-input::placeholder { color:#3a3a5a; }
        .task-input:focus { border-color:var(--gold); }
        .add-btn { background:#1a3a1a; border:3px solid var(--green); color:var(--green); padding:0.75rem 1.25rem; font-family:'Press Start 2P',monospace; font-size:0.5rem; box-shadow:3px 3px 0 #000; transition:transform 0.1s, box-shadow 0.1s; white-space:nowrap; }
        .add-btn:hover { background:#236b3a; }
        .add-btn:active { transform:translate(2px,2px); box-shadow:1px 1px 0 #000; }

        .diff-picker { display:flex; gap:4px; margin-top:0.6rem; align-items:center; }
        .diff-picker-label { font-family:'Press Start 2P',monospace; font-size:0.35rem; color:var(--muted); margin-right:4px; white-space:nowrap; }
        .diff-btn { font-family:'Press Start 2P',monospace; font-size:0.3rem; padding:3px 6px; border:2px solid transparent; box-shadow:1px 1px 0 #000; transition:all 0.1s; white-space:nowrap; background:#0d0d22; }
        .diff-btn:hover { filter:brightness(1.3); }
        .diff-btn.selected { box-shadow:1px 1px 0 #000, 0 0 8px var(--diff-glow); }
        .diff-btn:active { transform:translate(1px,1px); box-shadow:none; }

        .diff-badge { font-family:'Press Start 2P',monospace; font-size:0.28rem; padding:2px 5px; border:2px solid; white-space:nowrap; flex-shrink:0; letter-spacing:0.05em; }
        .diff-badge .xp-hint { opacity:0.7; margin-left:3px; }

        .filter-section { padding:0.75rem 1.5rem; margin-bottom:1rem; display:flex; gap:0.5rem; }
        .filter-btn { background:#0d0d22; border:2px solid #2a2a4a; color:var(--muted); padding:0.4rem 0.75rem; font-family:'Press Start 2P',monospace; font-size:0.38rem; box-shadow:2px 2px 0 #000; transition:all 0.1s; }
        .filter-btn:hover { color:var(--text); border-color:var(--border); }
        .filter-btn.active { background:#1a0a2a; border-color:var(--gold); color:var(--gold); box-shadow:2px 2px 0 #000, 0 0 8px rgba(245,200,66,0.3); }
        .filter-btn:active { transform:translate(1px,1px); box-shadow:1px 1px 0 #000; }

        .task-section { padding:0.5rem 1.5rem 1.5rem; }
        .quest-header { font-family:'Press Start 2P',monospace; font-size:0.4rem; color:var(--muted); padding:0.5rem 0; border-bottom:2px solid var(--border); margin-bottom:0.25rem; display:flex; align-items:center; gap:0.5rem; }
        .quest-header::before { content:'⚔'; }
        .task-item { display:flex; align-items:center; gap:0.75rem; padding:0.75rem 0.5rem; border-bottom:2px solid var(--bg); transition:opacity 0.3s, transform 0.3s; animation:questAppear 0.2s steps(3) forwards; }
        .task-item:hover { background:rgba(255,255,255,0.02); }
        @keyframes questAppear { 0%{opacity:0;transform:translateX(-8px);} 100%{opacity:1;transform:translateX(0);} }
        .task-item.deleting { opacity:0; transform:translateX(16px); }
        .check-box { width:22px; height:22px; border:3px solid var(--border); flex-shrink:0; display:flex; align-items:center; justify-content:center; background:var(--bg); box-shadow:2px 2px 0 #000; font-size:10px; }
        .check-box:hover { border-color:var(--gold); }
        .check-box.checked { background:#1a3a1a; border-color:var(--green); box-shadow:2px 2px 0 #000, 0 0 8px rgba(78,203,113,0.4); }
        .task-text { flex:1; font-family:'VT323',monospace; font-size:1.25rem; color:var(--text); line-height:1.3; }
        .task-text:hover { color:#fff; }
        .task-text.done { color:var(--muted); text-decoration:line-through; }
        .edit-input { flex:1; background:transparent; border:none; border-bottom:2px solid var(--gold); color:var(--text); font-family:'VT323',monospace; font-size:1.25rem; outline:none; padding:2px 6px; }
        .task-actions { display:flex; gap:0.25rem; opacity:0; transition:opacity 0.2s; }
        .task-item:hover .task-actions { opacity:1; }
        .icon-btn { background:#0d0d22; border:2px solid #2a2a4a; color:var(--muted); padding:3px 6px; font-family:'Press Start 2P',monospace; font-size:0.45rem; box-shadow:1px 1px 0 #000; transition:all 0.1s; }
        .icon-btn:hover { color:var(--gold); border-color:var(--gold); }
        .icon-btn.del:hover { color:var(--red); border-color:var(--red); }
        .icon-btn:active { transform:translate(1px,1px); box-shadow:none; }
        .empty { text-align:center; padding:3rem 0; font-family:'Press Start 2P',monospace; font-size:0.5rem; color:#2a2a4a; line-height:2.5; }
        .footer-row { display:flex; justify-content:space-between; align-items:center; padding:0.75rem 0 0; border-top:2px solid var(--border); margin-top:0.5rem; }
        .footer-note { font-family:'Press Start 2P',monospace; font-size:0.35rem; color:#2a2a4a; }
        .clear-btn { background:none; border:2px solid #2a2a4a; color:#3a3a5a; font-family:'Press Start 2P',monospace; font-size:0.35rem; padding:4px 8px; box-shadow:1px 1px 0 #000; }
        .clear-btn:hover { color:var(--red); border-color:var(--red); }
        .clear-btn:active { transform:translate(1px,1px); box-shadow:none; }

        .store-section { padding:1rem 1.5rem 1.5rem; }
        .store-header { font-family:'Press Start 2P',monospace; font-size:0.5rem; color:var(--gold); padding:0 0 0.75rem; border-bottom:2px solid var(--border); margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center; }
        .store-empty { text-align:center; padding:3rem 0; font-family:'Press Start 2P',monospace; font-size:0.45rem; color:#2a2a4a; line-height:3; }
        .buy-msg { font-family:'Press Start 2P',monospace; font-size:0.4rem; color:var(--green); }
        .buy-msg.err { color:var(--red); }
        .store-grid { display:flex; flex-direction:column; gap:0.5rem; }
        .store-item { display:flex; align-items:center; gap:0.75rem; padding:0.75rem; border:2px solid var(--border); background:var(--bg); box-shadow:2px 2px 0 #000; }
        .store-item:hover { border-color:var(--gold); }
        .store-item.owned { border-color:#2a4a2a; }
        .store-icon { font-size:1.5rem; flex-shrink:0; width:2rem; text-align:center; }
        .store-info { flex:1; }
        .store-name { font-family:'Press Start 2P',monospace; font-size:0.45rem; color:var(--text); margin-bottom:0.3rem; }
        .store-desc { font-family:'VT323',monospace; font-size:0.9rem; color:var(--muted); }
        .store-cost { font-family:'Press Start 2P',monospace; font-size:0.45rem; color:var(--gold); white-space:nowrap; margin-right:0.5rem; }
        .store-cost.cant-afford { color:var(--red); }
        .buy-btn { background:#1a0a00; border:2px solid var(--gold); color:var(--gold); padding:0.4rem 0.6rem; font-family:'Press Start 2P',monospace; font-size:0.35rem; box-shadow:2px 2px 0 #000; transition:all 0.1s; white-space:nowrap; }
        .buy-btn:hover { background:#2a1800; }
        .buy-btn:active { transform:translate(1px,1px); box-shadow:none; }
        .buy-btn:disabled { opacity:0.4; border-color:var(--muted); color:var(--muted); background:transparent; }

        .xp-popup { position:fixed; pointer-events:none; font-family:'Press Start 2P',monospace; font-size:0.6rem; color:var(--gold); z-index:9999; animation:xpRise 1.4s steps(8) forwards; text-shadow:2px 2px 0 #000; transform:translateX(-50%); white-space:nowrap; }
        @keyframes xpRise { 0%{opacity:1;transform:translateX(-50%) translateY(0);} 100%{opacity:0;transform:translateX(-50%) translateY(-70px);} }
        .sparkle { position:fixed; width:6px; height:6px; pointer-events:none; z-index:9998; animation:sparkleFly 0.8s steps(4) forwards; }
        @keyframes sparkleFly { 0%{opacity:1;transform:translate(0,0);} 100%{opacity:0;transform:translate(var(--dx),var(--dy));} }
        .stars { position:fixed; inset:0; pointer-events:none; overflow:hidden; z-index:0; }
        .star { position:absolute; background:#fff; animation:twinkle var(--dur,3s) steps(2) infinite var(--delay,0s); }
        @keyframes twinkle { 0%,100%{opacity:0.8;} 50%{opacity:0.1;} }
      `}</style>

      <div className="stars">
        {Array.from({ length: 60 }, (_, i) => (
          <div key={i} className="star" style={{ left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, width:Math.random()>0.8?"3px":"2px", height:Math.random()>0.8?"3px":"2px", "--dur":`${2+Math.random()*4}s`, "--delay":`${Math.random()*4}s` }} />
        ))}
      </div>

      {xpPopups.map(p => (
        <div key={p.id} className="xp-popup" style={{ left:p.x, top:p.y }}>✦ +{p.amount} XP ✦</div>
      ))}
      {sparkles.map(s => (
        <div key={s.id} className="sparkle" style={{ left:s.x, top:s.y, background:s.color, "--dx":`${s.dx}px`, "--dy":`${s.dy}px`, boxShadow:`0 0 4px ${s.color}` }} />
      ))}

      <div className="wrap">
        <div className="pixel-box header">
          <div className="title-row">
            <div className="title">
              ⚔ QUEST LOG
              <span className="sub">▶ TRACK YOUR ADVENTURES</span>
            </div>
            <div className="xp-badge">
              <span className="xp-num">{totalXP}</span>
              XP EARNED
            </div>
          </div>
          <div className="stats-row">
            <div className="stat-chip"><span>{activeCount}</span> active quests</div>
            <div className="stat-chip"><span>{doneCount}</span> completed</div>
          </div>
        </div>

        <div className="pixel-divider" />

        <div className="nav-row">
          <button className={`nav-btn ${view==="quests"?"active":""}`} onClick={() => setView("quests")}>⚔ QUEST LOG</button>
          <button className={`nav-btn ${view==="store"?"active":""}`} onClick={() => setView("store")}>🏪 XP STORE</button>
        </div>

        {view === "quests" && <>
          <div className="pixel-box input-section">
            <div className="input-label">NEW QUEST</div>
            <div className="input-row">
              <input ref={inputRef} className="task-input" type="text" placeholder="Enter your quest..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==="Enter" && addTask()} />
              <button className="add-btn" onClick={addTask}>+ ADD</button>
            </div>
            <div className="diff-picker">
              <span className="diff-picker-label">DIFFICULTY:</span>
              {DIFFICULTIES.map(d => (
                <button
                  key={d.id}
                  className={`diff-btn ${newDifficulty === d.id ? "selected" : ""}`}
                  style={{ color: d.color, borderColor: newDifficulty === d.id ? d.color : "#2a2a4a", "--diff-glow": d.glow }}
                  onClick={() => setNewDifficulty(d.id)}
                >{d.label}</button>
              ))}
            </div>
          </div>

          <div className="pixel-box filter-section">
            {FILTERS.map(f => (
              <button key={f} className={`filter-btn ${filter===f?"active":""}`} onClick={() => setFilter(f)}>{filterLabels[f]}</button>
            ))}
          </div>

          <div className="pixel-box task-section">
            <div className="quest-header">QUEST LIST — {filtered.length} ENTRIES</div>
            {filtered.length === 0 && <div className="empty">AWAITING NEW QUESTS...</div>}
            {filtered.map(task => {
              const diff = getDiff(task.difficulty);
              return (
              <div key={task.id} className={`task-item ${deletingId===task.id?"deleting":""}`}>
                <div className={`check-box ${task.done?"checked":""}`} onClick={e => toggleTask(task.id, e)}>
                  {task.done ? "✓" : ""}
                </div>
                {editingId===task.id ? (
                  <input className="edit-input" autoFocus value={editText} onChange={e => setEditText(e.target.value)} onKeyDown={e => { if(e.key==="Enter") saveEdit(); if(e.key==="Escape") setEditingId(null); }} onBlur={saveEdit} />
                ) : (
                  <span className={`task-text ${task.done?"done":""}`} onDoubleClick={() => !task.done && startEdit(task)}>
                    {!task.done && "▸ "}{task.text}
                  </span>
                )}
                {!task.done && (
                  <div style={{ display:"flex", flexDirection:"column", gap:"2px", alignItems:"flex-end", flexShrink:0 }}>
                    <div
                      className="diff-badge"
                      style={{ color: diff.color, borderColor: diff.color, background: `${diff.color}18`, boxShadow: `0 0 6px ${diff.glow}` }}
                    >
                      {diff.icon} {diff.label}<span className="xp-hint">+{diff.xp}</span>
                    </div>
                    <div style={{ display:"flex", gap:"2px" }}>
                      {DIFFICULTIES.map(d => (
                        <button
                          key={d.id}
                          title={`${d.label} (+${d.xp} XP)`}
                          style={{ width:"8px", height:"8px", background: task.difficulty===d.id ? d.color : "#2a2a4a", border:"none", padding:0, boxShadow: task.difficulty===d.id ? `0 0 4px ${d.color}` : "none" }}
                          onClick={() => setTaskDifficulty(task.id, d.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {task.done && (
                  <div className="diff-badge" style={{ color: diff.color, borderColor: diff.color, opacity:0.5, flexShrink:0 }}>
                    {diff.icon} +{diff.xp}
                  </div>
                )}
                <div className="task-actions">
                  {!task.done && <button className="icon-btn" onClick={() => startEdit(task)}>✎</button>}
                  <button className="icon-btn del" onClick={() => deleteTask(task.id)}>✕</button>
                </div>
              </div>
              );
            })}
            <div className="footer-row">
              <span className="footer-note">DBL-CLICK TO EDIT • ENTER TO ADD</span>
              {doneCount > 0 && <button className="clear-btn" onClick={clearDone}>CLEAR DONE</button>}
            </div>
          </div>
        </>}

        {view === "store" && (
          <div className="pixel-box store-section">
            <div className="store-header">
              <span>🏪 XP STORE</span>
              {buyMsg && <span className={`buy-msg ${buyMsg.includes("NOT") || buyMsg.includes("ALREADY") ? "err" : ""}`}>{buyMsg}</span>}
            </div>
            {STORE_ITEMS.length === 0 ? (
              <div className="store-empty">
                COMING SOON...<br/>
                SPEND YOUR XP HERE
              </div>
            ) : (
              <div className="store-grid">
                {STORE_ITEMS.map(item => {
                  const isOwned = owned.includes(item.id);
                  const canAfford = totalXP >= item.cost;
                  return (
                    <div key={item.id} className={`store-item ${isOwned?"owned":""}`}>
                      <div className="store-icon">{item.icon}</div>
                      <div className="store-info">
                        <div className="store-name">{item.name}</div>
                        <div className="store-desc">{item.desc}</div>
                      </div>
                      <span className={`store-cost ${!canAfford&&!isOwned?"cant-afford":""}`}>{item.cost} XP</span>
                      <button className="buy-btn" disabled={isOwned || !canAfford} onClick={() => buyItem(item)}>
                        {isOwned ? "OWNED" : "BUY"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
