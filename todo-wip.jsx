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
// CONSTANTS
// ─────────────────────────────────────────────

const DIFFICULTIES = [
  { id:"trivial",   label:"TRIVIAL",   tp:10,  color:"#5a5a8a", glow:"rgba(90,90,138,0.4)",  icon:"·"   },
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

  // ── Storage ─────────────────────────────────
  useEffect(() => {
    async function load() {
      try {
        const [tR, qR, cR] = await Promise.allSettled([
          window.storage.get("tp-v3"),
          window.storage.get("quests-v5"),
          window.storage.get("char-v3"),
        ]);
        if (tR.status==="fulfilled" && tR.value) setTp(parseInt(tR.value.value)||0);
        if (qR.status==="fulfilled" && qR.value) setTasks(JSON.parse(qR.value.value));
        if (cR.status==="fulfilled" && cR.value) setChar(JSON.parse(cR.value.value));
      } catch(e){}
      setLoaded(true);
    }
    load();
  }, []);
  useEffect(() => { if (!loaded) return; window.storage.set("tp-v3", String(tp)).catch(()=>{}); }, [tp, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("quests-v5", JSON.stringify(tasks)).catch(()=>{}); }, [tasks, loaded]);
  useEffect(() => { if (!loaded) return; window.storage.set("char-v3", JSON.stringify(char)).catch(()=>{}); }, [char, loaded]);

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

  // ── Dungeon helpers ──────────────────────────
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
    setScreen(dest);
  };

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
          padding:.45rem .8rem;
          background:var(--panel);border-bottom:3px solid var(--border);
          box-shadow:0 2px 12px rgba(0,0,0,.6);
        }
        .topbar-l{display:flex;align-items:center;gap:.5rem;}
        .menubtn{
          width:30px;height:30px;background:#0a0a1c;
          border:2px solid var(--border);color:var(--text);
          display:flex;flex-direction:column;align-items:center;
          justify-content:center;gap:4px;cursor:pointer;
          transition:border-color .15s;flex-shrink:0;
        }
        .menubtn:hover{border-color:var(--gold);}
        .menubtn span{display:block;width:12px;height:2px;background:currentColor;}
        .topbar-title{
          font-size:.48rem;color:var(--gold);
          text-shadow:1px 1px 0 #000;letter-spacing:.04em;
        }
        .topbar-r{display:flex;align-items:center;gap:.35rem;}
        .tp-pill{
          font-size:.3rem;background:#180f00;
          border:2px solid var(--gold);color:var(--gold);
          padding:.25rem .45rem;white-space:nowrap;
        }
        .tp-pill b{color:#fff;text-shadow:0 0 6px var(--gold);margin-right:2px;}
        .stat-badge{
          font-family:'VT323',monospace;font-size:.78rem;
          color:var(--muted);border:1px solid var(--border);
          padding:1px 5px;background:var(--bg);white-space:nowrap;
        }
        .stat-badge span{color:var(--green);}
        .stat-badge.c span{color:var(--gold);}
        .stat-badge.l span{color:var(--purple);}

        /* DROPDOWN */
        .menu-overlay{position:fixed;inset:0;z-index:280;}
        .dropdown{
          position:absolute;top:calc(100% + 3px);left:.6rem;z-index:290;
          background:var(--panel2);border:2px solid var(--border);
          box-shadow:4px 4px 0 #000;min-width:160px;
        }
        .dditem{
          display:block;width:100%;padding:.5rem .8rem;
          font-size:.33rem;color:var(--text);
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
        .home{max-width:640px;margin:0 auto;padding:.9rem .8rem;}
        .pbox{background:var(--panel);border:3px solid var(--border);box-shadow:3px 3px 0 #000;}
        .inp-sec{padding:.65rem .9rem;margin-bottom:.55rem;}
        .inp-lbl{font-size:.24rem;color:var(--muted);margin-bottom:.3rem;letter-spacing:.08em;}
        .inp-row{display:flex;gap:.3rem;margin-bottom:.45rem;}
        .task-inp{
          flex:1;background:var(--bg);border:2px solid var(--border);
          color:var(--text);padding:.42rem .55rem;
          font-family:'VT323',monospace;font-size:.92rem;outline:none;
        }
        .task-inp:focus{border-color:var(--gold);}
        .task-inp::placeholder{color:var(--muted);}
        .add-btn{
          background:#0e1c06;border:2px solid var(--green);color:var(--green);
          padding:.42rem .7rem;font-family:'Press Start 2P',monospace;font-size:.3rem;
          box-shadow:2px 2px 0 #000;cursor:pointer;white-space:nowrap;transition:all .1s;
        }
        .add-btn:hover{background:#142808;}
        .add-btn:active{transform:translate(1px,1px);box-shadow:1px 1px 0 #000;}
        .diff-pick{display:flex;align-items:center;gap:.2rem;flex-wrap:wrap;}
        .dpl{font-size:.22rem;color:var(--muted);white-space:nowrap;}
        .db{
          background:var(--bg);border:2px solid #1e1e3a;color:var(--muted);
          padding:2px 5px;font-family:'Press Start 2P',monospace;font-size:.22rem;
          box-shadow:1px 1px 0 #000;cursor:pointer;transition:all .1s;
        }
        .db.sel{box-shadow:1px 1px 0 #000,0 0 6px var(--dg,transparent);}
        .db:hover{color:var(--text);}
        .filter-sec{display:flex;margin-bottom:.55rem;overflow:hidden;}
        .fb{
          flex:1;background:#09091a;border:none;border-right:2px solid var(--border);
          color:var(--muted);padding:.42rem;font-family:'Press Start 2P',monospace;
          font-size:.25rem;cursor:pointer;transition:all .1s;
        }
        .fb:last-child{border-right:none;}
        .fb:hover{color:var(--text);}
        .fb.on{background:#141430;color:var(--gold);}
        .task-list{margin-bottom:.55rem;overflow:hidden;}
        .q-hdr{
          font-size:.25rem;color:var(--muted);
          padding:.48rem .72rem .32rem;border-bottom:2px solid var(--border);letter-spacing:.07em;
        }
        .empty{font-family:'VT323',monospace;font-size:.92rem;color:var(--muted);text-align:center;padding:1.3rem;}
        .ti{
          display:flex;align-items:center;gap:.44rem;
          padding:.48rem .72rem;border-bottom:2px solid var(--border);transition:all .3s;
        }
        .ti:last-of-type{border-bottom:none;}
        .ti:hover{background:rgba(255,255,255,.01);}
        .ti.del{opacity:0;transform:translateX(14px);}
        .cb{
          width:14px;height:14px;border:2px solid var(--border);background:var(--bg);
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;font-size:7px;color:var(--green);cursor:pointer;transition:all .1s;
        }
        .cb:hover{border-color:var(--green);}
        .cb.chk{background:#0a180a;border-color:var(--green);box-shadow:0 0 5px rgba(78,203,113,.3);}
        .tt{
          font-family:'VT323',monospace;font-size:.88rem;color:var(--text);
          flex:1;line-height:1.3;word-break:break-word;cursor:default;
        }
        .tt.done{color:var(--muted);text-decoration:line-through;text-decoration-color:#2a2a50;}
        .edit-inp{
          flex:1;background:var(--bg);border:2px solid var(--gold);
          color:var(--text);padding:2px 4px;
          font-family:'VT323',monospace;font-size:.88rem;outline:none;
        }
        .dbadge{
          font-family:'Press Start 2P',monospace;font-size:.2rem;
          border:2px solid;padding:2px 4px;white-space:nowrap;
        }
        .xph{margin-left:2px;opacity:.55;}
        .ta{display:flex;gap:.12rem;flex-shrink:0;}
        .ib{
          background:transparent;border:2px solid transparent;
          color:var(--muted);padding:2px 4px;font-size:.6rem;cursor:pointer;transition:all .1s;
        }
        .ib:hover{border-color:var(--border);color:var(--text);}
        .ib.del-btn:hover{border-color:var(--red);color:var(--red);}
        .foot{
          display:flex;justify-content:space-between;align-items:center;
          padding:.32rem .72rem;border-top:2px solid var(--border);
        }
        .fn{font-size:.2rem;color:var(--muted);}
        .clr-btn{
          background:#180a0a;border:2px solid var(--red);color:var(--red);
          padding:3px 6px;font-family:'Press Start 2P',monospace;font-size:.22rem;
          box-shadow:2px 2px 0 #000;cursor:pointer;transition:all .1s;
        }
        .clr-btn:hover{background:#220e0e;}

        /* DUNGEON FULL SCREEN */
        .dscreen{
          position:fixed;inset:0;z-index:100;
          display:flex;flex-direction:column;
          background:var(--bg);overflow-y:auto;
        }
        /* push content below topbar */
        .dscreen-push{padding-top:0;}

        /* ARENA - top portion */
        .arena{
          position:relative;
          width:100%;flex-shrink:0;
          /* proportional height */
          height:40vh;min-height:170px;max-height:260px;
          overflow:hidden;
          border-bottom:3px solid #140a00;
        }
        .arena-stage{
          position:absolute;inset:0;z-index:2;
          /* combatants positioned proportionally */
        }
        /* Hero slot: left 22% from left */
        .slot-hero{
          position:absolute;
          left:22%;bottom:8%;
          transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:4px;
        }
        /* Enemy slot: right 22% from right = left 78% */
        .slot-enemy{
          position:absolute;
          left:78%;bottom:8%;
          transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:4px;
        }
        .slot-hero.shake{animation:shk-l .32s ease;}
        @keyframes shk-l{0%,100%{transform:translateX(-50%)}25%{transform:translateX(calc(-50% - 7px))}75%{transform:translateX(calc(-50% + 7px))}}
        .slot-enemy.shake{animation:shk-r .32s ease;}
        @keyframes shk-r{0%,100%{transform:translateX(-50%)}25%{transform:translateX(calc(-50% - 7px))}75%{transform:translateX(calc(-50% + 7px))}}
        .slot-enemy.dying{animation:sinkOut .5s ease forwards;}
        @keyframes sinkOut{0%{opacity:1;transform:translateX(-50%) translateY(0)}100%{opacity:0;transform:translateX(-50%) translateY(18px)}}

        .nametag{
          font-size:.19rem;background:rgba(7,7,15,.9);
          border:1px solid var(--border);color:var(--text);
          padding:2px 5px;white-space:nowrap;pointer-events:none;
          text-shadow:1px 1px 0 #000;
        }
        .hpbar-wrap{width:76px;}
        .hpbar-lbl{
          font-size:.15rem;color:rgba(200,200,240,.6);
          display:flex;justify-content:space-between;margin-bottom:2px;
        }
        .hpbar-track{height:4px;background:#08081a;border:1px solid rgba(42,42,80,.5);overflow:hidden;}
        .hpbar-fill{height:100%;transition:width .3s;}
        .hi{background:var(--green);}
        .md{background:var(--gold);}
        .lo{background:var(--red);}
        .xpfill{background:var(--purple);}

        /* DUNGEON LOWER */
        .dun-lower{
          flex:1;
          display:flex;flex-direction:column;
          max-width:560px;width:100%;margin:0 auto;
          padding:.5rem .65rem;
        }
        .blog{
          background:var(--bg);border:2px solid var(--border);
          padding:.35rem .5rem;margin-bottom:.45rem;min-height:60px;
        }
        .blog-t{font-size:.18rem;color:var(--muted);margin-bottom:.2rem;letter-spacing:.06em;}
        .blog-e{font-family:'VT323',monospace;font-size:.85rem;color:var(--text);line-height:1.4;}
        .blog-e.fresh{color:#fff;}
        .moves-grid{display:grid;grid-template-columns:1fr 1fr;gap:.34rem;margin-bottom:.4rem;}
        .mv{
          background:var(--panel2);border:2px solid var(--border);
          padding:.38rem .34rem;font-family:'Press Start 2P',monospace;
          color:var(--text);box-shadow:2px 2px 0 #000;cursor:pointer;
          display:flex;flex-direction:column;gap:2px;transition:all .1s;text-align:left;
        }
        .mv:hover:not(:disabled){background:#1a1a35;border-color:var(--gold);}
        .mv:active:not(:disabled){transform:translate(1px,1px);box-shadow:1px 1px 0 #000;}
        .mv:disabled{opacity:.22;cursor:not-allowed;}
        .mv-n{font-size:.24rem;}
        .mv-c{font-size:.2rem;color:var(--gold);}
        .mv-d{font-size:.18rem;color:var(--muted);font-family:'VT323',monospace;margin-top:1px;}
        .tp-hint{font-size:.18rem;color:var(--muted);text-align:center;}
        .tp-hint span{color:var(--gold);}
        .revive-btn{
          width:100%;background:#160a00;border:3px solid var(--gold);color:var(--gold);
          padding:.52rem;font-family:'Press Start 2P',monospace;font-size:.3rem;
          box-shadow:3px 3px 0 #000;cursor:pointer;
          display:flex;flex-direction:column;align-items:center;gap:3px;
          transition:all .1s;margin-bottom:.4rem;
        }
        .revive-btn:hover:not(:disabled){background:#201200;}
        .revive-btn:disabled{opacity:.25;cursor:not-allowed;}
        .revive-sub{font-size:.2rem;color:var(--muted);}
        .victory-flash{
          background:#071a07;border:2px solid var(--green);
          padding:.45rem;margin-bottom:.4rem;text-align:center;
          animation:vflash .3s ease;
        }
        @keyframes vflash{0%{transform:scale(.96);opacity:.4}100%{transform:scale(1);opacity:1}}
        .vf-t{font-size:.26rem;color:var(--green);margin-bottom:.24rem;}
        .vf-items{font-family:'VT323',monospace;font-size:.92rem;color:var(--text);line-height:1.6;}
        .vf-lvl{font-size:.26rem;color:var(--gold);margin-top:.2rem;text-shadow:0 0 8px rgba(245,200,66,.5);}

        /* SHOP */
        .shop-wrap{max-width:540px;margin:0 auto;padding:.9rem .8rem;}
        .shop-title{font-size:.44rem;color:var(--gold);margin-bottom:.75rem;text-align:center;}
        .merchant{
          display:flex;flex-direction:column;align-items:center;
          padding:.9rem .5rem;gap:.52rem;
        }
        .m-icon{font-size:2.4rem;}
        .m-name{font-size:.28rem;color:var(--gold);}
        .m-speech{
          background:var(--bg);border:2px solid var(--border);
          padding:.58rem .75rem;font-family:'VT323',monospace;font-size:.88rem;
          color:var(--text);text-align:center;line-height:1.6;width:100%;
          position:relative;
        }
        .m-speech::before{
          content:'';position:absolute;top:-8px;left:50%;transform:translateX(-50%);
          width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;
          border-bottom:8px solid var(--border);
        }
        .coins-disp{font-size:.25rem;color:var(--muted);}
        .coins-disp span{color:var(--gold);}
        .soon{
          font-size:.25rem;color:var(--muted);text-align:center;
          border:2px dashed var(--border);padding:.78rem;width:100%;line-height:2.2;
        }

        /* FX */
        .tp-popup{
          position:fixed;font-size:.42rem;color:var(--gold);
          text-shadow:2px 2px 0 #000,0 0 8px rgba(245,200,66,.5);
          pointer-events:none;z-index:9999;white-space:nowrap;
          animation:floatUp 1.4s ease-out forwards;transform:translateX(-50%);
        }
        @keyframes floatUp{0%{opacity:1;transform:translateX(-50%) translateY(0)}100%{opacity:0;transform:translateX(-50%) translateY(-55px)}}
        .sparkle{position:fixed;width:5px;height:5px;border-radius:50%;pointer-events:none;z-index:9998;animation:spk .8s ease-out forwards;}
        @keyframes spk{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(0)}}

        ::-webkit-scrollbar{width:5px;}
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
          <span className="topbar-title">
            {screen==="home" ? "⚔ QUEST LOG" : screen==="dungeon" ? "⚔ DUNGEON" : "🏪 SHOP"}
          </span>
        </div>
        <div className="topbar-r">
          <div className="tp-pill"><b>{tp}</b>TP</div>
          <div className="stat-badge c">⚙<span>{char.coins}</span></div>
          <div className="stat-badge l">LV<span>{char.level}</span></div>
        </div>

        {menuOpen && <>
          <div className="menu-overlay" onClick={()=>setMenuOpen(false)}/>
          <div className="dropdown">
            {screen!=="home"    && <button className="dditem back" onClick={()=>navTo("home")}>← QUEST LOG</button>}
            {screen!=="dungeon" && <button className="dditem"      onClick={()=>navTo("dungeon")}>⚔ DUNGEON</button>}
            {screen!=="shop"    && <button className="dditem"      onClick={()=>navTo("shop")}>🏪 SHOP</button>}
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
        <div style={{minHeight:"calc(100vh - 46px)"}}>
          <div className="shop-wrap">
            <div className="shop-title">🏪 THE MERCHANT</div>
            <div className="pbox">
              <div className="merchant">
                <span className="m-icon">🧙‍♂️</span>
                <div className="m-name">GUILDMASTER VORN</div>
                <div className="m-speech">
                  "Ah, a weary adventurer! I have many fine wares...
                  but I'm still arranging my stock. Slay some monsters,
                  earn coins, and return soon!"
                </div>
                <div className="coins-disp">Your coins: <span>{char.coins} ⚙</span></div>
                <div className="soon">
                  ITEMS COMING SOON<br/>
                  <span style={{fontSize:".18rem",fontFamily:"'VT323',monospace",letterSpacing:0,opacity:.5}}>
                    EARN COINS IN THE DUNGEON TO PREPARE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
