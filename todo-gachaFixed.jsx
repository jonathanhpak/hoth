import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// PIXEL ART COMPONENTS
// ─────────────────────────────────────────────

function HeroSprite({ dead = false }) {
  if (dead) {
    return (
      <svg width="52" height="60" viewBox="0 0 13 15" style={{ imageRendering: "pixelated", display: "block" }}>
        {/* fallen hero */}
        <rect x="1" y="10" width="11" height="3" fill="#4a3a8a"/>
        <rect x="2" y="9" width="9" height="2" fill="#5a4aaa"/>
        <rect x="4" y="8" width="5" height="2" fill="#c0b0e0"/>
        <rect x="5" y="7" width="3" height="2" fill="#c0b0e0"/>
        {/* X eyes */}
        <rect x="5" y="7" width="1" height="1" fill="#e05252"/>
        <rect x="7" y="7" width="1" height="1" fill="#e05252"/>
        <rect x="6" y="8" width="1" height="1" fill="#e05252"/>
        {/* staff */}
        <rect x="11" y="5" width="1" height="8" fill="#8a6030"/>
        <rect x="11" y="4" width="2" height="2" fill="#f5c842"/>
      </svg>
    );
  }
  return (
    <svg width="52" height="72" viewBox="0 0 13 18" style={{ imageRendering: "pixelated", display: "block" }}>
      {/* staff */}
      <rect x="0" y="2" width="2" height="11" fill="#8a6030"/>
      <rect x="0" y="1" width="2" height="2" fill="#f5c842"/>
      <rect x="0" y="0" width="2" height="1" fill="#ffdd66"/>
      {/* cape back */}
      <rect x="2" y="5" width="1" height="7" fill="#7a0a0a"/>
      <rect x="9" y="5" width="1" height="7" fill="#7a0a0a"/>
      {/* head */}
      <rect x="4" y="1" width="5" height="5" fill="#c8b8e0"/>
      <rect x="3" y="2" width="1" height="3" fill="#c8b8e0"/>
      <rect x="9" y="2" width="1" height="3" fill="#c8b8e0"/>
      {/* hair */}
      <rect x="4" y="0" width="5" height="2" fill="#2a1a4a"/>
      <rect x="3" y="1" width="1" height="2" fill="#2a1a4a"/>
      <rect x="9" y="1" width="1" height="2" fill="#2a1a4a"/>
      {/* eyes */}
      <rect x="5" y="2" width="1" height="2" fill="#4ecb71"/>
      <rect x="7" y="2" width="1" height="2" fill="#4ecb71"/>
      <rect x="5" y="3" width="1" height="1" fill="#2a8a40"/>
      <rect x="7" y="3" width="1" height="1" fill="#2a8a40"/>
      {/* mouth */}
      <rect x="5" y="5" width="3" height="1" fill="#8a6858"/>
      <rect x="5" y="5" width="1" height="1" fill="#6a3828"/>
      <rect x="7" y="5" width="1" height="1" fill="#6a3828"/>
      {/* robe body */}
      <rect x="3" y="6" width="7" height="6" fill="#4a3a8a"/>
      <rect x="4" y="6" width="5" height="6" fill="#5a4aaa"/>
      {/* robe detail */}
      <rect x="6" y="7" width="1" height="4" fill="#3a2a7a"/>
      {/* belt */}
      <rect x="3" y="11" width="7" height="1" fill="#f5c842"/>
      <rect x="5" y="11" width="1" height="1" fill="#cc8800"/>
      {/* arms */}
      <rect x="2" y="6" width="2" height="5" fill="#5a4aaa"/>
      <rect x="9" y="6" width="2" height="5" fill="#5a4aaa"/>
      {/* hands */}
      <rect x="2" y="10" width="2" height="2" fill="#c8b8e0"/>
      <rect x="9" y="10" width="2" height="2" fill="#c8b8e0"/>
      {/* legs */}
      <rect x="3" y="12" width="3" height="4" fill="#2a2060"/>
      <rect x="7" y="12" width="3" height="4" fill="#2a2060"/>
      {/* boots */}
      <rect x="3" y="15" width="3" height="3" fill="#3a2010"/>
      <rect x="7" y="15" width="3" height="3" fill="#3a2010"/>
      <rect x="3" y="17" width="4" height="1" fill="#2a1808"/>
      <rect x="7" y="17" width="4" height="1" fill="#2a1808"/>
    </svg>
  );
}

function MonsterSprite({ name, dead = false }) {
  const op = dead ? 0.25 : 1;

  if (name === "SLIME") return (
    <svg width="52" height="44" viewBox="0 0 13 11" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      <rect x="3" y="4" width="7" height="6" fill="#3aaa55"/>
      <rect x="2" y="5" width="9" height="4" fill="#4ecb71"/>
      <rect x="4" y="3" width="5" height="3" fill="#4ecb71"/>
      <rect x="5" y="2" width="3" height="2" fill="#3aaa55"/>
      <rect x="3" y="9" width="2" height="2" fill="#3aaa55"/>
      <rect x="8" y="9" width="2" height="2" fill="#3aaa55"/>
      <rect x="5" y="10" width="1" height="1" fill="#3aaa55"/>
      {/* eyes */}
      <rect x="4" y="5" width="2" height="2" fill="#fff"/>
      <rect x="7" y="5" width="2" height="2" fill="#fff"/>
      <rect x="5" y="6" width="1" height="1" fill="#111"/>
      <rect x="8" y="6" width="1" height="1" fill="#111"/>
      {/* shine */}
      <rect x="4" y="4" width="1" height="1" fill="#9affaa"/>
      {/* mouth */}
      <rect x="5" y="8" width="3" height="1" fill="#2a8a40"/>
    </svg>
  );

  if (name === "GIANT RAT") return (
    <svg width="60" height="44" viewBox="0 0 15 11" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* body */}
      <rect x="2" y="4" width="9" height="5" fill="#7a5535"/>
      <rect x="3" y="3" width="7" height="3" fill="#8a6545"/>
      {/* head */}
      <rect x="9" y="3" width="4" height="4" fill="#8a6545"/>
      <rect x="12" y="4" width="2" height="2" fill="#9a7555"/>
      {/* ear */}
      <rect x="10" y="2" width="2" height="2" fill="#cc8888"/>
      {/* eye */}
      <rect x="11" y="4" width="1" height="1" fill="#ff2222"/>
      {/* nose */}
      <rect x="13" y="5" width="1" height="1" fill="#cc6666"/>
      {/* teeth */}
      <rect x="12" y="6" width="1" height="1" fill="#eee"/>
      {/* tail */}
      <rect x="0" y="7" width="3" height="1" fill="#9a7555"/>
      <rect x="1" y="6" width="1" height="1" fill="#9a7555"/>
      <rect x="0" y="5" width="1" height="2" fill="#9a7555"/>
      {/* legs */}
      <rect x="3" y="8" width="2" height="3" fill="#7a5535"/>
      <rect x="6" y="8" width="2" height="3" fill="#7a5535"/>
    </svg>
  );

  if (name === "GOBLIN") return (
    <svg width="52" height="68" viewBox="0 0 13 17" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* ears */}
      <rect x="1" y="2" width="3" height="2" fill="#3a7a20"/>
      <rect x="9" y="2" width="3" height="2" fill="#3a7a20"/>
      {/* head */}
      <rect x="3" y="1" width="7" height="6" fill="#3a7a20"/>
      <rect x="2" y="2" width="1" height="4" fill="#3a7a20"/>
      <rect x="10" y="2" width="1" height="4" fill="#3a7a20"/>
      {/* eyes */}
      <rect x="4" y="2" width="2" height="2" fill="#ffee00"/>
      <rect x="7" y="2" width="2" height="2" fill="#ffee00"/>
      <rect x="4" y="3" width="1" height="1" fill="#886600"/>
      <rect x="7" y="3" width="1" height="1" fill="#886600"/>
      {/* nose */}
      <rect x="5" y="4" width="3" height="1" fill="#2a5a10"/>
      {/* teeth */}
      <rect x="4" y="6" width="1" height="2" fill="#eeeecc"/>
      <rect x="8" y="6" width="1" height="2" fill="#eeeecc"/>
      <rect x="5" y="7" width="3" height="1" fill="#1a4a08"/>
      {/* body */}
      <rect x="3" y="7" width="7" height="5" fill="#2a5a14"/>
      <rect x="4" y="7" width="5" height="5" fill="#336618"/>
      {/* arms */}
      <rect x="1" y="7" width="3" height="4" fill="#3a7a20"/>
      <rect x="9" y="7" width="3" height="4" fill="#3a7a20"/>
      {/* weapon */}
      <rect x="10" y="1" width="1" height="10" fill="#9a7030"/>
      <rect x="9" y="1" width="3" height="2" fill="#c0c0c0"/>
      <rect x="9" y="0" width="3" height="1" fill="#dddddd"/>
      {/* legs */}
      <rect x="3" y="12" width="3" height="5" fill="#1a3a0a"/>
      <rect x="7" y="12" width="3" height="5" fill="#1a3a0a"/>
      {/* feet */}
      <rect x="3" y="16" width="4" height="1" fill="#111"/>
      <rect x="7" y="16" width="4" height="1" fill="#111"/>
    </svg>
  );

  if (name === "SKELETON") return (
    <svg width="52" height="72" viewBox="0 0 13 18" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* skull */}
      <rect x="3" y="0" width="7" height="6" fill="#dddde8"/>
      <rect x="2" y="1" width="1" height="4" fill="#dddde8"/>
      <rect x="10" y="1" width="1" height="4" fill="#dddde8"/>
      {/* eye sockets */}
      <rect x="3" y="1" width="3" height="3" fill="#111"/>
      <rect x="7" y="1" width="3" height="3" fill="#111"/>
      <rect x="4" y="2" width="1" height="2" fill="#2a2a3a"/>
      <rect x="8" y="2" width="1" height="2" fill="#2a2a3a"/>
      {/* jaw */}
      <rect x="4" y="4" width="5" height="3" fill="#c8c8d8"/>
      <rect x="4" y="6" width="1" height="1" fill="#666"/>
      <rect x="6" y="6" width="1" height="1" fill="#666"/>
      <rect x="8" y="6" width="1" height="1" fill="#666"/>
      {/* spine */}
      <rect x="5" y="7" width="3" height="7" fill="#c8c8d8"/>
      {/* ribs */}
      <rect x="3" y="7" width="2" height="1" fill="#c8c8d8"/>
      <rect x="8" y="7" width="2" height="1" fill="#c8c8d8"/>
      <rect x="3" y="9" width="2" height="1" fill="#c8c8d8"/>
      <rect x="8" y="9" width="2" height="1" fill="#c8c8d8"/>
      <rect x="3" y="11" width="2" height="1" fill="#c8c8d8"/>
      <rect x="8" y="11" width="2" height="1" fill="#c8c8d8"/>
      {/* arm bones */}
      <rect x="1" y="7" width="2" height="7" fill="#c8c8d8"/>
      <rect x="10" y="7" width="2" height="7" fill="#c8c8d8"/>
      {/* sword */}
      <rect x="11" y="1" width="1" height="9" fill="#aaaaaa"/>
      <rect x="10" y="3" width="3" height="1" fill="#888"/>
      <rect x="11" y="0" width="1" height="2" fill="#dddddd"/>
      {/* legs */}
      <rect x="3" y="14" width="3" height="4" fill="#c8c8d8"/>
      <rect x="7" y="14" width="3" height="4" fill="#c8c8d8"/>
    </svg>
  );

  if (name === "ORC") return (
    <svg width="60" height="72" viewBox="0 0 15 18" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* head */}
      <rect x="3" y="0" width="9" height="7" fill="#5a8830"/>
      <rect x="2" y="1" width="1" height="5" fill="#5a8830"/>
      <rect x="12" y="1" width="1" height="5" fill="#5a8830"/>
      {/* eyes */}
      <rect x="4" y="1" width="3" height="3" fill="#ee0000"/>
      <rect x="8" y="1" width="3" height="3" fill="#ee0000"/>
      <rect x="5" y="2" width="1" height="2" fill="#880000"/>
      <rect x="9" y="2" width="1" height="2" fill="#880000"/>
      {/* tusks */}
      <rect x="5" y="6" width="2" height="3" fill="#eeeebb"/>
      <rect x="8" y="6" width="2" height="3" fill="#eeeebb"/>
      {/* brow */}
      <rect x="3" y="0" width="9" height="1" fill="#3a6010"/>
      {/* body */}
      <rect x="2" y="7" width="11" height="7" fill="#3a5520"/>
      <rect x="3" y="7" width="9" height="7" fill="#446628"/>
      {/* armor plate */}
      <rect x="4" y="8" width="7" height="5" fill="#555555"/>
      <rect x="5" y="9" width="5" height="3" fill="#666666"/>
      {/* arms */}
      <rect x="0" y="7" width="3" height="6" fill="#5a8830"/>
      <rect x="12" y="7" width="3" height="6" fill="#5a8830"/>
      {/* axe */}
      <rect x="13" y="1" width="1" height="10" fill="#8a7030"/>
      <rect x="12" y="1" width="3" height="4" fill="#aaaaaa"/>
      <rect x="13" y="0" width="2" height="2" fill="#dddddd"/>
      {/* legs */}
      <rect x="2" y="14" width="4" height="4" fill="#2a3a10"/>
      <rect x="9" y="14" width="4" height="4" fill="#2a3a10"/>
      <rect x="2" y="17" width="5" height="1" fill="#1a2a08"/>
      <rect x="9" y="17" width="5" height="1" fill="#1a2a08"/>
    </svg>
  );

  if (name === "ZOMBIE") return (
    <svg width="52" height="72" viewBox="0 0 13 18" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* head */}
      <rect x="3" y="0" width="7" height="6" fill="#6a9a50"/>
      <rect x="2" y="1" width="1" height="4" fill="#6a9a50"/>
      <rect x="10" y="1" width="1" height="4" fill="#6a9a50"/>
      {/* decomp patches */}
      <rect x="3" y="1" width="2" height="2" fill="#4a7a30"/>
      <rect x="8" y="2" width="2" height="2" fill="#4a7a30"/>
      {/* eyes - glowing */}
      <rect x="4" y="2" width="2" height="2" fill="#ffff00"/>
      <rect x="7" y="2" width="2" height="2" fill="#ffff00"/>
      <rect x="4" y="3" width="1" height="1" fill="#cc8800"/>
      <rect x="7" y="3" width="1" height="1" fill="#cc8800"/>
      {/* mouth */}
      <rect x="4" y="5" width="5" height="2" fill="#2a4a18"/>
      <rect x="5" y="5" width="1" height="1" fill="#ccccaa"/>
      <rect x="7" y="5" width="1" height="1" fill="#ccccaa"/>
      {/* torn clothing */}
      <rect x="3" y="7" width="7" height="6" fill="#3a5a20"/>
      <rect x="3" y="7" width="2" height="3" fill="#2a4a10"/>
      <rect x="8" y="9" width="2" height="4" fill="#2a4a10"/>
      {/* arms stretched out */}
      <rect x="0" y="7" width="3" height="3" fill="#6a9a50"/>
      <rect x="10" y="7" width="3" height="3" fill="#6a9a50"/>
      <rect x="11" y="6" width="2" height="2" fill="#6a9a50"/>
      {/* legs */}
      <rect x="3" y="13" width="3" height="5" fill="#2a4a18"/>
      <rect x="7" y="13" width="3" height="5" fill="#2a4a18"/>
    </svg>
  );

  if (name === "TROLL") return (
    <svg width="72" height="80" viewBox="0 0 18 20" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* horns */}
      <rect x="5" y="0" width="2" height="3" fill="#7a5530"/>
      <rect x="11" y="0" width="2" height="3" fill="#7a5530"/>
      {/* head - big */}
      <rect x="3" y="2" width="12" height="8" fill="#4a7a30"/>
      <rect x="2" y="3" width="1" height="6" fill="#4a7a30"/>
      <rect x="15" y="3" width="1" height="6" fill="#4a7a30"/>
      {/* brow ridge */}
      <rect x="3" y="2" width="12" height="2" fill="#3a6020"/>
      {/* eyes */}
      <rect x="4" y="3" width="4" height="3" fill="#ff8800"/>
      <rect x="10" y="3" width="4" height="3" fill="#ff8800"/>
      <rect x="5" y="4" width="2" height="2" fill="#cc4400"/>
      <rect x="11" y="4" width="2" height="2" fill="#cc4400"/>
      {/* nose */}
      <rect x="7" y="6" width="4" height="2" fill="#3a6020"/>
      <rect x="7" y="7" width="2" height="1" fill="#2a5010"/>
      <rect x="9" y="7" width="2" height="1" fill="#2a5010"/>
      {/* mouth */}
      <rect x="5" y="8" width="8" height="3" fill="#1a3a08"/>
      <rect x="5" y="8" width="2" height="2" fill="#eeeecc"/>
      <rect x="11" y="8" width="2" height="2" fill="#eeeecc"/>
      {/* massive body */}
      <rect x="2" y="10" width="14" height="8" fill="#336618"/>
      <rect x="3" y="10" width="12" height="8" fill="#3a7a1c"/>
      {/* arms - very wide */}
      <rect x="0" y="10" width="3" height="8" fill="#4a7a30"/>
      <rect x="15" y="10" width="3" height="8" fill="#4a7a30"/>
      {/* club */}
      <rect x="16" y="3" width="2" height="12" fill="#7a5020"/>
      <rect x="15" y="2" width="4" height="4" fill="#9a6030"/>
      {/* legs */}
      <rect x="3" y="18" width="5" height="2" fill="#2a5010"/>
      <rect x="10" y="18" width="5" height="2" fill="#2a5010"/>
    </svg>
  );

  if (name === "VAMPIRE") return (
    <svg width="52" height="76" viewBox="0 0 13 19" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* hair */}
      <rect x="3" y="0" width="7" height="3" fill="#110822"/>
      <rect x="2" y="1" width="1" height="3" fill="#110822"/>
      <rect x="10" y="1" width="1" height="3" fill="#110822"/>
      {/* head */}
      <rect x="3" y="1" width="7" height="6" fill="#c0a0cc"/>
      <rect x="2" y="2" width="1" height="4" fill="#c0a0cc"/>
      <rect x="10" y="2" width="1" height="4" fill="#c0a0cc"/>
      {/* eyes */}
      <rect x="4" y="2" width="2" height="2" fill="#dd0000"/>
      <rect x="7" y="2" width="2" height="2" fill="#dd0000"/>
      <rect x="4" y="3" width="1" height="1" fill="#880000"/>
      <rect x="7" y="3" width="1" height="1" fill="#880000"/>
      {/* fangs */}
      <rect x="5" y="6" width="1" height="3" fill="#ffffff"/>
      <rect x="7" y="6" width="1" height="3" fill="#ffffff"/>
      <rect x="4" y="7" width="5" height="1" fill="#996688"/>
      {/* cloak body */}
      <rect x="3" y="8" width="7" height="7" fill="#440a66"/>
      <rect x="4" y="8" width="5" height="7" fill="#550a88"/>
      {/* cape wings */}
      <rect x="0" y="8" width="4" height="9" fill="#330855"/>
      <rect x="9" y="8" width="4" height="9" fill="#330855"/>
      <rect x="1" y="7" width="2" height="2" fill="#330855"/>
      <rect x="10" y="7" width="2" height="2" fill="#330855"/>
      {/* legs */}
      <rect x="4" y="15" width="2" height="4" fill="#220644"/>
      <rect x="7" y="15" width="2" height="4" fill="#220644"/>
    </svg>
  );

  if (name === "DRAGON WHELP") return (
    <svg width="80" height="68" viewBox="0 0 20 17" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      {/* tail */}
      <rect x="0" y="9" width="5" height="2" fill="#9a2020"/>
      <rect x="0" y="8" width="2" height="2" fill="#9a2020"/>
      <rect x="0" y="10" width="2" height="3" fill="#7a1010"/>
      {/* wing left */}
      <rect x="1" y="3" width="6" height="7" fill="#7a1a1a"/>
      <rect x="2" y="2" width="4" height="2" fill="#7a1a1a"/>
      <rect x="1" y="4" width="1" height="5" fill="#9a2a2a"/>
      <rect x="3" y="3" width="1" height="6" fill="#9a2a2a"/>
      {/* body */}
      <rect x="5" y="5" width="10" height="7" fill="#bb2828"/>
      <rect x="4" y="6" width="12" height="5" fill="#cc3333"/>
      {/* belly */}
      <rect x="6" y="7" width="8" height="3" fill="#e08888"/>
      {/* wing right fold */}
      <rect x="13" y="3" width="5" height="6" fill="#7a1a1a"/>
      <rect x="14" y="2" width="4" height="2" fill="#7a1a1a"/>
      {/* neck */}
      <rect x="12" y="3" width="4" height="4" fill="#aa2222"/>
      {/* head */}
      <rect x="13" y="0" width="7" height="5" fill="#aa2222"/>
      <rect x="14" y="0" width="5" height="5" fill="#bb2828"/>
      {/* horns */}
      <rect x="14" y="0" width="1" height="2" fill="#6a1010"/>
      <rect x="18" y="0" width="1" height="2" fill="#6a1010"/>
      {/* eye */}
      <rect x="16" y="1" width="3" height="2" fill="#ff8800"/>
      <rect x="17" y="2" width="1" height="1" fill="#ff4400"/>
      {/* nostril / snout */}
      <rect x="19" y="3" width="1" height="2" fill="#881010"/>
      {/* teeth */}
      <rect x="19" y="4" width="1" height="2" fill="#ffffff"/>
      <rect x="18" y="4" width="1" height="2" fill="#ffffff"/>
      {/* legs */}
      <rect x="6" y="11" width="3" height="5" fill="#9a2020"/>
      <rect x="11" y="11" width="3" height="5" fill="#9a2020"/>
      {/* claws */}
      <rect x="5" y="15" width="1" height="2" fill="#666"/>
      <rect x="7" y="15" width="1" height="2" fill="#666"/>
      <rect x="9" y="15" width="1" height="2" fill="#666"/>
      <rect x="11" y="15" width="1" height="2" fill="#666"/>
      <rect x="13" y="15" width="1" height="2" fill="#666"/>
    </svg>
  );

  // fallback
  return (
    <svg width="52" height="60" viewBox="0 0 13 15" style={{ imageRendering:"pixelated", display:"block", opacity:op }}>
      <rect x="4" y="0" width="5" height="5" fill="#888"/>
      <rect x="5" y="1" width="1" height="2" fill="#f00"/>
      <rect x="7" y="1" width="1" height="2" fill="#f00"/>
      <rect x="3" y="5" width="7" height="6" fill="#666"/>
      <rect x="3" y="11" width="3" height="4" fill="#555"/>
      <rect x="7" y="11" width="3" height="4" fill="#555"/>
    </svg>
  );
}

// ─────────────────────────────────────────────
// DUNGEON SVG BACKDROP
// ─────────────────────────────────────────────
function DungeonBg() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      style={{ position:"absolute", inset:0, width:"100%", height:"100%" }}
    >
      <defs>
        <pattern id="bk" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <rect width="40" height="20" fill="#201208"/>
          <rect x="1" y="1" width="18" height="8" fill="#2e1a0e"/>
          <rect x="21" y="1" width="18" height="8" fill="#281508"/>
          <rect x="1" y="11" width="38" height="8" fill="#2e1a0e"/>
          <rect x="11" y="11" width="18" height="8" fill="#281508"/>
          <rect x="0" y="9" width="40" height="2" fill="#140a00"/>
          <rect x="0" y="0" width="1" height="9" fill="#140a00"/>
          <rect x="20" y="0" width="1" height="9" fill="#140a00"/>
          <rect x="19" y="9" width="1" height="11" fill="#140a00"/>
        </pattern>
        <pattern id="fl" x="0" y="0" width="32" height="16" patternUnits="userSpaceOnUse">
          <rect width="32" height="16" fill="#130d04"/>
          <rect x="1" y="1" width="14" height="6" fill="#1c1206"/>
          <rect x="17" y="1" width="14" height="6" fill="#181004"/>
          <rect x="1" y="9" width="30" height="6" fill="#1c1206"/>
          <rect x="9" y="9" width="14" height="6" fill="#181004"/>
        </pattern>
        <radialGradient id="tc1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,130,0,0.35)"/>
          <stop offset="100%" stopColor="rgba(255,130,0,0)"/>
        </radialGradient>
        <radialGradient id="tc2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,130,0,0.35)"/>
          <stop offset="100%" stopColor="rgba(255,130,0,0)"/>
        </radialGradient>
        <radialGradient id="vig" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.72)"/>
        </radialGradient>
      </defs>
      {/* wall */}
      <rect width="400" height="130" fill="url(#bk)"/>
      {/* floor */}
      <rect y="130" width="400" height="70" fill="url(#fl)"/>
      {/* floor / wall line */}
      <rect y="128" width="400" height="4" fill="#0a0600"/>
      {/* torch glow left */}
      <ellipse cx="48" cy="55" rx="44" ry="38" fill="url(#tc1)"/>
      {/* torch left bracket */}
      <rect x="40" y="42" width="4" height="10" fill="#6a3a12"/>
      <rect x="38" y="38" width="8" height="6" fill="#7a4a18"/>
      {/* torch left flame */}
      <rect x="40" y="28" width="4" height="12" fill="#ff7700" opacity="0.95"/>
      <rect x="41" y="22" width="2" height="10" fill="#ffcc00" opacity="0.9"/>
      <rect x="39" y="28" width="2" height="6" fill="#ff5500" opacity="0.6"/>
      <rect x="43" y="28" width="2" height="6" fill="#ff5500" opacity="0.6"/>
      {/* torch glow right */}
      <ellipse cx="352" cy="55" rx="44" ry="38" fill="url(#tc2)"/>
      {/* torch right */}
      <rect x="356" y="42" width="4" height="10" fill="#6a3a12"/>
      <rect x="354" y="38" width="8" height="6" fill="#7a4a18"/>
      <rect x="356" y="28" width="4" height="12" fill="#ff7700" opacity="0.95"/>
      <rect x="357" y="22" width="2" height="10" fill="#ffcc00" opacity="0.9"/>
      <rect x="355" y="28" width="2" height="6" fill="#ff5500" opacity="0.6"/>
      <rect x="359" y="28" width="2" height="6" fill="#ff5500" opacity="0.6"/>
      {/* center shadow for atmosphere */}
      <ellipse cx="200" cy="100" rx="100" ry="60" fill="rgba(0,0,0,0.22)"/>
      {/* cracks */}
      <polyline points="100,20 104,38 101,55" stroke="#0e0800" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <polyline points="280,35 276,52" stroke="#0e0800" strokeWidth="1" fill="none" opacity="0.4"/>
      {/* vignette */}
      <rect width="400" height="200" fill="url(#vig)"/>
    </svg>
  );
}

// ─────────────────────────────────────────────
// TREASURE CHEST PIXEL ART
// ─────────────────────────────────────────────
function TreasureChest({ open = false }) {
  // Rendered at 3x: viewBox 32×26, display 192×156
  return (
    <svg
      width="192" height="156"
      viewBox="0 0 32 26"
      style={{ imageRendering: "pixelated", display: "block", overflow: "visible" }}
    >
      <defs>
        <radialGradient id="glow-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="rgba(255,220,60,0.9)"/>
          <stop offset="100%" stopColor="rgba(255,140,0,0)"/>
        </radialGradient>
      </defs>

      {open && (
        /* glow behind open chest */
        <ellipse cx="16" cy="15" rx="14" ry="10" fill="url(#glow-gold)" opacity="0.7"/>
      )}

      {/* ── LID ── */}
      {open ? (
        /* open lid – flipped up, hovering above */
        <g>
          {/* lid back panel */}
          <rect x="2"  y="0" width="28" height="7" fill="#6b3a10"/>
          {/* lid top highlight */}
          <rect x="2"  y="0" width="28" height="1" fill="#9a5a20"/>
          {/* lid wood planks */}
          <rect x="2"  y="1" width="9"  height="5" fill="#7a4418"/>
          <rect x="12" y="1" width="8"  height="5" fill="#7a4418"/>
          <rect x="21" y="1" width="9"  height="5" fill="#7a4418"/>
          {/* plank gaps */}
          <rect x="11" y="1" width="1"  height="5" fill="#5a2e0a"/>
          <rect x="20" y="1" width="1"  height="5" fill="#5a2e0a"/>
          {/* metal band across lid */}
          <rect x="2"  y="2" width="28" height="2" fill="#c8952a"/>
          <rect x="2"  y="2" width="28" height="1" fill="#e0b040"/>
          {/* lid rivets */}
          <rect x="4"  y="2" width="2" height="2" fill="#f5d060"/>
          <rect x="26" y="2" width="2" height="2" fill="#f5d060"/>
          <rect x="14" y="2" width="4" height="2" fill="#e8c840"/>
          {/* lid left edge */}
          <rect x="2"  y="0" width="1" height="7" fill="#5a2e0a"/>
          {/* lid right edge */}
          <rect x="29" y="0" width="1" height="7" fill="#5a2e0a"/>
          {/* lid bottom edge */}
          <rect x="2"  y="6" width="28" height="1" fill="#4a2208"/>
        </g>
      ) : (
        /* closed lid – sits on top of body */
        <g>
          {/* lid body */}
          <rect x="1"  y="5" width="30" height="7" fill="#6b3a10"/>
          {/* lid top curve highlight */}
          <rect x="2"  y="5" width="28" height="1" fill="#9a5a20"/>
          {/* lid wood planks */}
          <rect x="2"  y="6" width="9"  height="5" fill="#7a4418"/>
          <rect x="12" y="6" width="8"  height="5" fill="#7a4418"/>
          <rect x="21" y="6" width="9"  height="5" fill="#7a4418"/>
          {/* plank gaps */}
          <rect x="11" y="6" width="1"  height="5" fill="#5a2e0a"/>
          <rect x="20" y="6" width="1"  height="5" fill="#5a2e0a"/>
          {/* metal band across lid */}
          <rect x="1"  y="7" width="30" height="2" fill="#c8952a"/>
          <rect x="1"  y="7" width="30" height="1" fill="#e0b040"/>
          {/* lid rivets */}
          <rect x="3"  y="7" width="2" height="2" fill="#f5d060"/>
          <rect x="27" y="7" width="2" height="2" fill="#f5d060"/>
          {/* lid left slope */}
          <rect x="1"  y="5" width="1" height="7" fill="#5a2e0a"/>
          {/* lid right slope */}
          <rect x="30" y="5" width="1" height="7" fill="#5a2e0a"/>
          {/* lid bottom */}
          <rect x="1"  y="11" width="30" height="1" fill="#4a2208"/>
          {/* lock hasp */}
          <rect x="14" y="9" width="4" height="3" fill="#8a7020"/>
          <rect x="15" y="8" width="2" height="1" fill="#8a7020"/>
          <rect x="15" y="10" width="2" height="1" fill="#c8a030"/>
        </g>
      )}

      {/* ── BODY ── */}
      <g>
        {/* main body */}
        <rect x="1"  y="12" width="30" height="13" fill="#6b3a10"/>
        {/* front face lighter */}
        <rect x="2"  y="13" width="28" height="11" fill="#7a4418"/>
        {/* wood plank lines */}
        <rect x="2"  y="13" width="9"  height="11" fill="#7a4418"/>
        <rect x="12" y="13" width="8"  height="11" fill="#804a1c"/>
        <rect x="21" y="13" width="9"  height="11" fill="#7a4418"/>
        <rect x="11" y="13" width="1"  height="11" fill="#5a2e0a"/>
        <rect x="20" y="13" width="1"  height="11" fill="#5a2e0a"/>
        {/* horizontal metal band */}
        <rect x="1"  y="16" width="30" height="2" fill="#c8952a"/>
        <rect x="1"  y="16" width="30" height="1" fill="#e0b040"/>
        {/* body rivets */}
        <rect x="3"  y="16" width="2" height="2" fill="#f5d060"/>
        <rect x="27" y="16" width="2" height="2" fill="#f5d060"/>
        {/* bottom metal band */}
        <rect x="1"  y="22" width="30" height="2" fill="#c8952a"/>
        <rect x="1"  y="22" width="30" height="1" fill="#e0b040"/>
        {/* feet */}
        <rect x="2"  y="24" width="5" height="2" fill="#5a2e0a"/>
        <rect x="25" y="24" width="5" height="2" fill="#5a2e0a"/>
        <rect x="2"  y="24" width="5" height="1" fill="#7a4418"/>
        <rect x="25" y="24" width="5" height="1" fill="#7a4418"/>
        {/* left edge shadow */}
        <rect x="1"  y="12" width="1" height="13" fill="#5a2e0a"/>
        {/* right edge shadow */}
        <rect x="30" y="12" width="1" height="13" fill="#5a2e0a"/>
        {/* top edge of body */}
        <rect x="1"  y="12" width="30" height="1" fill="#4a2208"/>

        {open ? (
          /* open lock – broken hasp */
          <>
            <rect x="14" y="13" width="4" height="3" fill="#8a7020"/>
            <rect x="15" y="12" width="2" height="2" fill="#aaa020" opacity="0.6"/>
          </>
        ) : (
          /* closed lock */
          <>
            <rect x="13" y="12" width="6" height="5" fill="#8a7020"/>
            <rect x="14" y="12" width="4" height="5" fill="#9a8028"/>
            <rect x="13" y="13" width="6" height="3" fill="#b09030"/>
            <rect x="14" y="13" width="4" height="3" fill="#c8a838"/>
            {/* keyhole */}
            <rect x="15" y="14" width="2" height="1" fill="#4a3008"/>
            <rect x="15" y="15" width="2" height="1" fill="#4a3008"/>
            <rect x="16" y="15" width="1" height="2" fill="#4a3008"/>
          </>
        )}
      </g>

      {open && (
        /* glowing interior visible above body */
        <>
          <rect x="3"  y="9"  width="26" height="4" fill="#ffe080" opacity="0.85"/>
          <rect x="4"  y="9"  width="24" height="3" fill="#fff4b0" opacity="0.9"/>
          {/* sparkle pixels */}
          <rect x="7"  y="7"  width="2" height="2" fill="#fff" opacity="0.9"/>
          <rect x="14" y="5"  width="2" height="2" fill="#ffe066" opacity="0.95"/>
          <rect x="22" y="7"  width="2" height="2" fill="#fff" opacity="0.85"/>
          <rect x="10" y="4"  width="1" height="1" fill="#fff" opacity="0.7"/>
          <rect x="19" y="3"  width="1" height="1" fill="#fff" opacity="0.7"/>
          <rect x="25" y="5"  width="1" height="1" fill="#ffe066" opacity="0.8"/>
          <rect x="6"  y="4"  width="1" height="1" fill="#ffd0a0" opacity="0.7"/>
        </>
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

const DIFFICULTIES = [
  { id:"trivial",   label:"TRIVIAL",   tp:10,  color:"#c8c8f0", glow:"rgba(200,200,240,0.3)",  icon:"·"   },
  { id:"easy",      label:"EASY",      tp:25,  color:"#4ecb71", glow:"rgba(78,203,113,0.4)", icon:"▲"   },
  { id:"medium",    label:"MEDIUM",    tp:50,  color:"#f5c842", glow:"rgba(245,200,66,0.4)", icon:"▲▲"  },
  { id:"hard",      label:"HARD",      tp:100, color:"#e07030", glow:"rgba(224,112,48,0.4)", icon:"▲▲▲" },
  { id:"legendary", label:"LEGENDARY", tp:200, color:"#cc44ff", glow:"rgba(204,68,255,0.5)", icon:"★"   },
];
const getDiff = id => DIFFICULTIES.find(d => d.id === id) || DIFFICULTIES[1];

// ALL moves cost TP
const MOVES = [
  { id:"strike", name:"STRIKE",     tpCost:10, dmgMult:1.0,          icon:"⚔",  desc:"Basic attack"  },
  { id:"slash",  name:"PWR SLASH",  tpCost:20, dmgMult:1.8,          icon:"🗡",  desc:"Heavy blow"    },
  { id:"magic",  name:"MAGIC BOLT", tpCost:30, dmgFixed:52,          icon:"✦",  desc:"Fixed 52 dmg"  },
  { id:"fury",   name:"FURY",       tpCost:45, dmgMult:2.8,          icon:"💥", desc:"Massive hit"   },
];
const REVIVE_COST = 60;
const GACHA_TICKET_COST = 50; // coins per ticket

// Pool is empty — items/characters will be added here in future updates
const GACHA_POOL = [];
// Rarity weights (ready for when pool is populated)
const GACHA_WEIGHTS = { common: 60, rare: 30, epic: 10 };

// ── Catalogs (no content yet — structure ready for future additions) ──────
const CHARACTERS_CATALOG = [
  {
    id: "mage",
    name: "THE MAGE",
    desc: "Arcane Wizard of the North",
    baseAtk: 15, baseDef: 5, baseHp: 100,
    unlocked: true,
    sprite: () => <HeroSprite />,
  },
  // Future characters will go here
  { id: "locked_1", name: "???", desc: "Unlock to discover", unlocked: false },
  { id: "locked_2", name: "???", desc: "Unlock to discover", unlocked: false },
];

const PETS_CATALOG = [
  // Future pets will go here
  { id: "pet_locked_1", name: "???", desc: "Unknown creature", unlocked: false },
  { id: "pet_locked_2", name: "???", desc: "Unknown creature", unlocked: false },
];

// ── Equipment slots ────────────────────────────────────────────────────────
const EQUIP_SLOTS = ["weapon", "armor", "shield"];

const MONSTERS = [
  { name:"SLIME",        tier:1, hp:40,  atk:24, def:1,  xpR:20,  coinR:5  },
  { name:"GOBLIN",       tier:1, hp:55,  atk:30, def:2,  xpR:28,  coinR:8  },
  { name:"GIANT RAT",    tier:1, hp:45,  atk:26, def:1,  xpR:22,  coinR:6  },
  { name:"ORC",          tier:2, hp:90,  atk:44, def:5,  xpR:50,  coinR:15 },
  { name:"SKELETON",     tier:2, hp:70,  atk:40, def:4,  xpR:45,  coinR:12 },
  { name:"ZOMBIE",       tier:2, hp:100, atk:38, def:3,  xpR:48,  coinR:14 },
  { name:"TROLL",        tier:3, hp:150, atk:60, def:8,  xpR:90,  coinR:30 },
  { name:"VAMPIRE",      tier:3, hp:130, atk:65, def:6,  xpR:95,  coinR:35 },
  { name:"DRAGON WHELP", tier:3, hp:180, atk:55, def:10, xpR:110, coinR:40 },
];

function tierForLevel(lvl) { return lvl <= 2 ? 1 : lvl <= 5 ? 2 : 3; }

function spawnMonster(lvl) {
  const pool = MONSTERS.filter(m => m.tier === tierForLevel(lvl));
  const t = pool[Math.floor(Math.random() * pool.length)];
  const s = 1 + (lvl - 1) * 0.06;
  return {
    name: t.name,
    maxHp: Math.round(t.hp*s), hp: Math.round(t.hp*s),
    atk: Math.round(t.atk*s), def: Math.round(t.def*s),
    xpR: Math.round(t.xpR*s), coinR: Math.round(t.coinR*s),
  };
}

function baseChar() {
  return { level:1, xp:0, xpToNext:100, maxHp:100, hp:100, atk:15, def:5, coins:0 };
}
function xpNeeded(lvl) { return 100 * lvl; }

function getInitialTasks() {
  return [
    { id:1, text:"Slay the Dragon of Procrastination", done:false, created:Date.now()-3000, difficulty:"legendary" },
    { id:2, text:"Forge the Sword of Productivity",    done:false, created:Date.now()-2000, difficulty:"hard"      },
    { id:3, text:"Deliver the Sacred Scroll",          done:false, created:Date.now()-1000, difficulty:"medium"    },
  ];
}

// ─────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────
export default function App() {
  const [tasks,      setTasks]      = useState(getInitialTasks);
  const [tp,         setTp]         = useState(0);
  const [char,       setChar]       = useState(baseChar);
  const [loaded,     setLoaded]     = useState(false);
  const [screen,     setScreen]     = useState("home");
  const [menuOpen,   setMenuOpen]   = useState(false);

  // inventory & equipment
  const [inventory,  setInventory]  = useState([]);   // owned gear items
  const [equipped,   setEquipped]   = useState({ weapon: null, armor: null, shield: null });
  const [activeChar, setActiveChar] = useState("mage");
  const [activePet,  setActivePet]  = useState(null);

  const [input,      setInput]      = useState("");
  const [newDiff,    setNewDiff]    = useState("easy");
  const [filter,     setFilter]     = useState("all");
  const [editingId,  setEditingId]  = useState(null);
  const [editText,   setEditText]   = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [tpPopups,   setTpPopups]   = useState([]);
  const [sparkles,   setSparkles]   = useState([]);
  const inputRef = useRef(null);

  // dungeon state
  const [monster,    setMonster]    = useState(null);
  const [dStatus,    setDStatus]    = useState("fighting");
  const [battleLog,  setBattleLog]  = useState([]);
  const [loot,       setLoot]       = useState(null);
  const [shakeP,     setShakeP]     = useState(false);
  const [shakeM,     setShakeM]     = useState(false);
  const [victoryFlash, setVictoryFlash] = useState(false);

  // gacha state
  const [gachaTickets, setGachaTickets] = useState(0);
  // "idle" | "shaking" | "opening" | "revealed"
  const [chestAnim,    setChestAnim]    = useState("idle");
  const [gachaResult,  setGachaResult]  = useState(null);

  // ── Storage ─────────────────────────────────
  useEffect(() => {
    async function load() {
      try {
        const [tR, qR, cR, invR, eqR, acR, gtR] = await Promise.allSettled([
          window.storage.get("tp-v3"),
          window.storage.get("quests-v5"),
          window.storage.get("char-v3"),
          window.storage.get("inventory-v1"),
          window.storage.get("equipped-v1"),
          window.storage.get("activeChar-v1"),
          window.storage.get("gachaTickets-v1"),
        ]);
        if (tR.status==="fulfilled" && tR.value) setTp(parseInt(tR.value.value)||0);
        if (qR.status==="fulfilled" && qR.value) setTasks(JSON.parse(qR.value.value));
        if (cR.status==="fulfilled" && cR.value) setChar(JSON.parse(cR.value.value));
        if (invR.status==="fulfilled" && invR.value) setInventory(JSON.parse(invR.value.value));
        if (eqR.status==="fulfilled" && eqR.value) setEquipped(JSON.parse(eqR.value.value));
        if (acR.status==="fulfilled" && acR.value) setActiveChar(acR.value.value);
        if (gtR.status==="fulfilled" && gtR.value) setGachaTickets(parseInt(gtR.value.value)||0);
      } catch(e){}
      setLoaded(true);
    }
    load();
  }, []);
  useEffect(() => { if (!loaded) return; window.storage.set("tp-v3", String(tp)).catch(()=>{}); }, [tp, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("quests-v5", JSON.stringify(tasks)).catch(()=>{}); }, [tasks, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("char-v3", JSON.stringify(char)).catch(()=>{}); }, [char, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("inventory-v1", JSON.stringify(inventory)).catch(()=>{}); }, [inventory, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("equipped-v1", JSON.stringify(equipped)).catch(()=>{}); }, [equipped, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("activeChar-v1", activeChar).catch(()=>{}); }, [activeChar, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("gachaTickets-v1", String(gachaTickets)).catch(()=>{}); }, [gachaTickets, loaded]);

  // ── Spawn on dungeon enter ───────────────────
  useEffect(() => {
    if (screen === "dungeon" && !monster && dStatus !== "dead") {
      doSpawn(char);
    }
  }, [screen]);

  const doSpawn = (currentChar) => {
    const m = spawnMonster(currentChar.level);
    setMonster(m);
    setDStatus("fighting");
    setLoot(null);
    setVictoryFlash(false);
    setBattleLog(p => [`▶ ${m.name} appears!`, ...p].slice(0, 8));
  };

  // ── Quest helpers ────────────────────────────
  const awardTP = (amount, x, y) => {
    const id = Date.now() + Math.random();
    setTpPopups(p => [...p, { id, amount, x, y }]);
    setTimeout(() => setTpPopups(p => p.filter(e => e.id !== id)), 1400);
    const ns = Array.from({length:6},(_,i)=>({
      id:id+i, x, y,
      dx:(Math.random()-.5)*80, dy:-(Math.random()*60+20),
      color:["#ffe066","#ff6b6b","#51cf66","#74c0fc","#cc5de8"][i%5],
    }));
    setSparkles(p => [...p, ...ns]);
    setTimeout(() => setSparkles(p => p.filter(s => !ns.find(n=>n.id===s.id))), 800);
    setTp(p => p + amount);
  };

  const addTask = () => {
    const text = input.trim(); if (!text) return;
    setTasks(p => [{ id:Date.now(), text, done:false, created:Date.now(), difficulty:newDiff }, ...p]);
    setInput(""); inputRef.current?.focus();
  };

  const toggleTask = (id, e) => {
    const task = tasks.find(t=>t.id===id); if (!task) return;
    const nowDone = !task.done;
    setTasks(p => p.map(t => t.id===id ? {...t, done:nowDone} : t));
    const pts = getDiff(task.difficulty).tp;
    if (nowDone) {
      const r = e?.currentTarget?.getBoundingClientRect?.();
      awardTP(pts, r ? r.left+r.width/2 : window.innerWidth/2, r ? r.top : 200);
    } else {
      setTp(p => Math.max(0, p - pts));
    }
  };

  const deleteTask = (id) => {
    setDeletingId(id);
    setTimeout(() => { setTasks(p=>p.filter(t=>t.id!==id)); setDeletingId(null); }, 300);
  };
  const startEdit = (task) => { setEditingId(task.id); setEditText(task.text); };
  const saveEdit = () => {
    if (editText.trim()) setTasks(p=>p.map(t=>t.id===editingId?{...t,text:editText.trim()}:t));
    setEditingId(null);
  };
  const clearDone = () => setTasks(p=>p.filter(t=>!t.done));

  // ── Equipment helpers ────────────────────────────────────────────────────
  const equipItem = (item) => {
    setEquipped(prev => ({ ...prev, [item.slot]: item.id }));
  };
  const unequipSlot = (slot) => {
    setEquipped(prev => ({ ...prev, [slot]: null }));
  };
  // Compute effective stats from equipped gear
  const effectiveStats = () => {
    const base = { ...char };
    inventory.forEach(item => {
      const slot = item.slot;
      if (equipped[slot] === item.id) {
        if (item.stats.atk) base.atk = (base.atk||0) + item.stats.atk;
        if (item.stats.def) base.def = (base.def||0) + item.stats.def;
        if (item.stats.hp)  base.maxHp = (base.maxHp||0) + item.stats.hp;
      }
    });
    return base;
  };

  // ── Gacha helpers ─────────────────────────────────────────────────────────
  const buyTicket = () => {
    if (char.coins < GACHA_TICKET_COST) return;
    setChar(p => ({ ...p, coins: p.coins - GACHA_TICKET_COST }));
    setGachaTickets(p => p + 1);
  };

  const openChest = () => {
    if (gachaTickets < 1 || chestAnim !== "idle") return;
    setChestAnim("shaking");
    setTimeout(() => {
      setChestAnim("opening");
      // Draw from pool (currently empty → placeholder result)
      let result;
      if (GACHA_POOL.length === 0) {
        result = { empty: true };
      } else {
        // Weighted random draw
        const roll = Math.random() * 100;
        let rarity = roll < GACHA_WEIGHTS.epic ? "epic"
                   : roll < GACHA_WEIGHTS.epic + GACHA_WEIGHTS.rare ? "rare"
                   : "common";
        const pool = GACHA_POOL.filter(i => i.rarity === rarity);
        result = pool.length ? pool[Math.floor(Math.random() * pool.length)] : { empty: true };
      }
      setGachaResult(result);
      setGachaTickets(p => p - 1);
      setTimeout(() => setChestAnim("revealed"), 300);
    }, 1200);
  };

  const resetChest = () => {
    setChestAnim("idle");
    setGachaResult(null);
  };
  const addLog = msg => setBattleLog(p => [msg, ...p].slice(0, 8));

  const calcDmg = (atk, def, move) => {
    const raw = move.dmgFixed !== undefined ? move.dmgFixed : Math.round(atk * move.dmgMult);
    const reduced = Math.max(1, raw - Math.floor(def * 0.4));
    return Math.max(1, reduced + Math.floor(Math.random()*5) - 2);
  };

  const performMove = (move) => {
    if (dStatus !== "fighting" || !monster) return;
    if (tp < move.tpCost) return;
    setTp(p => p - move.tpCost);

    const pDmg = calcDmg(char.atk, monster.def, move);
    const newMHp = Math.max(0, monster.hp - pDmg);
    setShakeM(true); setTimeout(()=>setShakeM(false), 350);

    if (newMHp <= 0) {
      setMonster(p => ({...p, hp:0}));
      // apply loot to char
      let nc = { ...char, coins: char.coins + monster.coinR };
      let xpLeft = nc.xp + monster.xpR;
      let leveled = false;
      while (xpLeft >= nc.xpToNext) {
        xpLeft -= nc.xpToNext;
        const newLvl = nc.level + 1;
        nc = { ...nc, level:newLvl, xpToNext:xpNeeded(newLvl),
          maxHp:nc.maxHp+15, hp:nc.maxHp+15, atk:nc.atk+3, def:nc.def+1 };
        leveled = true;
      }
      nc.xp = xpLeft;
      setChar(nc);
      const lootObj = { xp:monster.xpR, coins:monster.coinR, leveled, newLevel:nc.level, name:monster.name };
      setLoot(lootObj);
      addLog(`⚔ ${pDmg} dmg — ${monster.name} slain! +${monster.coinR}⚙`);
      if (leveled) addLog(`★ LEVEL UP! Now LVL ${nc.level}!`);
      setDStatus("victory_flash");
      setVictoryFlash(true);
      // auto-spawn next monster after brief pause
      setTimeout(() => {
        setVictoryFlash(false);
        doSpawn(nc);
      }, 1600);
      return;
    }

    // monster counter-attacks
    const mDmg = calcDmg(monster.atk, char.def, { dmgMult:1.0 });
    const newPHp = Math.max(0, char.hp - mDmg);
    setMonster(p => ({...p, hp:newMHp}));
    setShakeP(true); setTimeout(()=>setShakeP(false), 350);

    if (newPHp <= 0) {
      setChar(p => ({...p, hp:0}));
      setDStatus("dead");
      addLog(`⚔ You deal ${pDmg}. ${monster.name} strikes ${mDmg}!`);
      addLog(`💀 You have fallen...`);
    } else {
      setChar(p => ({...p, hp:newPHp}));
      addLog(`⚔ You deal ${pDmg}. ${monster.name} hits ${mDmg}.`);
    }
  };

  const revive = () => {
    if (tp < REVIVE_COST) return;
    setTp(p => p - REVIVE_COST);
    setChar(p => ({...p, hp:p.maxHp}));
    setDStatus("fighting");
    addLog(`✦ Spent ${REVIVE_COST} TP — risen at full HP!`);
  };

  const navTo = dest => {
    setMenuOpen(false);
    if (dest === "dungeon" && screen !== "dungeon") {
      setMonster(null);
      setDStatus("fighting");
      setBattleLog([]);
      setLoot(null);
      setVictoryFlash(false);
    }
    if (dest !== "gacha") {
      setChestAnim("idle");
      setGachaResult(null);
    }
    setScreen(dest);
  };

  const screenTitle = {
    home: "📜 QUEST LOG",
    dungeon: "⚔ DUNGEON",
    shop: "🏪 SHOP",
    gacha: "✦ TREASURE CHEST",
    equipment: "🛡 EQUIPMENT",
    characters: "👤 CHARACTERS",
  }[screen] || "⚔ QUEST LOG";

  // ── Derived ──────────────────────────────────
  const filtered    = tasks.filter(t => filter==="all"?true : filter==="active"?!t.done : t.done);
  const activeCount = tasks.filter(t=>!t.done).length;
  const doneCount   = tasks.filter(t=>t.done).length;
  const charHpPct   = Math.round((char.hp/char.maxHp)*100);
  const monHpPct    = monster ? Math.round((monster.hp/monster.maxHp)*100) : 0;
  const xpPct       = Math.round((char.xp/char.xpToNext)*100);

  return (
    <div style={{minHeight:"100vh",background:"#07070f",fontFamily:"'Press Start 2P',monospace",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323:wght@400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{
          --gold:#f5c842;--green:#4ecb71;--red:#e05252;
          --blue:#74c0fc;--purple:#cc44ff;
          --bg:#07070f;--panel:#0f0f1e;--panel2:#13132a;
          --border:#2a2a50;--text:#c8c8f0;--muted:#484878;
        }

        /* TOPBAR */
        .topbar{
          position:sticky;top:0;z-index:300;
          display:flex;align-items:center;justify-content:space-between;
          padding:.6rem 1rem;
          background:var(--panel);border-bottom:3px solid var(--border);
          box-shadow:0 2px 12px rgba(0,0,0,.6);
        }
        .topbar-l{display:flex;align-items:center;gap:.6rem;}
        .menubtn{
          width:42px;height:42px;background:#0a0a1c;
          border:2px solid var(--border);color:var(--text);
          display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:5px;cursor:pointer;
          transition:border-color .15s;flex-shrink:0;
        }
        .menubtn:hover{border-color:var(--gold);}
        .menubtn span{display:block;width:18px;height:2px;background:currentColor;}
        .topbar-title{
          font-size:.9rem;color:var(--gold);
          text-shadow:1px 1px 0 #000;letter-spacing:.04em;
        }
        .topbar-r{display:flex;align-items:center;gap:.5rem;}
        .tp-pill{
          font-size:.62rem;background:#180f00;
          border:2px solid var(--gold);color:var(--gold);
          padding:.3rem .55rem;white-space:nowrap;
        }
        .tp-pill b{color:#fff;text-shadow:0 0 6px var(--gold);margin-right:3px;}
        .stat-badge{
          font-family:'VT323',monospace;font-size:1.4rem;
          color:var(--muted);border:1px solid var(--border);
          padding:2px 7px;background:var(--bg);white-space:nowrap;
        }
        .stat-badge span{color:var(--green);}
        .stat-badge.c span{color:var(--gold);}
        .stat-badge.l span{color:var(--purple);}

        /* DROPDOWN */
        .menu-overlay{position:fixed;inset:0;z-index:280;}
        .dropdown{
          position:absolute;top:calc(100% + 3px);left:.6rem;z-index:290;
          background:var(--panel2);border:2px solid var(--border);
          box-shadow:4px 4px 0 #000;min-width:240px;
        }
        .dditem{
          display:block;width:100%;padding:.7rem 1rem;
          font-size:.65rem;color:var(--text);
          background:transparent;border:none;
          border-bottom:1px solid var(--border);
          text-align:left;cursor:pointer;transition:background .1s;
          font-family:'Press Start 2P',monospace;
        }
        .dditem:last-child{border-bottom:none;}
        .dditem:hover{background:#1a1a35;color:var(--gold);}
        .dditem.back{color:var(--muted);}
        .dditem.back:hover{color:var(--red);}

        /* HOME */
        .home{max-width:100%;width:100%;padding:1rem 1.2rem;}
        .pbox{background:var(--panel);border:3px solid var(--border);box-shadow:3px 3px 0 #000;}
        .inp-sec{padding:.8rem 1rem;margin-bottom:.65rem;}
        .inp-lbl{font-size:.55rem;color:var(--muted);margin-bottom:.4rem;letter-spacing:.08em;}
        .inp-row{display:flex;gap:.4rem;margin-bottom:.55rem;}
        .task-inp{
          flex:1;background:var(--bg);border:2px solid var(--border);
          color:var(--text);padding:.55rem .7rem;
          font-family:'VT323',monospace;font-size:1.5rem;outline:none;
        }
        .task-inp:focus{border-color:var(--gold);}
        .task-inp::placeholder{color:var(--muted);}
        .add-btn{
          background:#0e1c06;border:2px solid var(--green);color:var(--green);
          padding:.55rem .9rem;font-family:'Press Start 2P',monospace;font-size:.6rem;
          box-shadow:2px 2px 0 #000;cursor:pointer;white-space:nowrap;transition:all .1s;
        }
        .add-btn:hover{background:#142808;}
        .add-btn:active{transform:translate(1px,1px);box-shadow:1px 1px 0 #000;}
        .diff-pick{display:flex;align-items:center;gap:.3rem;flex-wrap:wrap;}
        .dpl{font-size:.5rem;color:var(--muted);white-space:nowrap;}
        .db{
          background:var(--bg);border:2px solid #1e1e3a;color:var(--muted);
          padding:4px 8px;font-family:'Press Start 2P',monospace;font-size:.46rem;
          box-shadow:1px 1px 0 #000;cursor:pointer;transition:all .1s;
        }
        .db.sel{box-shadow:1px 1px 0 #000,0 0 6px var(--dg,transparent);}
        .db:hover{color:var(--text);}
        .filter-sec{display:flex;margin-bottom:.65rem;overflow:hidden;}
        .fb{
          flex:1;background:#09091a;border:none;border-right:2px solid var(--border);
          color:var(--muted);padding:.55rem;font-family:'Press Start 2P',monospace;
          font-size:.55rem;cursor:pointer;transition:all .1s;
        }
        .fb:last-child{border-right:none;}
        .fb:hover{color:var(--text);}
        .fb.on{background:#141430;color:var(--gold);}
        .task-list{margin-bottom:.65rem;overflow:hidden;}
        .q-hdr{
          font-size:.55rem;color:var(--muted);
          padding:.6rem .85rem .4rem;border-bottom:2px solid var(--border);letter-spacing:.07em;
        }
        .empty{font-family:'VT323',monospace;font-size:1.5rem;color:var(--muted);text-align:center;padding:1.6rem;}
        .ti{
          display:flex;align-items:center;gap:.55rem;
          padding:.6rem .85rem;border-bottom:2px solid var(--border);transition:all .3s;
        }
        .ti:last-of-type{border-bottom:none;}
        .ti:hover{background:rgba(255,255,255,.01);}
        .ti.del{opacity:0;transform:translateX(14px);}
        .cb{
          width:24px;height:24px;border:2px solid var(--border);background:var(--bg);
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;font-size:14px;color:var(--green);cursor:pointer;transition:all .1s;
        }
        .cb:hover{border-color:var(--green);}
        .cb.chk{background:#0a180a;border-color:var(--green);box-shadow:0 0 5px rgba(78,203,113,.3);}
        .tt{
          font-family:'VT323',monospace;font-size:1.4rem;color:var(--text);
          flex:1;line-height:1.35;word-break:break-word;cursor:default;
        }
        .tt.done{color:var(--muted);text-decoration:line-through;text-decoration-color:#2a2a50;}
        .edit-inp{
          flex:1;background:var(--bg);border:2px solid var(--gold);
          color:var(--text);padding:3px 6px;
          font-family:'VT323',monospace;font-size:1.4rem;outline:none;
        }
        .dbadge{
          font-family:'Press Start 2P',monospace;font-size:.42rem;
          border:2px solid;padding:3px 7px;white-space:nowrap;
        }
        .xph{margin-left:3px;opacity:.55;}
        .ta{display:flex;gap:.15rem;flex-shrink:0;}
        .ib{
          background:transparent;border:2px solid transparent;
          color:var(--muted);padding:3px 6px;font-size:1.1rem;cursor:pointer;transition:all .1s;
        }
        .ib:hover{border-color:var(--border);color:var(--text);}
        .ib.del-btn:hover{border-color:var(--red);color:var(--red);}
        .foot{
          display:flex;justify-content:space-between;align-items:center;
          padding:.45rem .85rem;border-top:2px solid var(--border);
        }
        .fn{font-size:.46rem;color:var(--muted);}
        .clr-btn{
          background:#180a0a;border:2px solid var(--red);color:var(--red);
          padding:5px 9px;font-family:'Press Start 2P',monospace;font-size:.46rem;
          box-shadow:2px 2px 0 #000;cursor:pointer;transition:all .1s;
        }
        .clr-btn:hover{background:#220e0e;}

        /* DUNGEON FULL SCREEN */
        .dscreen{
          position:fixed;inset:0;z-index:100;
          display:flex;flex-direction:column;
          background:var(--bg);overflow-y:auto;
        }
        .dscreen-push{padding-top:0;}

        /* ARENA */
        .arena{
          position:relative;
          width:100%;flex-shrink:0;
          height:44vh;min-height:200px;max-height:320px;
          overflow:hidden;
          border-bottom:3px solid #140a00;
        }
        .arena-stage{position:absolute;inset:0;z-index:2;}
        .slot-hero{
          position:absolute;left:22%;bottom:8%;
          transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:5px;
        }
        .slot-enemy{
          position:absolute;left:78%;bottom:8%;
          transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:5px;
        }
        .slot-hero.shake{animation:shk-l .32s ease;}
        @keyframes shk-l{0%,100%{transform:translateX(-50%)}25%{transform:translateX(calc(-50% - 7px))}75%{transform:translateX(calc(-50% + 7px))}}
        .slot-enemy.shake{animation:shk-r .32s ease;}
        @keyframes shk-r{0%,100%{transform:translateX(-50%)}25%{transform:translateX(calc(-50% - 7px))}75%{transform:translateX(calc(-50% + 7px))}}
        .slot-enemy.dying{animation:sinkOut .5s ease forwards;}
        @keyframes sinkOut{0%{opacity:1;transform:translateX(-50%) translateY(0)}100%{opacity:0;transform:translateX(-50%) translateY(18px)}}

        .nametag{
          font-size:.65rem;background:rgba(7,7,15,.9);
          border:1px solid var(--border);color:var(--text);
          padding:4px 10px;white-space:nowrap;pointer-events:none;
          text-shadow:1px 1px 0 #000;
        }
        .hpbar-wrap{width:160px;}
        .hpbar-lbl{
          font-size:.52rem;color:rgba(200,200,240,.6);
          display:flex;justify-content:space-between;margin-bottom:4px;
        }
        .hpbar-track{height:10px;background:#08081a;border:1px solid rgba(42,42,80,.5);overflow:hidden;}
        .hpbar-fill{height:100%;transition:width .3s;}
        .hi{background:var(--green);}
        .md{background:var(--gold);}
        .lo{background:var(--red);}
        .xpfill{background:var(--purple);}

        /* DUNGEON LOWER */
        .dun-lower{
          flex:1;display:flex;flex-direction:column;
          max-width:800px;width:100%;margin:0 auto;
          padding:.8rem 1rem;
        }
        .blog{
          background:var(--bg);border:2px solid var(--border);
          padding:.55rem .8rem;margin-bottom:.6rem;min-height:90px;
        }
        .blog-t{font-size:.55rem;color:var(--muted);margin-bottom:.3rem;letter-spacing:.06em;}
        .blog-e{font-family:'VT323',monospace;font-size:1.5rem;color:var(--text);line-height:1.5;}
        .blog-e.fresh{color:#fff;}
        .moves-grid{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.6rem;}
        .mv{
          background:var(--panel2);border:2px solid var(--border);
          padding:.7rem .6rem;font-family:'Press Start 2P',monospace;
          color:var(--text);box-shadow:2px 2px 0 #000;cursor:pointer;
          display:flex;flex-direction:column;gap:6px;transition:all .1s;text-align:left;
        }
        .mv:hover:not(:disabled){background:#1a1a35;border-color:var(--gold);}
        .mv:active:not(:disabled){transform:translate(1px,1px);box-shadow:1px 1px 0 #000;}
        .mv:disabled{opacity:.22;cursor:not-allowed;}
        .mv-n{font-size:.65rem;}
        .mv-c{font-size:.55rem;color:var(--gold);}
        .mv-d{font-size:.5rem;color:var(--muted);font-family:'VT323',monospace;margin-top:2px;}
        .tp-hint{font-size:.55rem;color:var(--muted);text-align:center;padding:.3rem 0;}
        .tp-hint span{color:var(--gold);}
        .revive-btn{
          width:100%;background:#160a00;border:3px solid var(--gold);color:var(--gold);
          padding:.8rem;font-family:'Press Start 2P',monospace;font-size:.7rem;
          box-shadow:3px 3px 0 #000;cursor:pointer;
          display:flex;flex-direction:column;align-items:center;gap:7px;
          transition:all .1s;margin-bottom:.6rem;
        }
        .revive-btn:hover:not(:disabled){background:#201200;}
        .revive-btn:disabled{opacity:.25;cursor:not-allowed;}
        .revive-sub{font-size:.55rem;color:var(--muted);}
        .victory-flash{
          background:#071a07;border:2px solid var(--green);
          padding:.7rem;margin-bottom:.6rem;text-align:center;
          animation:vflash .3s ease;
        }
        @keyframes vflash{0%{transform:scale(.96);opacity:.4}100%{transform:scale(1);opacity:1}}
        .vf-t{font-size:.72rem;color:var(--green);margin-bottom:.3rem;}
        .vf-items{font-family:'VT323',monospace;font-size:1.6rem;color:var(--text);line-height:1.6;}
        .vf-lvl{font-size:.65rem;color:var(--gold);margin-top:.25rem;text-shadow:0 0 8px rgba(245,200,66,.5);}

        /* SHOP */
        .shop-wrap{max-width:600px;margin:0 auto;padding:1rem 1rem;}
        .shop-title{font-size:.85rem;color:var(--gold);margin-bottom:.85rem;text-align:center;}
        .merchant{display:flex;flex-direction:column;align-items:center;padding:1rem .7rem;gap:.7rem;}
        .m-icon{font-size:3.2rem;}
        .m-name{font-size:.65rem;color:var(--gold);}
        .m-speech{
          background:var(--bg);border:2px solid var(--border);
          padding:.75rem .9rem;font-family:'VT323',monospace;font-size:1.4rem;
          color:var(--text);text-align:center;line-height:1.6;width:100%;position:relative;
        }
        .m-speech::before{
          content:'';position:absolute;top:-8px;left:50%;transform:translateX(-50%);
          width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;
          border-bottom:8px solid var(--border);
        }
        .coins-disp{font-size:.58rem;color:var(--muted);}
        .coins-disp span{color:var(--gold);}
        .soon{
          font-size:.55rem;color:var(--muted);text-align:center;
          border:2px dashed var(--border);padding:.9rem;width:100%;line-height:2.4;
        }

        /* SHARED SCREEN WRAP */
        .screen-wrap{max-width:980px;margin:0 auto;padding:1rem 1.2rem;}
        .screen-title{font-size:.9rem;color:var(--gold);margin-bottom:1.1rem;text-align:center;text-shadow:2px 2px 0 #000;}
        .sect-lbl{
          font-size:.62rem;color:var(--muted);border-bottom:2px solid var(--border);
          padding-bottom:.45rem;margin-bottom:.9rem;letter-spacing:.05em;
        }

        /* EQUIPMENT */
        .equip-grid{
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(170px,1fr));
          gap:.8rem;margin-bottom:1.1rem;
        }
        .equip-card{
          background:var(--panel);border:3px solid var(--border);
          padding:.8rem .7rem;display:flex;flex-direction:column;align-items:center;gap:.45rem;
          box-shadow:3px 3px 0 #000;position:relative;cursor:pointer;transition:border-color .15s;
        }
        .equip-card:hover{border-color:var(--gold);}
        .equip-card.equipped-active{border-color:var(--green);box-shadow:3px 3px 0 #000,0 0 10px rgba(78,203,113,.25);}
        .equip-card.rarity-common{background:#0e0e18;}
        .equip-card.rarity-rare{background:#080e1e;}
        .equip-card.rarity-epic{background:#10081c;}
        .rarity-label{
          font-size:.42rem;padding:2px 6px;border:1px solid;
          position:absolute;top:6px;right:6px;
        }
        .rarity-label.common{color:#888;border-color:#555;}
        .rarity-label.rare{color:var(--blue);border-color:var(--blue);}
        .rarity-label.epic{color:var(--purple);border-color:var(--purple);}
        .equip-name{font-size:.55rem;color:var(--text);text-align:center;line-height:1.4;margin-top:.2rem;}
        .equip-type{font-size:.42rem;color:var(--muted);}
        .equip-stats{font-family:'VT323',monospace;font-size:1.2rem;color:var(--text);text-align:center;line-height:1.5;width:100%;}
        .equip-stats .pos{color:var(--green);}
        .equip-stats .neg{color:var(--red);}
        .equip-btn{
          margin-top:.25rem;font-family:'Press Start 2P',monospace;font-size:.46rem;
          border:2px solid var(--green);color:var(--green);background:#051005;
          padding:5px 10px;cursor:pointer;transition:all .1s;width:100%;
        }
        .equip-btn:hover{background:#0a1a0a;}
        .equip-btn.unequip{border-color:var(--muted);color:var(--muted);background:transparent;}
        .equip-empty{
          font-family:'VT323',monospace;font-size:1.5rem;color:var(--muted);
          text-align:center;padding:3.5rem 1rem;border:2px dashed var(--border);
          grid-column:1/-1;line-height:1.8;
        }

        /* CHARACTERS */
        .char-grid{
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(190px,1fr));
          gap:.9rem;margin-bottom:1.3rem;
        }
        .char-card{
          background:var(--panel);border:3px solid var(--border);
          padding:.9rem .8rem;display:flex;flex-direction:column;align-items:center;gap:.55rem;
          box-shadow:3px 3px 0 #000;cursor:pointer;transition:all .15s;position:relative;
        }
        .char-card:hover:not(.locked){border-color:var(--gold);}
        .char-card.active-char{border-color:var(--purple);box-shadow:3px 3px 0 #000,0 0 12px rgba(204,68,255,.3);}
        .char-card.locked{opacity:.38;cursor:not-allowed;filter:grayscale(.6);}
        .char-name{font-size:.58rem;color:var(--text);text-align:center;line-height:1.4;}
        .char-stats{font-family:'VT323',monospace;font-size:1.2rem;color:var(--text);text-align:center;line-height:1.6;width:100%;}
        .char-stats .lbl{color:var(--muted);}
        .char-desc{font-family:'VT323',monospace;font-size:1.05rem;color:var(--muted);text-align:center;line-height:1.4;}
        .active-badge{
          position:absolute;top:6px;left:6px;
          font-size:.4rem;color:var(--purple);border:1px solid var(--purple);
          padding:2px 5px;background:#120a1a;
        }
        .lock-icon{font-size:1.3rem;opacity:.5;margin-top:.2rem;}
        .lock-text{font-size:.46rem;color:var(--muted);}
        .sel-btn{
          font-family:'Press Start 2P',monospace;font-size:.46rem;
          border:2px solid var(--purple);color:var(--purple);background:#120a1a;
          padding:5px 10px;cursor:pointer;transition:all .1s;width:100%;
        }
        .sel-btn:hover{background:#1a0e28;}
        .sel-btn:disabled{opacity:.35;cursor:not-allowed;}

        /* GACHA */
        .gacha-screen{
          min-height:calc(100vh - 58px);
          display:flex;flex-direction:column;align-items:center;
          padding:1.5rem 1rem 2rem;
        }
        .gacha-ticket-row{
          display:flex;align-items:center;gap:1rem;margin-bottom:1.6rem;
          background:var(--panel);border:3px solid var(--border);
          padding:.7rem 1.2rem;box-shadow:3px 3px 0 #000;
        }
        .gacha-ticket-count{
          font-family:'VT323',monospace;font-size:1.8rem;color:var(--purple);
        }
        .gacha-ticket-lbl{font-size:.58rem;color:var(--muted);}
        .chest-wrap{
          display:flex;flex-direction:column;align-items:center;
          gap:1.2rem;margin-bottom:1.8rem;
        }
        .chest-container{
          position:relative;cursor:pointer;
          transition:transform .1s;
        }
        .chest-container:hover:not(.chest-busy){transform:scale(1.04);}
        .chest-container.chest-busy{cursor:default;}
        @keyframes chestShake{
          0%,100%{transform:translateX(0) rotate(0deg)}
          10%{transform:translateX(-5px) rotate(-2deg)}
          20%{transform:translateX(5px)  rotate(2deg)}
          30%{transform:translateX(-6px) rotate(-3deg)}
          40%{transform:translateX(6px)  rotate(3deg)}
          50%{transform:translateX(-5px) rotate(-2deg)}
          60%{transform:translateX(5px)  rotate(2deg)}
          70%{transform:translateX(-4px) rotate(-1deg)}
          80%{transform:translateX(4px)  rotate(1deg)}
          90%{transform:translateX(-2px) rotate(0deg)}
        }
        .chest-container.shaking{animation:chestShake .9s ease infinite;}
        @keyframes chestPop{
          0%{transform:scale(1)}
          40%{transform:scale(1.18) translateY(-8px)}
          70%{transform:scale(0.95) translateY(2px)}
          100%{transform:scale(1) translateY(0)}
        }
        .chest-container.opening{animation:chestPop .4s ease forwards;}
        .chest-open-btn{
          font-family:'Press Start 2P',monospace;font-size:.7rem;
          background:#160820;border:3px solid var(--purple);color:var(--purple);
          padding:.75rem 1.6rem;cursor:pointer;box-shadow:3px 3px 0 #000;
          transition:all .12s;
        }
        .chest-open-btn:hover:not(:disabled){background:#200e30;border-color:#dd66ff;}
        .chest-open-btn:active:not(:disabled){transform:translate(1px,1px);box-shadow:2px 2px 0 #000;}
        .chest-open-btn:disabled{opacity:.3;cursor:not-allowed;}
        .chest-hint{
          font-family:'VT323',monospace;font-size:1.2rem;color:var(--muted);
          text-align:center;max-width:340px;line-height:1.6;
        }

        /* RESULT REVEAL */
        @keyframes revealPop{
          0%{opacity:0;transform:scale(.6) translateY(20px)}
          60%{transform:scale(1.08) translateY(-4px)}
          100%{opacity:1;transform:scale(1) translateY(0)}
        }
        .result-card{
          animation:revealPop .45s cubic-bezier(.17,.67,.35,1.3) forwards;
          background:var(--panel);border:4px solid var(--border);
          padding:1.2rem 1.5rem;box-shadow:5px 5px 0 #000;
          display:flex;flex-direction:column;align-items:center;gap:.7rem;
          min-width:260px;max-width:380px;text-align:center;
        }
        .result-card.result-common{border-color:#888;background:#0e0e18;}
        .result-card.result-rare  {border-color:var(--blue);background:#080e1e;box-shadow:5px 5px 0 #000,0 0 20px rgba(116,192,252,.25);}
        .result-card.result-epic  {border-color:var(--purple);background:#10081c;box-shadow:5px 5px 0 #000,0 0 24px rgba(204,68,255,.35);}
        .result-card.result-empty {border-color:var(--border);background:var(--panel2);}
        .result-rarity-banner{
          font-size:.7rem;padding:4px 12px;border:2px solid;letter-spacing:.06em;
        }
        .result-rarity-banner.common{color:#aaa;border-color:#888;}
        .result-rarity-banner.rare  {color:var(--blue);border-color:var(--blue);}
        .result-rarity-banner.epic  {color:var(--purple);border-color:var(--purple);}
        .result-name{font-size:.72rem;color:var(--text);line-height:1.4;}
        .result-desc{font-family:'VT323',monospace;font-size:1.25rem;color:var(--muted);line-height:1.5;}
        .result-again-btn{
          font-family:'Press Start 2P',monospace;font-size:.55rem;
          background:#050510;border:2px solid var(--border);color:var(--muted);
          padding:.55rem 1rem;cursor:pointer;transition:all .1s;margin-top:.2rem;
        }
        .result-again-btn:hover{border-color:var(--gold);color:var(--gold);}

        /* RARITY ODDS */
        .odds-row{
          display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;
          margin-top:.5rem;
        }
        .odds-pill{
          font-family:'VT323',monospace;font-size:1.2rem;
          border:1px solid;padding:3px 10px;
        }
        .odds-pill.common{color:#aaa;border-color:#666;}
        .odds-pill.rare  {color:var(--blue);border-color:var(--blue);}
        .odds-pill.epic  {color:var(--purple);border-color:var(--purple);}

        /* FX */
        .tp-popup{
          position:fixed;font-size:.75rem;color:var(--gold);
          text-shadow:2px 2px 0 #000,0 0 8px rgba(245,200,66,.5);
          pointer-events:none;z-index:9999;white-space:nowrap;
          animation:floatUp 1.4s ease-out forwards;transform:translateX(-50%);
        }
        @keyframes floatUp{0%{opacity:1;transform:translateX(-50%) translateY(0)}100%{opacity:0;transform:translateX(-50%) translateY(-55px)}}
        @keyframes floatUpSlow{0%{transform:translateY(0)}100%{transform:translateY(-6px)}}
        .sparkle{position:fixed;width:5px;height:5px;border-radius:50%;pointer-events:none;z-index:9998;animation:spk .8s ease-out forwards;}
        @keyframes spk{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(0)}}

        ::-webkit-scrollbar{width:6px;}
        ::-webkit-scrollbar-track{background:#07070f;}
        ::-webkit-scrollbar-thumb{background:#2a2a50;}
      `}</style>

      {/* FX */}
      {tpPopups.map(p=><div key={p.id} className="tp-popup" style={{left:p.x,top:p.y}}>✦ +{p.amount} TP ✦</div>)}
      {sparkles.map(s=><div key={s.id} className="sparkle" style={{left:s.x,top:s.y,background:s.color,"--dx":`${s.dx}px`,"--dy":`${s.dy}px`}}/>)}

      {/* ════════════════════════════════════
          TOPBAR (always visible)
      ════════════════════════════════════ */}
      <div className="topbar">
        <div className="topbar-l">
          <button className="menubtn" onClick={()=>setMenuOpen(o=>!o)} aria-label="Menu">
            <span/><span/><span/>
          </button>
          <span className="topbar-title">{screenTitle}</span>
        </div>
        <div className="topbar-r">
          <div className="tp-pill"><b>{tp}</b>TP</div>
          <div className="stat-badge c">⚙<span>{char.coins}</span></div>
          <div className="stat-badge l">LV<span>{char.level}</span></div>
        </div>

        {menuOpen && <>
          <div className="menu-overlay" onClick={()=>setMenuOpen(false)}/>
          <div className="dropdown">
            {screen!=="home"       && <button className="dditem back" onClick={()=>navTo("home")}>← QUEST LOG</button>}
            {screen!=="dungeon"    && <button className="dditem"      onClick={()=>navTo("dungeon")}>⚔ DUNGEON</button>}
            {screen!=="gacha"      && <button className="dditem"      onClick={()=>navTo("gacha")}>✦ TREASURE CHEST</button>}
            {screen!=="equipment"  && <button className="dditem"      onClick={()=>navTo("equipment")}>🛡 EQUIPMENT</button>}
            {screen!=="characters" && <button className="dditem"      onClick={()=>navTo("characters")}>👤 CHARACTERS</button>}
            {screen!=="shop"       && <button className="dditem"      onClick={()=>navTo("shop")}>🏪 SHOP</button>}
          </div>
        </>}
      </div>

      {/* ════════════════════════════════════
          HOME
      ════════════════════════════════════ */}
      {screen==="home" && (
        <div className="home">
          <div style={{display:"flex",gap:".34rem",flexWrap:"wrap",marginBottom:".55rem"}}>
            <div className="stat-badge" style={{fontSize:".74rem"}}><span>{activeCount}</span> active</div>
            <div className="stat-badge" style={{fontSize:".74rem"}}><span>{doneCount}</span> done</div>
          </div>

          <div className="pbox inp-sec">
            <div className="inp-lbl">NEW QUEST</div>
            <div className="inp-row">
              <input ref={inputRef} className="task-inp" type="text"
                placeholder="Enter your quest..."
                value={input} onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&addTask()} />
              <button className="add-btn" onClick={addTask}>+ ADD</button>
            </div>
            <div className="diff-pick">
              <span className="dpl">DIFFICULTY:</span>
              {DIFFICULTIES.map(d=>(
                <button key={d.id}
                  className={`db ${newDiff===d.id?"sel":""}`}
                  style={{color:d.color,borderColor:newDiff===d.id?d.color:"#1e1e3a","--dg":d.glow}}
                  onClick={()=>setNewDiff(d.id)}>{d.label}</button>
              ))}
            </div>
          </div>

          <div className="pbox filter-sec">
            {["all","active","done"].map(f=>(
              <button key={f} className={`fb ${filter===f?"on":""}`} onClick={()=>setFilter(f)}>
                {f==="all"?"⚔ ALL":f==="active"?"🗡 ACTIVE":"✦ DONE"}
              </button>
            ))}
          </div>

          <div className="pbox task-list">
            <div className="q-hdr">QUEST LIST — {filtered.length} ENTRIES</div>
            {filtered.length===0 && <div className="empty">AWAITING NEW QUESTS...</div>}
            {filtered.map(task=>{
              const d = getDiff(task.difficulty);
              return (
                <div key={task.id} className={`ti ${deletingId===task.id?"del":""}`}>
                  <div className={`cb ${task.done?"chk":""}`} onClick={e=>toggleTask(task.id,e)}>
                    {task.done?"✓":""}
                  </div>
                  {editingId===task.id ? (
                    <input className="edit-inp" autoFocus value={editText}
                      onChange={e=>setEditText(e.target.value)}
                      onKeyDown={e=>{if(e.key==="Enter")saveEdit();if(e.key==="Escape")setEditingId(null);}}
                      onBlur={saveEdit}/>
                  ) : (
                    <span className={`tt ${task.done?"done":""}`} onDoubleClick={()=>!task.done&&startEdit(task)}>
                      {!task.done&&"▸ "}{task.text}
                    </span>
                  )}
                  {!task.done && (
                    <div style={{display:"flex",flexDirection:"column",gap:"3px",alignItems:"flex-end",flexShrink:0}}>
                      <div className="dbadge" style={{color:d.color,borderColor:d.color,background:`${d.color}15`,boxShadow:`0 0 5px ${d.glow}`}}>
                        {d.icon} {d.label}<span className="xph">+{d.tp}</span>
                      </div>
                      <div style={{display:"flex",gap:"2px"}}>
                        {DIFFICULTIES.map(dd=>(
                          <button key={dd.id}
                            title={`${dd.label} (+${dd.tp} TP)`}
                            style={{width:"7px",height:"7px",background:task.difficulty===dd.id?dd.color:"#1e1e3a",
                              border:"none",padding:0,cursor:"pointer",
                              boxShadow:task.difficulty===dd.id?`0 0 4px ${dd.color}`:"none"}}
                            onClick={()=>setTasks(p=>p.map(t=>t.id===task.id?{...t,difficulty:dd.id}:t))}/>
                        ))}
                      </div>
                    </div>
                  )}
                  {task.done && (
                    <div className="dbadge" style={{color:d.color,borderColor:d.color,opacity:.35,flexShrink:0}}>
                      {d.icon} +{d.tp}
                    </div>
                  )}
                  <div className="ta">
                    {!task.done && <button className="ib" onClick={()=>startEdit(task)}>✎</button>}
                    <button className="ib del-btn" onClick={()=>deleteTask(task.id)}>✕</button>
                  </div>
                </div>
              );
            })}
            <div className="foot">
              <span className="fn">DBL-CLICK TO EDIT</span>
              {doneCount>0 && <button className="clr-btn" onClick={clearDone}>CLEAR DONE</button>}
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════
          DUNGEON
      ════════════════════════════════════ */}
      {screen==="dungeon" && (
        <div className="dscreen">
          {/* Topbar spacer so fixed topbar doesn't cover arena */}
          <div style={{height:"46px",flexShrink:0}}/>

          {/* ── ARENA ── */}
          <div className="arena">
            <DungeonBg/>
            <div className="arena-stage">

              {/* HERO */}
              <div className={`slot-hero ${shakeP?"shake":""}`}>
                <HeroSprite dead={dStatus==="dead"}/>
                <div className="nametag">LVL {char.level}</div>
                <div className="hpbar-wrap">
                  <div className="hpbar-lbl"><span>HP</span><span>{char.hp}/{char.maxHp}</span></div>
                  <div className="hpbar-track">
                    <div className={`hpbar-fill ${charHpPct>60?"hi":charHpPct>30?"md":"lo"}`} style={{width:`${charHpPct}%`}}/>
                  </div>
                  <div className="hpbar-lbl" style={{marginTop:"3px"}}><span>XP</span><span>{char.xp}/{char.xpToNext}</span></div>
                  <div className="hpbar-track">
                    <div className="hpbar-fill xpfill" style={{width:`${xpPct}%`}}/>
                  </div>
                </div>
              </div>

              {/* MONSTER */}
              {monster && (
                <div className={`slot-enemy ${shakeM?"shake":""}${victoryFlash?" dying":""}`}>
                  <MonsterSprite name={monster.name} dead={monster.hp<=0}/>
                  <div className="nametag">{monster.name}</div>
                  <div className="hpbar-wrap">
                    <div className="hpbar-lbl"><span>HP</span><span>{monster.hp}/{monster.maxHp}</span></div>
                    <div className="hpbar-track">
                      <div className={`hpbar-fill ${monHpPct>60?"hi":monHpPct>30?"md":"lo"}`} style={{width:`${monHpPct}%`}}/>
                    </div>
                    <div className="hpbar-lbl" style={{marginTop:"3px",opacity:.6}}>
                      <span>ATK {monster.atk}</span><span>DEF {monster.def}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* ── LOWER PANEL ── */}
          <div className="dun-lower">

            <div className="blog">
              <div className="blog-t">BATTLE LOG</div>
              {battleLog.length===0
                ? <div className="blog-e" style={{color:"var(--muted)"}}>Entering the dungeon...</div>
                : battleLog.map((l,i)=>
                    <div key={i} className={`blog-e ${i===0?"fresh":""}`} style={{opacity:Math.max(.15,1-i*.15)}}>{l}</div>
                  )
              }
            </div>

            {/* Victory brief flash */}
            {dStatus==="victory_flash" && loot && (
              <div className="victory-flash">
                <div className="vf-t">⚔ VICTORY!</div>
                <div className="vf-items">✦ +{loot.xp} XP &nbsp;&nbsp; ⚙ +{loot.coins} coins</div>
                {loot.leveled && <div className="vf-lvl">★ LEVEL UP → LVL {loot.newLevel}!</div>}
              </div>
            )}

            {/* Fighting: show moves */}
            {dStatus==="fighting" && <>
              <div className="moves-grid">
                {MOVES.map(m=>(
                  <button key={m.id} className="mv"
                    disabled={tp<m.tpCost||!monster}
                    onClick={()=>performMove(m)}>
                    <span className="mv-n">{m.icon} {m.name}</span>
                    <span className="mv-c">{m.tpCost} TP</span>
                    <span className="mv-d">{m.desc}</span>
                  </button>
                ))}
              </div>
              <div className="tp-hint">Task Points: <span>{tp}</span> — complete quests to earn more</div>
            </>}

            {/* Dead */}
            {dStatus==="dead" && <>
              <button className="revive-btn" disabled={tp<REVIVE_COST} onClick={revive}>
                ✦ REVIVE TO FULL HP
                <span className="revive-sub">Costs {REVIVE_COST} TP &nbsp;·&nbsp; You have {tp} TP</span>
              </button>
              {tp<REVIVE_COST && (
                <div className="tp-hint" style={{color:"var(--red)",marginBottom:".4rem"}}>
                  Complete quests to earn more Task Points!
                </div>
              )}
            </>}

          </div>
        </div>
      )}

      {/* ════════════════════════════════════
          SHOP
      ════════════════════════════════════ */}
      {screen==="shop" && (
        <div style={{minHeight:"calc(100vh - 58px)"}}>
          <div className="shop-wrap">
            <div className="shop-title">🏪 THE MERCHANT</div>
            <div className="pbox">
              <div className="merchant">
                <span className="m-icon">🧙‍♂️</span>
                <div className="m-name">GUILDMASTER VORN</div>
                <div className="m-speech">
                  "Ah, a weary adventurer! Seek fortune in the treasure chest —
                  each ticket holds a chance at rare and epic rewards!"
                </div>
                <div className="coins-disp">Your coins: <span>{char.coins} ⚙</span></div>
              </div>
            </div>

            {/* ── Gacha ticket shop item ── */}
            <div className="pbox" style={{marginTop:".9rem"}}>
              <div style={{
                display:"flex",alignItems:"center",gap:"1.2rem",
                padding:"1rem 1.2rem",flexWrap:"wrap",
              }}>
                {/* mini chest icon */}
                <div style={{flexShrink:0}}>
                  <svg width="64" height="52" viewBox="0 0 32 26" style={{imageRendering:"pixelated",display:"block"}}>
                    <rect x="1"  y="5"  width="30" height="7"  fill="#6b3a10"/>
                    <rect x="2"  y="6"  width="9"  height="5"  fill="#7a4418"/>
                    <rect x="12" y="6"  width="8"  height="5"  fill="#7a4418"/>
                    <rect x="21" y="6"  width="9"  height="5"  fill="#7a4418"/>
                    <rect x="11" y="6"  width="1"  height="5"  fill="#5a2e0a"/>
                    <rect x="20" y="6"  width="1"  height="5"  fill="#5a2e0a"/>
                    <rect x="1"  y="7"  width="30" height="2"  fill="#e0b040"/>
                    <rect x="1"  y="12" width="30" height="13" fill="#6b3a10"/>
                    <rect x="2"  y="13" width="28" height="11" fill="#7a4418"/>
                    <rect x="1"  y="16" width="30" height="2"  fill="#e0b040"/>
                    <rect x="13" y="12" width="6"  height="5"  fill="#c8a838"/>
                    <rect x="15" y="14" width="2"  height="3"  fill="#4a3008"/>
                  </svg>
                </div>
                <div style={{flex:1,minWidth:"160px"}}>
                  <div style={{fontSize:".65rem",color:"var(--gold)",marginBottom:".4rem"}}>
                    TREASURE CHEST TICKET
                  </div>
                  <div style={{fontFamily:"'VT323',monospace",fontSize:"1.3rem",color:"var(--text)",lineHeight:1.6,marginBottom:".55rem"}}>
                    Open a treasure chest for a chance at gear, pets &amp; characters. Rarer pulls await the bold!
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:".8rem",flexWrap:"wrap"}}>
                    <div style={{fontFamily:"'VT323',monospace",fontSize:"1.4rem",color:"var(--gold)"}}>
                      Cost: {GACHA_TICKET_COST} ⚙
                    </div>
                    <div style={{fontFamily:"'VT323',monospace",fontSize:"1.2rem",color:"var(--muted)"}}>
                      You have: <span style={{color:"var(--purple)"}}>{gachaTickets}</span> ticket{gachaTickets!==1?"s":""}
                    </div>
                  </div>
                </div>
                <button
                  disabled={char.coins < GACHA_TICKET_COST}
                  onClick={buyTicket}
                  style={{
                    fontFamily:"'Press Start 2P',monospace",fontSize:".6rem",
                    background: char.coins >= GACHA_TICKET_COST ? "#0e1a00" : "#111",
                    border:`2px solid ${char.coins >= GACHA_TICKET_COST ? "var(--gold)" : "var(--border)"}`,
                    color: char.coins >= GACHA_TICKET_COST ? "var(--gold)" : "var(--muted)",
                    padding:".6rem .9rem",cursor: char.coins >= GACHA_TICKET_COST ? "pointer" : "not-allowed",
                    boxShadow: char.coins >= GACHA_TICKET_COST ? "2px 2px 0 #000" : "none",
                    whiteSpace:"nowrap",transition:"all .1s",flexShrink:0,
                  }}
                >
                  BUY TICKET
                </button>
              </div>
              {char.coins < GACHA_TICKET_COST && (
                <div style={{
                  fontFamily:"'VT323',monospace",fontSize:"1.1rem",color:"var(--red)",
                  padding:".3rem 1.2rem .7rem",
                }}>
                  Need {GACHA_TICKET_COST - char.coins} more coins — slay monsters in the dungeon!
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ════════════════════════════════════
          GACHA
      ════════════════════════════════════ */}
      {screen==="gacha" && (
        <div className="gacha-screen">
          <div className="screen-title" style={{marginBottom:".9rem"}}>✦ TREASURE CHEST</div>

          {/* Ticket counter */}
          <div className="gacha-ticket-row">
            <div style={{fontSize:"1.5rem"}}>🎟</div>
            <div>
              <div className="gacha-ticket-lbl">TICKETS OWNED</div>
              <div className="gacha-ticket-count">{gachaTickets}</div>
            </div>
            <button
              onClick={()=>navTo("shop")}
              style={{
                fontFamily:"'Press Start 2P',monospace",fontSize:".48rem",
                background:"#0a0800",border:"2px solid var(--gold)",color:"var(--gold)",
                padding:".45rem .7rem",cursor:"pointer",marginLeft:".5rem",
              }}
            >+ BUY</button>
          </div>

          {chestAnim !== "revealed" ? (
            /* ── CHEST VIEW ── */
            <div className="chest-wrap">
              <div
                className={`chest-container ${chestAnim === "idle" ? "" : chestAnim === "shaking" ? "shaking" : "opening chest-busy"}`}
                onClick={chestAnim === "idle" ? openChest : undefined}
                title={chestAnim === "idle" ? (gachaTickets > 0 ? "Click to open!" : "No tickets") : ""}
              >
                <TreasureChest open={chestAnim === "opening" || chestAnim === "revealed"} />
              </div>

              {chestAnim === "idle" && gachaTickets > 0 && (
                <div style={{
                  fontFamily:"'VT323',monospace",fontSize:"1.3rem",color:"var(--gold)",
                  whiteSpace:"nowrap",pointerEvents:"none",textAlign:"center",
                  animation:"floatUpSlow 1.6s ease-in-out infinite alternate",
                }}>
                  ▼ CLICK TO OPEN ▼
                </div>
              )}

              <button
                className="chest-open-btn"
                disabled={gachaTickets < 1 || chestAnim !== "idle"}
                onClick={openChest}
              >
                {chestAnim === "idle"
                  ? gachaTickets > 0 ? "✦ OPEN CHEST" : "NO TICKETS"
                  : chestAnim === "shaking" ? "OPENING..." : "OPENING..."}
              </button>

              {gachaTickets === 0 && chestAnim === "idle" && (
                <div className="chest-hint" style={{marginTop:".6rem"}}>
                  Buy tickets from the Shop with coins earned in the Dungeon.
                </div>
              )}

              {/* Odds display */}
              <div style={{marginTop:"1.5rem",textAlign:"center"}}>
                <div style={{fontSize:".5rem",color:"var(--muted)",marginBottom:".5rem",letterSpacing:".06em"}}>DROP RATES</div>
                <div className="odds-row">
                  <div className="odds-pill common">COMMON — 60%</div>
                  <div className="odds-pill rare">RARE — 30%</div>
                  <div className="odds-pill epic">EPIC — 10%</div>
                </div>
              </div>
            </div>
          ) : (
            /* ── RESULT REVEAL ── */
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.2rem"}}>
              {/* Keep the open chest behind the card */}
              <TreasureChest open={true} />

              {gachaResult && gachaResult.empty ? (
                <div className="result-card result-empty">
                  <div style={{fontSize:"2.5rem"}}>📦</div>
                  <div className="result-name" style={{color:"var(--muted)"}}>THE VAULT AWAITS</div>
                  <div className="result-desc">
                    No items in the pool yet. The Guildmaster is still stocking the shelves — check back soon for gear, pets &amp; characters!
                  </div>
                  <button className="result-again-btn" onClick={resetChest}>
                    ← CLOSE
                  </button>
                </div>
              ) : gachaResult ? (
                <div className={`result-card result-${gachaResult.rarity}`}>
                  <div className={`result-rarity-banner ${gachaResult.rarity}`}>
                    {gachaResult.rarity.toUpperCase()}
                  </div>
                  <div style={{fontSize:"2.8rem"}}>{gachaResult.icon || "✦"}</div>
                  <div className="result-name">{gachaResult.name}</div>
                  <div className="result-desc">{gachaResult.desc}</div>
                  <button
                    className="result-again-btn"
                    onClick={resetChest}
                    disabled={gachaTickets < 1}
                  >
                    {gachaTickets > 0 ? `OPEN AGAIN (${gachaTickets} left)` : "← CLOSE"}
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}

      {/* ════════════════════════════════════
          EQUIPMENT
      ════════════════════════════════════ */}
      {screen==="equipment" && (
        <div style={{minHeight:"calc(100vh - 58px)"}}>
          <div className="screen-wrap">
            <div className="screen-title">🛡 EQUIPMENT</div>

            {/* Currently equipped summary */}
            <div className="pbox" style={{padding:"1rem",marginBottom:"1rem"}}>
              <div className="sect-lbl" style={{marginBottom:".65rem"}}>CURRENTLY EQUIPPED</div>
              <div style={{display:"flex",gap:".75rem",flexWrap:"wrap"}}>
                {EQUIP_SLOTS.map(slot => {
                  const equippedItem = inventory.find(i => i.id === equipped[slot]);
                  return (
                    <div key={slot} style={{
                      background:"var(--bg)",border:"2px solid var(--border)",
                      padding:".6rem .8rem",minWidth:"140px",flex:"1",
                    }}>
                      <div style={{fontSize:".46rem",color:"var(--muted)",marginBottom:".3rem",letterSpacing:".05em"}}>
                        {slot.toUpperCase()}
                      </div>
                      {equippedItem ? (
                        <>
                          <div style={{fontSize:".55rem",color:"var(--text)",marginBottom:".2rem"}}>{equippedItem.name}</div>
                          <div style={{fontFamily:"'VT323',monospace",fontSize:"1.1rem",color:"var(--green)"}}>
                            {equippedItem.stats.atk ? `+${equippedItem.stats.atk} ATK ` : ""}
                            {equippedItem.stats.def ? `+${equippedItem.stats.def} DEF ` : ""}
                            {equippedItem.stats.hp  ? `+${equippedItem.stats.hp} HP`   : ""}
                          </div>
                          <button className="equip-btn unequip" style={{marginTop:".4rem",fontSize:".42rem"}}
                            onClick={()=>unequipSlot(slot)}>UNEQUIP</button>
                        </>
                      ) : (
                        <div style={{fontFamily:"'VT323',monospace",fontSize:"1.1rem",color:"var(--muted)"}}>— empty —</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sect-lbl">YOUR INVENTORY</div>

            {inventory.length === 0 ? (
              <div className="equip-grid">
                <div className="equip-empty">
                  NO GEAR YET<br/>
                  <span style={{fontSize:"1rem",opacity:.6}}>defeat monsters to find equipment</span>
                </div>
              </div>
            ) : (
              <div className="equip-grid">
                {inventory.map(item => {
                  const isEquipped = equipped[item.slot] === item.id;
                  return (
                    <div key={item.id}
                      className={`equip-card rarity-${item.rarity} ${isEquipped?"equipped-active":""}`}>
                      <span className={`rarity-label ${item.rarity}`}>
                        {item.rarity.toUpperCase()}
                      </span>
                      <div style={{fontSize:"2rem",marginTop:".5rem"}}>{item.icon}</div>
                      <div className="equip-name">{item.name}</div>
                      <div className="equip-type">{item.slot.toUpperCase()}</div>
                      <div className="equip-stats">
                        {item.stats.atk ? <div><span className="pos">+{item.stats.atk}</span> ATK</div> : null}
                        {item.stats.def ? <div><span className="pos">+{item.stats.def}</span> DEF</div> : null}
                        {item.stats.hp  ? <div><span className="pos">+{item.stats.hp}</span> HP</div>  : null}
                      </div>
                      <button className={`equip-btn ${isEquipped?"unequip":""}`}
                        onClick={()=>isEquipped ? unequipSlot(item.slot) : equipItem(item)}>
                        {isEquipped ? "UNEQUIP" : "EQUIP"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ════════════════════════════════════
          CHARACTERS
      ════════════════════════════════════ */}
      {screen==="characters" && (
        <div style={{minHeight:"calc(100vh - 58px)"}}>
          <div className="screen-wrap">
            <div className="screen-title">👤 CHARACTERS</div>

            {/* Active character stat summary */}
            <div className="pbox" style={{padding:"1rem",marginBottom:"1.1rem"}}>
              <div className="sect-lbl" style={{marginBottom:".65rem"}}>ACTIVE CHARACTER STATS</div>
              <div style={{fontFamily:"'VT323',monospace",fontSize:"1.4rem",color:"var(--text)",lineHeight:1.8}}>
                <span style={{color:"var(--muted)"}}>LVL </span><span style={{color:"var(--purple)"}}>{char.level}</span>
                {"  "}
                <span style={{color:"var(--muted)"}}>HP </span><span style={{color:"var(--green)"}}>{char.maxHp}</span>
                {"  "}
                <span style={{color:"var(--muted)"}}>ATK </span><span style={{color:"var(--gold)"}}>{char.atk}</span>
                {"  "}
                <span style={{color:"var(--muted)"}}>DEF </span><span style={{color:"var(--blue)"}}>{char.def}</span>
                {"  "}
                <span style={{color:"var(--muted)"}}>XP </span><span style={{color:"var(--text)"}}>{char.xp}/{char.xpToNext}</span>
              </div>
            </div>

            <div className="sect-lbl">CHARACTERS</div>
            <div className="char-grid">
              {CHARACTERS_CATALOG.map(c => {
                const isActive = activeChar === c.id;
                return (
                  <div key={c.id} className={`char-card ${!c.unlocked?"locked":""} ${isActive?"active-char":""}`}>
                    {isActive && <span className="active-badge">ACTIVE</span>}
                    {!c.unlocked && <span style={{position:"absolute",top:6,right:6,fontSize:"1.1rem",opacity:.5}}>🔒</span>}

                    {/* Sprite or placeholder */}
                    <div style={{marginTop:c.unlocked?".3rem":".6rem"}}>
                      {c.unlocked && c.sprite ? (
                        <c.sprite />
                      ) : (
                        <div style={{
                          width:52,height:72,background:"#1a1a2a",border:"2px solid var(--border)",
                          display:"flex",alignItems:"center",justifyContent:"center",
                          fontSize:"1.6rem",opacity:.5
                        }}>?</div>
                      )}
                    </div>

                    <div className="char-name">{c.name}</div>
                    <div className="char-desc">{c.desc}</div>

                    {c.unlocked ? (
                      <div className="char-stats">
                        <div><span className="lbl">HP  </span>{c.baseHp}</div>
                        <div><span className="lbl">ATK </span>{c.baseAtk}</div>
                        <div><span className="lbl">DEF </span>{c.baseDef}</div>
                      </div>
                    ) : (
                      <div style={{fontFamily:"'VT323',monospace",fontSize:"1.1rem",color:"var(--muted)"}}>
                        ??? / ??? / ???
                      </div>
                    )}

                    {c.unlocked && (
                      <button className="sel-btn"
                        disabled={isActive}
                        onClick={()=>setActiveChar(c.id)}>
                        {isActive ? "SELECTED" : "SELECT"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="sect-lbl">PETS</div>
            <div className="char-grid">
              {PETS_CATALOG.length === 0 && (
                <div style={{
                  fontFamily:"'VT323',monospace",fontSize:"1.4rem",color:"var(--muted)",
                  padding:"2.5rem 1rem",border:"2px dashed var(--border)",textAlign:"center",
                  gridColumn:"1/-1",lineHeight:1.8
                }}>
                  NO PETS YET<br/>
                  <span style={{fontSize:"1.1rem",opacity:.6}}>pets coming in a future update</span>
                </div>
              )}
              {PETS_CATALOG.map(p => (
                <div key={p.id} className="char-card locked">
                  <span style={{position:"absolute",top:6,right:6,fontSize:"1.1rem",opacity:.5}}>🔒</span>
                  <div style={{
                    width:52,height:52,background:"#1a1a2a",border:"2px solid var(--border)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"1.6rem",opacity:.5,marginTop:".6rem"
                  }}>?</div>
                  <div className="char-name">{p.name}</div>
                  <div className="char-desc">{p.desc}</div>
                  <div style={{fontFamily:"'VT323',monospace",fontSize:"1.1rem",color:"var(--muted)"}}>
                    LOCKED
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
