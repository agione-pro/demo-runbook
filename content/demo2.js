// AGIone Demo Runbook — Demo 2 content
// Edit step metadata in demos[2].steps[]
// Edit step HTML in the Object.assign block below

/* global demos, contentMap */

// ── Step metadata ──────────────────────────────────────
demos[2] = {
    title: "Aggregate Model Publish",
    subtitle: "Provider aggregates models → End User unified access",
    steps: [
      {
        id:"d2-overview", phase:"overview", phaseLabel:"Overview", role:null,
        title:"Demo 2 · Aggregate Publish",
        subtitle:"Showcase AGIone's Aggregate Model capability: combine multiple model instances into one intelligent routing endpoint.",
        content:"overview2"
      },
      {
        id:"d2-pr1", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Navigate to My Aggregate",
        subtitle:"Provider accesses the aggregation management tab in My Models.",
        content:"d2pr1"
      },
      {
        id:"d2-pr2", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Create Aggregate Model",
        subtitle:"Configure publication scope, model type, and add individual model instances.",
        content:"d2pr2"
      },
      {
        id:"d2-pr3", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Configure Routing Strategy",
        subtitle:"Set intelligent routing policy: Cost First, Success Rate First, Round Robin, or Balanced.",
        content:"d2pr3"
      },
      {
        id:"d2-pr4", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Set Billing & Publish",
        subtitle:"Configure token-based billing, review, and submit for audit / immediate release.",
        content:"d2pr4"
      },
      {
        id:"d2-eu1", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Discover Aggregate Service",
        subtitle:"End user sees a single unified model endpoint — no visibility into underlying instances.",
        content:"d2eu1"
      },
      {
        id:"d2-eu2", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Call Aggregate Model",
        subtitle:"Invoke via API, SDK, or developer tools — identical experience to a single model.",
        content:"d2eu2"
      },
      {
        id:"d2-eu3", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Provider Observability",
        subtitle:"Provider monitors aggregate model performance, routing decisions and customer call logs.",
        content:"d2eu3"
      }
    ]
  };

// ── Step content ───────────────────────────────────────
Object.assign(contentMap, {

overview2: ()=>`

<!-- ===== USER STORY HERO ===== -->
<div style="background:linear-gradient(135deg,rgba(139,92,246,0.07) 0%,rgba(52,211,153,0.07) 100%);border:1px solid rgba(139,92,246,0.28);border-radius:18px;padding:24px 26px;margin-bottom:18px;position:relative;overflow:hidden;">
  <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#8b5cf6,#22d3ee,#34d399);"></div>

  <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
    <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,rgba(139,92,246,0.2),rgba(52,211,153,0.2));border:1px solid rgba(139,92,246,0.35);display:flex;align-items:center;justify-content:center;font-size:26px;flex:none;">🌐</div>
    <div>
      <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:4px;">Demo Scenario · AI Platform Provider</div>
      <div style="font-size:17px;font-weight:800;color:var(--text);line-height:1.3;">"I run multiple AI models. I want <span style="color:#c4b5fd;">one single entry point</span> — lowest cost first, automatic backup switch, no code changes for my users."</div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
    <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">💰</div>
      <div style="font-size:12px;font-weight:700;color:#fde68a;">Lowest Cost First</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Always use the cheapest model that is working well</div>
    </div>
    <div style="background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">🔄</div>
      <div style="font-size:12px;font-weight:700;color:#6ee7b7;">Automatic Backup Switch</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">If one model slows down or fails, traffic switches to the next one automatically</div>
    </div>
    <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">🔌</div>
      <div style="font-size:12px;font-weight:700;color:#c4b5fd;">One Model to End Users</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Users call one address — AGIone picks the best model behind the scenes</div>
    </div>
  </div>
</div>

<!-- ===== AGGREGATE ARCHITECTURE DIAGRAM ===== -->
<div style="background:linear-gradient(180deg,rgba(13,20,34,0.92),rgba(8,13,24,0.92));border:1px solid rgba(80,110,160,0.22);border-radius:18px;padding:22px 20px;margin-bottom:18px;">
  <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px;">Aggregate Architecture</div>

  <!-- Equal-height 3-column grid -->
  <div style="display:grid;grid-template-columns:1fr 32px 1fr 32px 1fr;align-items:stretch;gap:0;">

    <!-- Col 1: Provider + instances -->
    <div class="arch-col arch-col-1" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(139,92,246,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-violet"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:14px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(139,92,246,0.2);border:1px solid rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polygon points="12,4 20,9 17,18 7,18 4,9" stroke="#a78bfa" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#c4b5fd;">Provider</div><div style="font-size:10px;color:var(--muted);">Adds model instances</div></div>
      </div>
      <div style="font-size:9px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Model Pool</div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:8px;padding:8px 10px;">
          <div style="display:flex;align-items:center;gap:7px;"><span style="font-size:14px;">⚡</span><span style="font-size:11px;font-weight:600;color:#fde68a;">qwen3-highspeed</span></div>
          <span style="font-size:10px;background:rgba(251,191,36,0.15);border-radius:4px;padding:2px 6px;color:#fbbf24;">Cost ↓</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:8px;padding:8px 10px;">
          <div style="display:flex;align-items:center;gap:7px;"><span style="font-size:14px;">⚖️</span><span style="font-size:11px;font-weight:600;color:#c4b5fd;">qwen3-balance</span></div>
          <span style="font-size:10px;background:rgba(139,92,246,0.15);border-radius:4px;padding:2px 6px;color:#a78bfa;">Balanced</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.25);border-radius:8px;padding:8px 10px;">
          <div style="display:flex;align-items:center;gap:7px;"><span style="font-size:14px;">🏆</span><span style="font-size:11px;font-weight:600;color:#6ee7b7;">qwen3-original</span></div>
          <span style="font-size:10px;background:rgba(52,211,153,0.15);border-radius:4px;padding:2px 6px;color:#34d399;">Quality ↑</span>
        </div>
      </div>
      <div style="margin-top:10px;border-top:1px solid rgba(255,255,255,0.06);padding-top:10px;">
        <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:5px;"><span style="color:var(--muted);">Strategy</span><span style="color:#fbbf24;font-weight:700;">💰 Cost First</span></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;"><span style="color:var(--muted);">Scope</span><span style="color:#67e8f9;font-weight:700;">🌐 Public</span></div>
      </div>
    </div>

    <!-- Arrow 1 -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="arch-arrow-path" d="M2 12h16" stroke="#818cf8" stroke-width="1.8" stroke-linecap="round"/><path d="M14 8l4 4-4 4" stroke="#818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    </div>

    <!-- Col 2: AGIone Routing Engine -->
    <div class="arch-col arch-col-2" style="background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(34,211,238,0.08));border:1px solid rgba(99,102,241,0.35);border-radius:12px;padding:14px;display:flex;flex-direction:column;position:relative;overflow:hidden;">
      <div class="arch-accent-indigo"></div>
      <div style="text-align:center;margin-bottom:14px;">
        <div style="width:46px;height:46px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#22d3ee);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;box-shadow:0 0 20px rgba(99,102,241,0.35);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="1.8"/><path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-7.5-2 2m-7 7-2 2m11 0-2-2m-7-7-2-2" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>
        </div>
        <div style="font-size:13px;font-weight:800;color:#a5b4fc;">AGIone Router</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px;">Intelligent Routing Engine</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(251,191,36,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">📡</span><span style="font-size:11px;color:#e2e8f0;">Check success rate</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">🧭</span><span style="font-size:11px;color:#e2e8f0;">Apply routing policy</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">🔄</span><span style="font-size:11px;color:#e2e8f0;">Auto failover</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(34,211,238,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">🔗</span><span style="font-size:11px;color:#e2e8f0;">Single unified endpoint</span>
        </div>
      </div>
      <div style="margin-top:10px;background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);border-radius:8px;padding:7px;text-align:center;">
        <div style="font-family:monospace;font-size:10px;color:#a5f3fc;">agione-qwen3-ha</div>
      </div>
    </div>

    <!-- Arrow 2 -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="arch-arrow-path" d="M2 12h16" stroke="#34d399" stroke-width="1.8" stroke-linecap="round"/><path d="M14 8l4 4-4 4" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    </div>

    <!-- Col 3: End User -->
    <div class="arch-col arch-col-3" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(52,211,153,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-green"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:14px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(52,211,153,0.15);border:1px solid rgba(52,211,153,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#34d399" stroke-width="1.7"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#34d399" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#6ee7b7;">End User</div><div style="font-size:10px;color:var(--muted);">Sees one model only</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(255,140,76,0.07);border:1px solid rgba(255,140,76,0.2);border-radius:8px;padding:8px 10px;">
          <span style="font-size:15px;">🔶</span><span style="font-size:11px;font-weight:600;color:#fdba74;">Claude Code</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(203,213,225,0.05);border:1px solid rgba(203,213,225,0.12);border-radius:8px;padding:8px 10px;">
          <span style="font-size:15px;">🤖</span><span style="font-size:11px;font-weight:600;color:#cbd5e1;">Codex / Cursor</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2);border-radius:8px;padding:8px 10px;">
          <span style="font-size:15px;">⌨️</span><span style="font-size:11px;font-weight:600;color:#6ee7b7;">API / SDK</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.2);border-radius:8px;padding:8px 10px;">
          <span style="font-size:15px;">🏢</span><span style="font-size:11px;font-weight:600;color:#a5b4fc;">Enterprise Apps</span>
        </div>
      </div>
      <div class="arch-result-green" style="margin-top:10px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:8px;padding:7px;font-size:11px;font-weight:700;color:#6ee7b7;text-align:center;">✅ End Users See One Model Only</div>
    </div>

  </div><!-- end grid -->

  <!-- Routing stats bar -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;">
    <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.18);border-radius:9px;padding:10px 12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:11px;color:#fde68a;font-weight:600;">⚡ highspeed</span><span style="font-size:11px;color:#fbbf24;font-weight:700;">68%</span></div>
      <div style="height:4px;border-radius:2px;background:rgba(255,255,255,0.07);"><div style="width:68%;height:100%;border-radius:2px;background:#fbbf24;"></div></div>
    </div>
    <div style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.18);border-radius:9px;padding:10px 12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:11px;color:#c4b5fd;font-weight:600;">⚖️ balance</span><span style="font-size:11px;color:#a78bfa;font-weight:700;">24%</span></div>
      <div style="height:4px;border-radius:2px;background:rgba(255,255,255,0.07);"><div style="width:24%;height:100%;border-radius:2px;background:#a78bfa;"></div></div>
    </div>
    <div style="background:rgba(52,211,153,0.06);border:1px solid rgba(52,211,153,0.18);border-radius:9px;padding:10px 12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span style="font-size:11px;color:#6ee7b7;font-weight:600;">🏆 original</span><span style="font-size:11px;color:#34d399;font-weight:700;">8%</span></div>
      <div style="height:4px;border-radius:2px;background:rgba(255,255,255,0.07);"><div style="width:8%;height:100%;border-radius:2px;background:#34d399;"></div></div>
    </div>
  </div>
</div><!-- end arch block -->

<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Opening Talking Points</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">🎯</span><p>"Demo 2 is standalone — perfect for audiences focused on <strong>high availability and cost control</strong>, not infrastructure management."</p></div>
    <div class="talk-item"><span class="talk-icon">💰</span><p>"The routing chart tells the story: <strong>68% of traffic goes to the cheapest instance</strong>. That's automatic cost savings — no developer involvement."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The End User's code doesn't change. They call one endpoint and get <strong>the best available model at the best available price</strong>."</p></div>
  </div>
</div>
`,

d2pr1: ()=>`
<div class="card card-violet">
  <div class="card-title">Navigate to My Aggregate</div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body"><strong>Login with Provider Account</strong><p>Navigate to demo.agione.pro with Provider credentials.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>My Models → "My Aggregate" tab</strong><p>Switch from the default model list to the aggregate model management view.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Review existing aggregate models (if any)</strong><p>Show the list of previously created aggregate services as reference.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body"><strong>Click "Create Aggregate Model" (top right)</strong><p>Purple button — begins the aggregate creation wizard.</p></div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Aggregate Model is a Provider-level feature. The Operator is not involved in this demo — this is purely about <strong>model composition and intelligent routing</strong>."</p></div>
  </div>
</div>
`,

d2pr2: ()=>`
<div class="card card-violet">
  <div class="card-title">Configure Aggregate Model</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Set scope, model type, and add individual model instances to the aggregate pool.</p>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body">
      <strong>Choose Publication Scope → Public</strong>
      <div class="grid-2" style="margin-top:10px">
        <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:10px;padding:12px"><div style="font-size:12px;font-weight:700;color:#c4b5fd">🔒 Private</div><p style="font-size:11px;color:var(--muted);margin-top:4px">Team/tenant only</p></div>
        <div style="background:rgba(34,211,238,0.08);border:2px solid rgba(34,211,238,0.4);border-radius:10px;padding:12px"><div style="font-size:12px;font-weight:700;color:#67e8f9">✓ 🌐 Public</div><p style="font-size:11px;color:var(--muted);margin-top:4px">All platform users</p></div>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Select Model Type: Multimodal</strong><p>Supports text and image input. Other options: Text, Image, Speech, Video, Embedding, Reranking.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body">
      <strong>Add Model → Select instances to aggregate</strong>
      <p>Click "Add Model" and choose from available deployed instances.</p>
      <div style="margin-top:10px;background:rgba(10,15,26,0.6);border:1px solid var(--border);border-radius:10px;overflow:hidden">
        <table class="routing-table">
          <thead><tr><th>Instance</th><th>Min Success</th><th>Max Concurrency</th><th>Context</th><th>Cost</th></tr></thead>
          <tbody>
            <tr><td style="color:#a5f3fc">qwen3-highspeed</td><td>80%</td><td>1000</td><td>1000K</td><td>Low</td></tr>
            <tr><td style="color:#a5f3fc">qwen3-balance</td><td>85%</td><td>500</td><td>1000K</td><td>Med</td></tr>
            <tr><td style="color:#a5f3fc">qwen3-original</td><td>90%</td><td>200</td><td>936K</td><td>High</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"I'm adding three variants of the same base model — high-speed, balanced, and full-quality. AGIone will route between them based on the strategy I set next."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Each instance has its own success rate threshold and concurrency limit — the router respects these boundaries automatically."</p></div>
  </div>
</div>
`,

d2pr3: ()=>`
<div class="card card-violet">
  <div class="card-title">Routing Strategy Configuration</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Define how AGIone routes requests across the aggregated model instances.</p>
</div>
<div class="feature-grid">
  <div class="feature-item" style="border-color:rgba(251,191,36,0.3);background:rgba(251,191,36,0.05)">
    <div class="feature-icon" style="background:rgba(251,191,36,0.12)"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="1.7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
    <h4 style="color:#fde68a">Cost First ✓</h4>
    <p>Route to lowest-cost instance meeting minimum success rate.</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(52,211,153,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.7"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div>
    <h4>Success Rate First</h4>
    <p>Prioritize highest success rate regardless of cost.</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(99,102,241,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="1.7"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
    <h4>Cost & Experience Balance</h4>
    <p>Weighted balance between cost efficiency and quality.</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(34,211,238,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.7"><path d="M3 12h18M3 6h18M3 18h18"/></svg></div>
    <h4>Round Robin</h4>
    <p>Distribute requests sequentially across all instances.</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon" style="background:rgba(139,92,246,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="1.7"><path d="M2 12l20-9-9 20-2-9-9-2z"/></svg></div>
    <h4>Random</h4>
    <p>Randomly distribute traffic for even load spread.</p>
  </div>
</div>
<div class="card" style="margin-top:16px;border-color:rgba(251,191,36,0.25);background:rgba(251,191,36,0.04)">
  <div class="card-title" style="color:#fde68a">Selected: Cost First Strategy</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6">Requests will be routed to <strong style="color:var(--text)">qwen3-highspeed</strong> first (lowest cost), failing over to qwen3-balance if success rate drops below 80%, then to qwen3-original as final fallback.</p>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"I'll select <strong>Cost First</strong>. This is the most popular choice for production deployments — you get the cheapest option that still meets your quality SLA."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The failover is automatic and invisible to the End User. If the primary instance goes down or degrades, traffic shifts in real time — <strong>no code changes needed</strong>."</p></div>
  </div>
</div>
`,

d2pr4: ()=>`
<div class="card card-violet">
  <div class="card-title">Billing Configuration & Publish</div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body">
      <strong>Complete Basic Info</strong>
      <div class="card" style="margin-top:10px;padding:14px">
        <table class="info-table">
          <tr><td>Custom Tag</td><td>Qwen3.6-Plus high-availability</td></tr>
          <tr><td>Business Tag</td><td>Text Generation</td></tr>
          <tr><td>Description</td><td>High-availability aggregate model with intelligent cost routing</td></tr>
          <tr><td>Release Method</td><td>Immediate Release</td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body">
      <strong>Billing Configuration</strong>
      <div class="card" style="margin-top:10px;padding:14px;border-color:rgba(251,191,36,0.2)">
        <table class="info-table">
          <tr><td>Billing Type</td><td>Paid</td></tr>
          <tr><td>Billing Mode</td><td>Input/Output Billing</td></tr>
          <tr><td>Input Tokens</td><td>1M Tokens = 1.00 Credits</td></tr>
          <tr><td>Output Tokens</td><td>1M Tokens = 6.00 Credits</td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body">
      <strong>Submit for Audit</strong>
      <p>Click "Submit for Audit" to publish. Aggregate model appears in unified service catalog after approval.</p>
    </div>
  </div>
</div>
<div class="card" style="border-color:rgba(139,92,246,0.3);background:rgba(139,92,246,0.05)">
  <div class="card-title" style="color:#c4b5fd">✓ Aggregate Model Published</div>
  <div class="flow-row">
    <div class="flow-node">qwen3-highspeed</div>
    <div class="flow-arrow">⊕</div>
    <div class="flow-node">qwen3-balance</div>
    <div class="flow-arrow">⊕</div>
    <div class="flow-node">qwen3-original</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node active-node">AGIone-Qwen3-HA</div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The aggregate model is now a <strong>single catalog entry</strong>. End Users won't see 'qwen3-highspeed' or 'qwen3-balance' — just one clean endpoint."</p></div>
  </div>
</div>
`,

d2eu1: ()=>`
<div class="card card-green">
  <div class="card-title">End User — Discover Aggregate Service</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">The End User experience is identical to accessing any other model — the aggregation is completely transparent.</p>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);color:#34d399;">1</div>
    <div class="step-body"><strong>Login with End User Account</strong><p>Navigate to demo.agione.pro.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Discover → Models</strong><p>Find the aggregate model "AGIone-Qwen3-HA" in the catalog. It looks identical to any other model entry.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>View model detail</strong><p>No indication of underlying routing or multiple instances. Single endpoint, single API key.</p></div>
  </div>
</div>
<div class="card" style="border-color:rgba(52,211,153,0.25);background:rgba(52,211,153,0.04)">
  <div class="card-title" style="color:#6ee7b7">What the End User Sees vs. What's Happening</div>
  <div class="grid-2">
    <div>
      <div style="font-size:12px;font-weight:700;color:#6ee7b7;margin-bottom:10px">USER VIEW</div>
      <div style="font-size:13px;color:var(--text);line-height:1.7">
        • One model: AGIone-Qwen3-HA<br>
        • One endpoint URL<br>
        • One API key<br>
        • Consistent latency & quality
      </div>
    </div>
    <div>
      <div style="font-size:12px;font-weight:700;color:#a78bfa;margin-bottom:10px">BEHIND THE SCENES</div>
      <div style="font-size:13px;color:var(--muted);line-height:1.7">
        • 3 model instances<br>
        • Cost-first routing engine<br>
        • Auto failover on degradation<br>
        • Per-instance metrics & billing
      </div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"This is the user's entire interaction with the aggregation layer — they <strong>don't see it at all</strong>. They just get better reliability and lower cost automatically."</p></div>
  </div>
</div>
`,

d2eu2: ()=>`
<div class="card card-green">
  <div class="card-title">Call Aggregate Model — API / SDK</div>
</div>
<div class="code-block">
  <div class="code-header">
    <div class="code-dots"><div class="code-dot" style="background:#ff5f5f"></div><div class="code-dot" style="background:#fbbf24"></div><div class="code-dot" style="background:#34d399"></div></div>
    <span class="code-lang">Python · OpenAI-compatible — identical to single model</span>
  </div>
<span class="kw">from</span> openai <span class="kw">import</span> OpenAI

client = OpenAI(
    base_url=<span class="str">"https://demo.agione.pro/v1"</span>,
    api_key=<span class="str">"&lt;your-model-key&gt;"</span>
)

<span class="cm"># Same call — AGIone routes to best instance automatically</span>
response = client.chat.completions.create(
    model=<span class="str">"agione-qwen3-ha"</span>,
    messages=[{
        <span class="str">"role"</span>: <span class="str">"user"</span>,
        <span class="str">"content"</span>: <span class="str">"Analyze this image and summarize."</span>
    }],
    stream=<span class="kw">True</span>
)
</div>
<div style="margin-top:16px;">
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><circle cx="17.5" cy="17.5" r="3.5" stroke="#f59e0b" stroke-width="1.7"/></svg>
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#eab308" stroke-width="1.7" stroke-linejoin="round"/><text x="7.5" y="15.5" font-size="7.5" fill="#eab308" font-family="monospace" font-weight="bold">JS</text></svg>
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
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The code is <strong>byte-for-byte identical</strong> to calling a single model. The routing intelligence lives entirely in the platform."</p></div>
    <div class="talk-item"><span class="talk-icon">🎯</span><p>Run a live call and point out the response time. If you have monitoring open, show the routing decision in the Provider dashboard.</p></div>
  </div>
</div>
`,

d2eu3: ()=>`
<div class="card card-violet">
  <div class="card-title">Provider — Aggregate Model Observability</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Providers gain full visibility into routing decisions, per-instance performance, and customer usage patterns.</p>
</div>
<div class="grid-2">
  <div class="card" style="border-color:rgba(139,92,246,0.25)">
    <div class="card-title" style="color:#c4b5fd">Customer Calls → Overview</div>
    <div class="grid-2" style="gap:10px">
      <div class="metric-chip"><div class="metric-val" style="color:#a78bfa;font-size:22px">98.7%</div><div class="metric-label">Success Rate</div><div class="metric-bar"><div class="metric-fill" style="width:98.7%;background:linear-gradient(90deg,#a78bfa,#6366f1)"></div></div></div>
      <div class="metric-chip"><div class="metric-val" style="color:#22d3ee;font-size:22px">142ms</div><div class="metric-label">Avg Latency</div></div>
    </div>
  </div>
  <div class="card" style="border-color:rgba(52,211,153,0.25)">
    <div class="card-title" style="color:#6ee7b7">Routing Distribution</div>
    <div style="font-size:12px;color:var(--muted);line-height:2">
      <div style="display:flex;justify-content:space-between"><span>qwen3-highspeed</span><span style="color:#fbbf24">68%</span></div>
      <div class="metric-bar" style="margin-bottom:8px"><div class="metric-fill" style="width:68%;background:#fbbf24"></div></div>
      <div style="display:flex;justify-content:space-between"><span>qwen3-balance</span><span style="color:#a78bfa">24%</span></div>
      <div class="metric-bar" style="margin-bottom:8px"><div class="metric-fill" style="width:24%;background:#a78bfa"></div></div>
      <div style="display:flex;justify-content:space-between"><span>qwen3-original</span><span style="color:#34d399">8%</span></div>
      <div class="metric-bar"><div class="metric-fill" style="width:8%;background:#34d399"></div></div>
    </div>
  </div>
</div>
<div class="card" style="border-color:rgba(34,211,238,0.2)">
  <div class="card-title">Navigation: Provider Observability</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
    <span class="tag-chip" style="border-color:rgba(139,92,246,0.4);color:#c4b5fd">Customer Calls → Overview</span>
    <span class="tag-chip" style="border-color:rgba(139,92,246,0.4);color:#c4b5fd">Customer Calls → Call Analytics</span>
    <span class="tag-chip" style="border-color:rgba(139,92,246,0.4);color:#c4b5fd">Customer Calls → Call Logs</span>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes — Demo 2 Close</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">🎉</span><p>"That's Demo 2. The Provider created a <strong>high-availability aggregate model</strong> with intelligent cost routing — and the End User never needed to know."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Notice the routing dashboard: 68% of traffic went to the cheap instance, only 8% to the premium — <strong>automatic cost optimization</strong> with zero developer effort."</p></div>
    <div class="talk-item"><span class="talk-icon">🏁</span><p>"Between Demo 1 and Demo 2, you've seen the full AGIone capability stack: on-prem infrastructure management, model lifecycle, and intelligent aggregation."</p></div>
  </div>
</div>
`,

});
