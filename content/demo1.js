// AGIone Demo Runbook — Demo 1 content
// Edit step metadata in demos[1].steps[]
// Edit step HTML in the Object.assign block below

/* global demos, contentMap */

// ── Step metadata ──────────────────────────────────────
demos[1] = {
    title: "On-Premise Model Deploy &amp; Publish",
    subtitle: "End-to-end: Operator → Provider → End User",
    steps: [
      {
        id:"d1-overview", phase:"overview", phaseLabel:"Overview", role:null,
        title:"Demo 1 · On-Premise Model Deploy &amp; Publish",
        subtitle:"Showcase the complete on-premise flow: infrastructure onboarding, model deployment & publishing, and unified end-user access.",
        content:"overview1"
      },
      {
        id:"d1-op1", phase:"operator", phaseLabel:"Operator", role:"Operator",
        title:"Login & Platform Access",
        subtitle:"Operator logs into AGIone platform to begin infrastructure management.",
        content:"d1op1"
      },
      {
        id:"d1-op3", phase:"operator", phaseLabel:"Operator", role:"Operator",
        title:"Register GPU Resources",
        subtitle:"Onboard NVIDIA and Ascend GPU resources, select Cloud or On-Premise mode.",
        content:"d1op3"
      },
      {
        id:"d1-op4", phase:"operator", phaseLabel:"Operator", role:"Operator",
        title:"Monitor & Unified Resource Pool",
        subtitle:"View real-time resource health and confirm the Unified Resource Pool is formed.",
        content:"d1op4"
      },
      {
        id:"d1-pr1", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Select Model Template",
        subtitle:"Choose inference template for on-prem deployment — DeepSeek, GLM, Qwen and more.",
        content:"d1pr1"
      },
      {
        id:"d1-pr2", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Deploy Model (On-Prem)",
        subtitle:"Allocate GPU resources and initiate model deployment on local infrastructure.",
        content:"d1pr2"
      },
      {
        id:"d1-pr3", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Publish Model Service",
        subtitle:"Configure visibility, generate Model Key, set billing and rate limits — then publish.",
        content:"d1pr3"
      },
      {
        id:"d1-eu1", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Access Unified Portal",
        subtitle:"End user logs into AGIone and discovers published model services.",
        content:"d1eu1"
      },
      {
        id:"d1-eu2", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Call Model via API / SDK",
        subtitle:"Use Quick Start guide to call the model via HTTP, SDK, or CLI.",
        content:"d1eu2"
      },
      {
        id:"d1-eu3", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Observability & Call Analytics",
        subtitle:"Monitor usage, token consumption and call logs from the My Calls dashboard.",
        content:"d1eu3"
      }
    ]
  };

// ── Step content ───────────────────────────────────────
Object.assign(contentMap, {

overview1: ()=>`

<!-- ===== USER STORY HERO ===== -->
<div style="background:linear-gradient(135deg,rgba(34,211,238,0.07) 0%,rgba(99,102,241,0.10) 100%);border:1px solid rgba(99,130,180,0.28);border-radius:18px;padding:24px 26px;margin-bottom:18px;position:relative;overflow:hidden;">
  <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#22d3ee,#6366f1,#34d399);"></div>

  <!-- Persona row -->
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
    <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,rgba(34,211,238,0.2),rgba(99,102,241,0.2));border:1px solid rgba(99,130,180,0.35);display:flex;align-items:center;justify-content:center;font-size:26px;flex:none;">🏦</div>
    <div>
      <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:4px;">Demo Scenario · Enterprise Bank</div>
      <div style="font-size:17px;font-weight:800;color:var(--text);line-height:1.3;">"As a large bank, I want to deploy AI models <span style="color:#67e8f9;">on my own servers</span> — data never leaves, and my teams can use Claude Code and other AI tools."</div>
    </div>
  </div>

  <!-- Pain → Solution chips -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
    <div style="background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">🔒</div>
      <div style="font-size:12px;font-weight:700;color:#fca5a5;">Data Never Leaves</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Your servers, your data — nothing goes to the public cloud</div>
    </div>
    <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">⚡</div>
      <div style="font-size:12px;font-weight:700;color:#c4b5fd;">Deploy on Your Own Servers</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Run DeepSeek / Qwen on your own GPU hardware</div>
    </div>
    <div style="background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">🛠️</div>
      <div style="font-size:12px;font-weight:700;color:#6ee7b7;">One Entry for All AI Tools</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Claude Code, Codex, API — all through one platform</div>
    </div>
  </div>
</div>

<!-- ===== ARCHITECTURE FLOW ===== -->
<div style="background:linear-gradient(180deg,rgba(13,20,34,0.92),rgba(8,13,24,0.92));border:1px solid rgba(80,110,160,0.22);border-radius:18px;padding:22px 20px;margin-bottom:18px;">
  <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px;">Architecture Flow</div>

  <!-- Equal-height 4-column grid using flex stretch -->
  <div style="display:grid;grid-template-columns:130px 28px 1fr 28px 1fr 28px 1fr;align-items:stretch;gap:0;">

    <!-- Col 1: Resources -->
    <div class="arch-col arch-col-1" style="background:rgba(20,30,50,0.7);border:1px solid rgba(80,110,160,0.2);border-radius:12px;padding:14px 10px;display:flex;flex-direction:column;">
      <div style="font-size:9px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;text-align:center;margin-bottom:12px;">Enterprise<br>Resources</div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="background:rgba(118,185,0,0.1);border:1px solid rgba(118,185,0,0.3);border-radius:7px;padding:7px 8px;display:flex;align-items:center;gap:6px;">
          <span style="font-size:14px;">🟩</span><span style="font-size:11px;font-weight:700;color:#a3e635;">NVIDIA</span>
        </div>
        <div style="background:rgba(255,95,95,0.1);border:1px solid rgba(255,95,95,0.3);border-radius:7px;padding:7px 8px;display:flex;align-items:center;gap:6px;">
          <span style="font-size:14px;">🔴</span><span style="font-size:11px;font-weight:700;color:#fca5a5;">Ascend</span>
        </div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:7px 8px;display:flex;align-items:center;gap:6px;">
          <span style="font-size:14px;">🖥️</span><span style="font-size:11px;font-weight:600;color:var(--muted);">Nodes</span>
        </div>
      </div>
    </div>

    <!-- Arrow 1 -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12h13m-4-4l4 4-4 4" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><filter id="glow1"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></svg>
    </div>

    <!-- Col 2: Operator -->
    <div class="arch-col arch-col-2" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(34,211,238,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-cyan"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(34,211,238,0.15);border:1px solid rgba(34,211,238,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="5" rx="1" stroke="#22d3ee" stroke-width="1.7"/><rect x="3" y="13" width="18" height="5" rx="1" stroke="#22d3ee" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#67e8f9;">Operator</div><div style="font-size:10px;color:var(--muted);">Phase 1 · 4 steps</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(34,211,238,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">📦</span><span style="font-size:11px;color:#cfe8f7;">Onboard Nodes</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(34,211,238,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🎮</span><span style="font-size:11px;color:#cfe8f7;">Register GPU</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(34,211,238,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🏢</span><span style="font-size:11px;color:#cfe8f7;">On-Premise Mode</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(34,211,238,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">📊</span><span style="font-size:11px;color:#cfe8f7;">Monitor Health</span>
        </div>
      </div>
      <div class="arch-result-cyan" style="margin-top:10px;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.3);border-radius:8px;padding:7px;font-size:11px;font-weight:700;color:#67e8f9;text-align:center;">🗄️ Unified Resource Pool</div>
    </div>

    <!-- Arrow 2 -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="arch-arrow-path" d="M2 12h16" stroke="#818cf8" stroke-width="1.8" stroke-linecap="round"/><path d="M14 8l4 4-4 4" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    </div>

    <!-- Col 3: Provider -->
    <div class="arch-col arch-col-3" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(139,92,246,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-violet"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polygon points="12,4 20,9 17,18 7,18 4,9" stroke="#a78bfa" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#c4b5fd;">Provider</div><div style="font-size:10px;color:var(--muted);">Phase 2 · 3 steps</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🤖</span><span style="font-size:11px;color:#ddd6fe;">Select Model Template</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🚀</span><span style="font-size:11px;color:#ddd6fe;">Deploy on Local GPU</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">📢</span><span style="font-size:11px;color:#ddd6fe;">Publish + Billing Config</span>
        </div>
      </div>
      <div class="arch-result-violet" style="margin-top:10px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.3);border-radius:8px;padding:7px;font-size:11px;font-weight:700;color:#c4b5fd;text-align:center;">📋 Unified Service Catalog</div>
    </div>

    <!-- Arrow 3 -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="arch-arrow-path" d="M2 12h16" stroke="#34d399" stroke-width="1.8" stroke-linecap="round"/><path d="M14 8l4 4-4 4" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    </div>

    <!-- Col 4: End User -->
    <div class="arch-col arch-col-4" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(52,211,153,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-green"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(52,211,153,0.15);border:1px solid rgba(52,211,153,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#34d399" stroke-width="1.7"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#34d399" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#6ee7b7;">End User</div><div style="font-size:10px;color:var(--muted);">Phase 3 · 3 steps</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🔍</span><span style="font-size:11px;color:#bbf7d0;">Discover in Catalog</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🔶</span><span style="font-size:11px;color:#bbf7d0;">Claude Code / Codex</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">⌨️</span><span style="font-size:11px;color:#bbf7d0;">API / SDK / HTTP</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">📈</span><span style="font-size:11px;color:#bbf7d0;">My Calls Dashboard</span>
        </div>
      </div>
      <div class="arch-result-green" style="margin-top:10px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:8px;padding:7px;font-size:11px;font-weight:700;color:#6ee7b7;text-align:center;">✅ Zero Infra Complexity</div>
    </div>
  </div><!-- end grid -->

</div><!-- end arch block -->

<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Opening Talking Points</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">🎯</span><p>"Imagine you're a large bank — <strong>regulators won't let data touch a public cloud</strong>. Today I'll show how AGIone solves this from hardware to developer tools in three acts."</p></div>
    <div class="talk-item"><span class="talk-icon">🏢</span><p>"The whole flow — Operator, Provider, End User — each gets <strong>exactly the control they need</strong>, nothing more, nothing less."</p></div>
    <div class="talk-item"><span class="talk-icon">⚡</span><p>"I'll shortcut the 10-min deployment wait and jump straight to a pre-deployed model — <strong>real config, real API</strong>."</p></div>
  </div>
</div>
`,

d1op1: ()=>`
<div class="card card-cyan">
  <div class="card-title">
    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.7"/></svg>
    Login · demo.agione.pro
  </div>
  <table class="info-table">
    <tr><td>Platform URL</td><td>https://demo.agione.pro</td></tr>
    <tr><td>Role</td><td>Operator Account</td></tr>
    <tr><td>Purpose</td><td>Infrastructure management & resource onboarding</td></tr>
  </table>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.3);color:#22d3ee;">1</div>
    <div class="step-body"><strong>Navigate to demo.agione.pro</strong><p>Open browser and enter the platform URL. Use Operator account credentials.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Authenticate with Operator credentials</strong><p>Enter username and password. MFA if enabled.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Land on Operator Dashboard</strong><p>Overview of managed infrastructure, resource utilization summary, and system alerts.</p></div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"As the <strong>Operator</strong>, I'm the IT or infrastructure team responsible for bringing enterprise compute into AGIone."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Notice the dashboard gives me an immediate health overview — I can see nodes, GPU utilization, and any alerts at a glance."</p></div>
  </div>
</div>
`,

d1op2: ()=>`
<div class="card card-cyan">
  <div class="card-title">Onboard Nodes & Servers</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Register your enterprise bare-metal or virtual compute into the AGIone management plane using On-Premise mode.</p>
  <div class="grid-2">
    <div class="metric-chip">
      <div class="metric-val" style="color:#22d3ee">128</div>
      <div class="metric-label">Registered Nodes</div>
    </div>
    <div class="metric-chip">
      <div class="metric-val" style="color:#34d399">102</div>
      <div class="metric-label">Online / Healthy</div>
      <div class="metric-bar"><div class="metric-fill" style="width:80%;background:linear-gradient(90deg,#34d399,#22d3ee)"></div></div>
    </div>
  </div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.3);color:#22d3ee;">1</div>
    <div class="step-body">
      <strong>Navigate: Infrastructure → Nodes → Add Node</strong>
      <p>Access the node management panel from the left sidebar.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body">
      <strong>Select "On-Premise Mode"</strong>
      <p>Choose between Cloud Mode (managed cloud nodes) or On-Premise Mode (local datacenter hardware).</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body">
      <strong>Input server details & register</strong>
      <p>Enter hostname / IP, SSH credentials or agent token. AGIone auto-discovers hardware specs.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body">
      <strong>Verify node appears in Node List</strong>
      <p>Node status transitions from "Pending" → "Online". Hardware specs auto-populated.</p>
    </div>
  </div>
</div>
<div class="card card-cyan" style="margin-top:20px">
  <div class="card-title">Two Onboarding Modes</div>
  <div class="grid-2">
    <div style="background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.2);border-radius:10px;padding:14px">
      <div style="font-size:13px;font-weight:700;color:#67e8f9;margin-bottom:6px">☁ Cloud Mode</div>
      <p style="font-size:12px;color:var(--muted);line-height:1.5">Managed cloud instances provisioned through AGIone. Pay-as-you-go, elastic scaling.</p>
    </div>
    <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:14px">
      <div style="font-size:13px;font-weight:700;color:#a5b4fc;margin-bottom:6px">🏢 On-Premise Mode</div>
      <p style="font-size:12px;color:var(--muted);line-height:1.5">Bring-your-own hardware. Data stays in your datacenter. Full enterprise isolation.</p>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"I'm selecting <strong>On-Premise Mode</strong> because this customer has their own GPU cluster — their data cannot leave the building."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"AGIone's agent is deployed on the node and phones home securely — there's <strong>no inbound firewall rule</strong> needed."</p></div>
    <div class="talk-item"><span class="talk-icon">🎯</span><p>Point out the node health status grid — this is what the operations team sees 24/7.</p></div>
  </div>
</div>
`,

d1op3: ()=>`
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.3);color:#22d3ee;">1</div>
    <div class="step-body"><strong>Navigate: Infrastructure → GPU Resources</strong><p>View automatically discovered GPUs from onboarded nodes.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body">
      <strong>Confirm NVIDIA & Ascend cards detected</strong>
      <p>AGIone auto-identifies GPU model, VRAM, driver version and CUDA/CANN compatibility.</p>
      <div class="tag-row">
        <span class="tag-chip" style="border-color:rgba(118,185,0,0.4);color:#a3e635;background:rgba(118,185,0,0.08)">NVIDIA A100 80G</span>
        <span class="tag-chip" style="border-color:rgba(255,95,95,0.4);color:#fca5a5;background:rgba(255,95,95,0.08)">Ascend 910B</span>
        <span class="tag-chip" style="border-color:rgba(255,255,255,0.15);color:var(--muted)">H100 SXM</span>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Assign GPUs to resource pool</strong><p>Label GPUs by team, project, or availability zone. Set reservation quotas if needed.</p></div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"A key differentiator: AGIone supports <strong>heterogeneous GPU backends</strong> — NVIDIA CUDA and Huawei Ascend CANN — from a single management plane."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Many of our enterprise customers in China have Ascend cards due to export restrictions. AGIone abstracts that complexity away."</p></div>
  </div>
</div>
`,

d1op4: ()=>`
<div class="card" style="border-color:rgba(34,211,238,0.3);background:rgba(34,211,238,0.04)">
  <div class="card-title" style="color:#67e8f9">✓ Unified Resource Pool Active</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6">All onboarded nodes and GPUs are now visible to Providers as a unified compute pool. Providers can request resources without knowing underlying hardware topology.</p>
  <div class="flow-row" style="margin-top:16px">
    <div class="flow-node">Node Cluster A</div>
    <div class="flow-arrow">+</div>
    <div class="flow-node">Node Cluster B</div>
    <div class="flow-arrow">+</div>
    <div class="flow-node">Ascend Farm</div>
    <div class="flow-arrow">=</div>
    <div class="flow-node active-node">Unified Pool</div>
  </div>
</div>
<div class="feature-grid" style="margin-top:4px">
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(34,211,238,0.1);"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
    <h4>Real-time Monitoring</h4>
    <p>Live metrics for CPU, GPU, memory, network per node.</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(139,92,246,0.1);"><svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="1.7"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/></svg></div>
    <h4>Health Alerts</h4>
    <p>Automated alerts for node failure, high temp, or GPU OOM.</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(52,211,153,0.1);"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.7"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg></div>
    <h4>Capacity Planning</h4>
    <p>Historical utilization trends to forecast resource needs.</p>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The Operator's job is done. We've created a <strong>Unified Resource Pool</strong> — now we hand off to the Provider to deploy models."</p></div>
    <div class="talk-item"><span class="talk-icon">🎯</span><p>Emphasize: Provider never needs to know which physical server or GPU card is used — AGIone handles scheduling.</p></div>
  </div>
</div>
`,

d1pr1: ()=>`
<div class="card card-violet">
  <div class="card-title">Model Template Selection</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Navigate to <strong>Studio → My Models → On-Prem → Start</strong>. Select an inference template from the catalog.</p>
  <div class="grid-4">
    <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.25);border-radius:12px;padding:14px;text-align:center;cursor:pointer">
      <div style="font-size:20px;margin-bottom:6px">🔮</div>
      <div style="font-size:12px;font-weight:700;color:#93c5fd">DeepSeek</div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px">R1 / R1-Distill</div>
    </div>
    <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:12px;padding:14px;text-align:center">
      <div style="font-size:20px;margin-bottom:6px">🧠</div>
      <div style="font-size:12px;font-weight:700;color:#c4b5fd">GLM</div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px">GLM-4 series</div>
    </div>
    <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.2);border-radius:12px;padding:14px;text-align:center">
      <div style="font-size:20px;margin-bottom:6px">⚡</div>
      <div style="font-size:12px;font-weight:700;color:#fde68a">Qwen</div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px">Qwen3 series</div>
    </div>
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px;text-align:center">
      <div style="font-size:20px;margin-bottom:6px">➕</div>
      <div style="font-size:12px;font-weight:700;color:var(--muted)">More</div>
      <div style="font-size:11px;color:var(--subtle);margin-top:3px">LLaMA, Mistral…</div>
    </div>
  </div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body"><strong>Login with Provider Account</strong><p>Switch to Provider role credentials.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Studio → My Models → On-Prem → Start</strong><p>Or use the homepage shortcut: "Choose Self Deploy".</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body">
      <strong>Select: DeepSeek-R1-Distill-Qwen-7B</strong>
      <p>Recommended for demo — smaller footprint, faster deployment.</p>
      <div class="step-note">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#fbbf24" stroke-width="1.8"/></svg>
        <span>If no model can be deployed, it may be a network connectivity issue. Do not proceed to submit.</span>
      </div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"As a Provider, I don't configure servers manually. I just <strong>pick a model template</strong> — AGIone handles framework compatibility and GPU allocation."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"We support all major open-source models out of the box. DeepSeek-R1 is a top choice for enterprise reasoning tasks."</p></div>
  </div>
</div>
`,

d1pr2: ()=>`
<div class="card card-violet">
  <div class="card-title">On-Prem Model Deployment</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Configure framework, runtime specs and submit deployment job to local GPU resources.</p>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body"><strong>Select AI Framework & Runtime</strong><p>vLLM / TGI / TensorRT-LLM — recommended config pre-selected based on model.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Choose GPU allocation & replica count</strong><p>AGIone shows available GPU capacity from the unified pool. Select number of GPU cards and replicas.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body">
      <strong>Select deployment method → Submit</strong>
      <p>Review configuration summary. Click Submit to queue the deployment job.</p>
      <div class="step-note">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#fbbf24" stroke-width="1.8"/></svg>
        <span><strong>Demo Note:</strong> Do NOT click Submit in the Wuhan local environment — it will trigger a real deployment. Switch to a pre-deployed model for the next steps.</span>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body"><strong>Switch to pre-deployed model instance</strong><p>For demo efficiency, navigate to an already-deployed model to show publish and access steps.</p></div>
  </div>
</div>
<div class="card" style="margin-top:4px;border-color:rgba(139,92,246,0.25)">
  <div class="card-title" style="color:#c4b5fd">Deployment Timeline (reference)</div>
  <div class="flow-row">
    <div class="flow-node">Submit Job</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Pull Model Weights</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">Load to GPU</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node active-node">Serving</div>
  </div>
  <p style="font-size:12px;color:var(--muted);margin-top:10px">Typical time: 3–15 min depending on model size and network speed.</p>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Deployment typically takes a few minutes for model download and GPU load. In a real engagement, I'd kick this off and return once it's ready."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"For today's demo, I've pre-deployed this model. Let me <strong>jump directly to the publish step</strong> to keep the flow tight."</p></div>
  </div>
</div>
`,

d1pr3: ()=>`
<div class="card card-violet">
  <div class="card-title">Publish Model Service</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Configure visibility, billing, rate limits and publish to the service catalog.</p>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body"><strong>My Models → Publish Model (top right)</strong><p>Access via left nav My Models or from model detail page.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body">
      <strong>Choose Publication Scope</strong>
      <div class="grid-2" style="margin-top:10px">
        <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:10px;padding:12px">
          <div style="font-size:12px;font-weight:700;color:#c4b5fd">🔒 Private</div>
          <p style="font-size:11px;color:var(--muted);margin-top:4px">Visible only within your team/tenant</p>
        </div>
        <div style="background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.3);border-radius:10px;padding:12px">
          <div style="font-size:12px;font-weight:700;color:#67e8f9">🌐 Public</div>
          <p style="font-size:11px;color:var(--muted);margin-top:4px">Visible to all platform users</p>
        </div>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Select Model Type: Multimodal</strong><p>Text + Image input, Text output. Advanced: Function/Tool Support, Thinking Mode.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body">
      <strong>Configure Billing</strong>
      <div class="card" style="margin-top:10px;padding:14px;border-color:rgba(251,191,36,0.2)">
        <table class="info-table">
          <tr><td>Billing Type</td><td>Paid</td></tr>
          <tr><td>Billing Mode</td><td>Input/Output Billing</td></tr>
          <tr><td>Input Tokens</td><td>1M Tokens = 1.00 Credits</td></tr>
          <tr><td>Output Tokens</td><td>1M Tokens = 6.00 Credits</td></tr>
          <tr><td>Free Quota</td><td>Disabled</td></tr>
          <tr><td>Rate Limit</td><td>Not enabled</td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">5</div>
    <div class="step-body">
      <strong>Test connectivity → Submit for Audit</strong>
      <p>Click "Test" to verify API protocol. Then submit for immediate release.</p>
      <div class="step-note">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#fbbf24" stroke-width="1.8"/></svg>
        <span>If test fails, verify API address, API Key, and network connectivity before proceeding.</span>
      </div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Publishing is where the Provider <strong>monetizes or governs</strong> the model. You can set per-token pricing, usage caps, and visibility in just a few clicks."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Once published and approved, the model appears in the <strong>unified service catalog</strong> — available to all authorized End Users immediately."</p></div>
  </div>
</div>
`,

d1eu1: ()=>`
<div class="card card-green">
  <div class="card-title">End User — Unified Portal Access</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6">The End User experience is completely abstracted from deployment complexity. One portal, all models.</p>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);color:#34d399;">1</div>
    <div class="step-body"><strong>Login with End User Account</strong><p>Navigate to demo.agione.pro with End User credentials.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Discover → Models</strong><p>Browse the unified service catalog. All published models (public and authorized private) are listed here.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Select the published model</strong><p>Click on the model card to enter the detail page. No indication of underlying hardware or deployment location.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body"><strong>Quick Start tab → API Details</strong><p>Instantly see endpoint URL, Base URL, and sample code. No setup required.</p></div>
  </div>
</div>
<div style="margin-top:4px;">
  <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:14px;">Works With Any OpenAI-Compatible Client</div>

  <!-- AI Coding Tools -->
  <div style="font-size:10px;color:var(--subtle);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600;">AI Coding Assistants</div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:16px;">
    <div style="text-align:center;padding:12px 6px;background:rgba(255,138,76,0.08);border:1px solid rgba(255,138,76,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:linear-gradient(135deg,#ff8a4c,#f97316);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.5" fill="#fff"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#fdba74;">Claude Code</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(16,163,127,0.08);border:1px solid rgba(16,163,127,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(16,163,127,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#10a37f" stroke-width="1.8"/><path d="M8 12h8M12 8v8" stroke="#10a37f" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#6ee7b7;">ChatGPT / Codex</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(139,92,246,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3l7.5 7.5M3 21l7.5-7.5M21 3l-7.5 7.5M21 21l-7.5-7.5M3 3l18 18M21 3L3 21" stroke="#a78bfa" stroke-width="1.6" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#c4b5fd;">Cursor</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(56,189,248,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 18c0-5 4-9 9-9s9 4 9 9" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/><path d="M3 12c0-2.5 2-4.5 4.5-4.5" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#7dd3fc;">Windsurf</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(52,211,153,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="4 17 10 11 4 5" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="19" x2="20" y2="19" stroke="#34d399" stroke-width="1.8" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#6ee7b7;">Cline</div>
    </div>
  </div>

  <!-- AI Platforms & Apps -->
  <div style="font-size:10px;color:var(--subtle);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600;">AI Platforms &amp; Apps</div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:16px;">
    <div style="text-align:center;padding:12px 6px;background:rgba(66,133,244,0.08);border:1px solid rgba(66,133,244,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:linear-gradient(135deg,#4285f4,#34a853,#fbbc05,#ea4335);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l3 6.5L22 10l-5 5 1.5 7L12 19l-6.5 3L7 15 2 10l7-1.5L12 3z" fill="#fff"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#93c5fd;">Gemini</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(255,255,255,0.08);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" fill="#e2e8f0"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#e2e8f0;">GitHub Copilot</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(99,102,241,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#818cf8" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 10h8M8 14h5" stroke="#818cf8" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#a5b4fc;">LobeChat</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(245,158,11,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><circle cx="17.5" cy="17.5" r="3.5" stroke="#f59e0b" stroke-width="1.7"/><path d="M17.5 15.5v2l1 1" stroke="#f59e0b" stroke-width="1.4" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#fde68a;">Dify</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(239,68,68,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" stroke="#f87171" stroke-width="1.7"/><circle cx="19" cy="5" r="2" stroke="#f87171" stroke-width="1.7"/><circle cx="19" cy="19" r="2" stroke="#f87171" stroke-width="1.7"/><path d="M7 12h5m2-5l-4 4m4 3l-4-4" stroke="#f87171" stroke-width="1.4" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#fca5a5;">n8n</div>
    </div>
  </div>

  <!-- SDKs & Direct -->
  <div style="font-size:10px;color:var(--subtle);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600;">SDKs &amp; Direct Integration</div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;">
    <div style="text-align:center;padding:12px 6px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(59,130,246,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 5.5 4 5 7c-1.5.5-3 2-3 4 0 2.5 2 4 4 4h1v2c0 1 .5 2 1.5 2.5" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round"/><path d="M14 21c1-.5 1.5-1.5 1.5-2.5v-2h1c2 0 4-1.5 4-4 0-2-1.5-3.5-3-4-.5-3-3-5-7-5" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#93c5fd;">Python SDK</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(234,179,8,0.08);border:1px solid rgba(234,179,8,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(234,179,8,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#eab308" stroke-width="1.7" stroke-linejoin="round"/><text x="7" y="15.5" font-size="8" fill="#eab308" font-family="monospace" font-weight="bold">JS</text></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#fde68a;">Node.js SDK</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(34,211,238,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 8l-4 4 4 4m8-8l4 4-4 4" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="5" x2="12" y2="19" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#67e8f9;">HTTP / REST</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(168,85,247,0.08);border:1px solid rgba(168,85,247,0.25);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(168,85,247,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" stroke="#a855f7" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 7l9 4m0 10V11m9-4l-9 4" stroke="#a855f7" stroke-width="1.4"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#d8b4fe;">LangChain</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;">
      <div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(255,255,255,0.07);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="2" rx="1" fill="#94a3b8"/><rect x="3" y="15" width="18" height="2" rx="1" fill="#94a3b8"/><polyline points="3 7 12 3 21 7" stroke="#94a3b8" stroke-width="1.7" stroke-linejoin="round"/></svg>
      </div>
      <div style="font-size:11px;font-weight:700;color:#94a3b8;">curl / CLI</div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Notice the End User has <strong>no idea this model is running on-premise</strong>. They just see a model name, a description, and an API endpoint."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"This is the power of AGIone — the <strong>same user experience</strong> whether the model is on-prem, cloud, or from a third-party provider."</p></div>
  </div>
</div>
`,

d1eu2: ()=>`
<div class="card card-green">
  <div class="card-title">Model API Call — Quick Start</div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);color:#34d399;">1</div>
    <div class="step-body"><strong>Model detail page → Quick Start tab</strong><p>Toggle between SDK / HTTP / Curl view.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Copy API endpoint & Base URL</strong><p>These are auto-populated from the published model configuration.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Run in terminal or Codex</strong><p>Paste code snippet into Mac terminal or load directly in Codex for live verification.</p></div>
  </div>
</div>
<div class="code-block">
  <div class="code-header">
    <div class="code-dots"><div class="code-dot" style="background:#ff5f5f"></div><div class="code-dot" style="background:#fbbf24"></div><div class="code-dot" style="background:#34d399"></div></div>
    <span class="code-lang">Python · OpenAI-compatible SDK</span>
  </div>
<span class="kw">from</span> openai <span class="kw">import</span> OpenAI

client = OpenAI(
    base_url=<span class="str">"https://demo.agione.pro/v1"</span>,
    api_key=<span class="str">"&lt;your-model-key&gt;"</span>
)

response = client.chat.completions.create(
    model=<span class="str">"qwen3.6-plus"</span>,
    messages=[
        {<span class="str">"role"</span>: <span class="str">"user"</span>, <span class="str">"content"</span>: <span class="str">"Hello, what can you do?"</span>}
    ]
)
<span class="kw">print</span>(response.choices[0].message.content)
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The API is fully <strong>OpenAI-compatible</strong>. Existing integrations can point to AGIone with a one-line base URL change."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Let me run this live in Codex so you can see the response in real time."</p></div>
    <div class="talk-item"><span class="talk-icon">🎯</span><p>Show the response in terminal. Point out latency — emphasize data never left the customer's datacenter.</p></div>
  </div>
</div>
`,

d1eu3: ()=>`
<div class="card card-green">
  <div class="card-title">Model Observability</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Two-level observability: End Users see their own usage; Providers see all customer calls.</p>
</div>
<div class="grid-2">
  <div class="card" style="border-color:rgba(52,211,153,0.25)">
    <div class="card-title" style="color:#6ee7b7">End User — My Calls</div>
    <div class="steps-list" style="gap:8px">
      <div class="step-item" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px">My Calls → Overview</strong><p style="font-size:12px">Token usage, cost summary, request count.</p></div></div>
      <div class="step-item" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px">My Calls → Call Analytics</strong><p style="font-size:12px">Time-series charts, latency distribution, error rates.</p></div></div>
      <div class="step-item" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px">My Calls → Call Logs</strong><p style="font-size:12px">Per-request log: timestamp, model, tokens, status.</p></div></div>
    </div>
  </div>
  <div class="card" style="border-color:rgba(139,92,246,0.25)">
    <div class="card-title" style="color:#c4b5fd">Provider — Customer Calls</div>
    <div class="steps-list" style="gap:8px">
      <div class="step-item" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px">Customer Calls → Overview</strong><p style="font-size:12px">Aggregate usage across all tenants using this model.</p></div></div>
      <div class="step-item" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px">Customer Calls → Analytics</strong><p style="font-size:12px">Revenue metrics, top users, model performance KPIs.</p></div></div>
      <div class="step-item" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px">Customer Calls → Logs</strong><p style="font-size:12px">Full audit trail — all requests, all users.</p></div></div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes — Demo 1 Close</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">🎉</span><p>"That's the <strong>complete on-premise flow</strong>: Operator brought in hardware, Provider deployed and published a model, and the End User called it via standard API — all without touching a server."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Notice that observability is role-scoped: End Users see their own consumption, Providers see all customer activity — enabling both governance and billing."</p></div>
    <div class="talk-item"><span class="talk-icon">➡️</span><p>Transition: "Now let's look at Demo 2 — what happens when a Provider wants to combine multiple models into a single intelligent endpoint."</p></div>
  </div>
</div>
`,

});
