// AGIone Demo Runbook — Demo 3 content
// Edit step metadata in demos[3].steps[]
// Edit step HTML in the Object.assign block below

/* global demos, contentMap */

// ── Step metadata ──────────────────────────────────────
demos[3] = {
    title: "Public Model Publish",
    subtitle: "Provider publishes a single public model → End User direct access",
    steps: [
      {
        id:"d3-overview", phase:"overview", phaseLabel:"Overview", role:null,
        title:"Demo 3 · Public Model Publish",
        subtitle:"Show how a Provider publishes a single model as a public service — no aggregation, no on-prem hardware required.",
        content:"overview3"
      },
      {
        id:"d3-pr1", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Login & Navigate to My Models",
        subtitle:"Provider logs into AGIone and opens the model publish wizard.",
        content:"d3pr1"
      },
      {
        id:"d3-pr2", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Fill in Model Source Info",
        subtitle:"Configure model source, API key, meta model, and input/output modalities.",
        content:"d3pr2"
      },
      {
        id:"d3-pr3", phase:"provider", phaseLabel:"Provider", role:"Provider",
        title:"Set Billing & Submit for Audit",
        subtitle:"Configure token-based billing, rate limit, then submit for immediate release.",
        content:"d3pr3"
      },
      {
        id:"d3-eu1", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Discover Published Model",
        subtitle:"End user finds the model in the public service catalog.",
        content:"d3eu1"
      },
      {
        id:"d3-eu2", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Call Model via API / SDK",
        subtitle:"Use Quick Start to call the model via HTTP, Python SDK, or Curl.",
        content:"d3eu2"
      },
      {
        id:"d3-eu3", phase:"enduser", phaseLabel:"End User", role:"End User",
        title:"Call Monitoring",
        subtitle:"End user and Provider both monitor usage and call logs from their dashboards.",
        content:"d3eu3"
      }
    ]
  };

// ── Step content ───────────────────────────────────────
Object.assign(contentMap, {

overview3: ()=>`

<!-- USER STORY HERO -->
<div style="background:linear-gradient(135deg,rgba(251,191,36,0.07) 0%,rgba(99,102,241,0.09) 100%);border:1px solid rgba(251,191,36,0.28);border-radius:18px;padding:24px 26px;margin-bottom:18px;position:relative;overflow:hidden;">
  <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#fbbf24,#8b5cf6,#22d3ee);"></div>
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
    <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,rgba(251,191,36,0.2),rgba(99,102,241,0.2));border:1px solid rgba(251,191,36,0.35);display:flex;align-items:center;justify-content:center;font-size:26px;flex:none;">🏪</div>
    <div>
      <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:4px;">Demo Scenario · Model Provider</div>
      <div style="font-size:17px;font-weight:800;color:var(--text);line-height:1.3;">"I have an API key for <span style="color:#fde68a;">Qwen / DeepSeek</span> — I want to publish it on AGIone so my users can call it directly, and I track every token."</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
    <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">🌐</div>
      <div style="font-size:12px;font-weight:700;color:#fde68a;">Public to All Users</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Anyone on the platform can discover and call this model</div>
    </div>
    <div style="background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">💳</div>
      <div style="font-size:12px;font-weight:700;color:#c4b5fd;">Pay Per Token</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Set input / output pricing — users are billed automatically</div>
    </div>
    <div style="background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.25);border-radius:12px;padding:14px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
      <div style="font-size:26px;">⚡</div>
      <div style="font-size:12px;font-weight:700;color:#6ee7b7;">No GPU Needed</div>
      <div style="font-size:11px;color:var(--muted);line-height:1.4;">Just bring your API key — AGIone handles the rest</div>
    </div>
  </div>
</div>

<!-- ARCHITECTURE FLOW -->
<div style="background:linear-gradient(180deg,rgba(13,20,34,0.92),rgba(8,13,24,0.92));border:1px solid rgba(80,110,160,0.22);border-radius:18px;padding:22px 20px;margin-bottom:18px;">
  <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px;">Architecture Flow</div>

  <div style="display:grid;grid-template-columns:1fr 28px 1fr 28px 1fr;align-items:stretch;gap:0;">

    <!-- Provider -->
    <div class="arch-col arch-col-1" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(139,92,246,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-violet"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polygon points="12,4 20,9 17,18 7,18 4,9" stroke="#a78bfa" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#c4b5fd;">Provider</div><div style="font-size:10px;color:var(--muted);">Phase 1 · 3 steps</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">📋</span><span style="font-size:11px;color:#ddd6fe;">My Models → Publish Model</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🔑</span><span style="font-size:11px;color:#ddd6fe;">Fill in API Key + Model Source</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(139,92,246,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">💳</span><span style="font-size:11px;color:#ddd6fe;">Set Billing + Submit</span>
        </div>
      </div>
      <div style="margin-top:10px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.3);border-radius:8px;padding:7px;font-size:11px;font-weight:700;color:#c4b5fd;text-align:center;">📋 Listed in Public Catalog</div>
    </div>

    <!-- Arrow -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="arch-arrow-path" d="M2 12h16" stroke="#34d399" stroke-width="1.8" stroke-linecap="round"/><path d="M14 8l4 4-4 4" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    </div>

    <!-- AGIone Platform -->
    <div class="arch-col arch-col-2" style="background:linear-gradient(135deg,rgba(99,102,241,0.10),rgba(251,191,36,0.07));border:1px solid rgba(99,102,241,0.3);border-radius:12px;padding:14px;display:flex;flex-direction:column;position:relative;overflow:hidden;">
      <div class="arch-accent-indigo"></div>
      <div style="text-align:center;margin-bottom:14px;">
        <div style="width:46px;height:46px;border-radius:12px;background:linear-gradient(135deg,#6366f1,#fbbf24);display:flex;align-items:center;justify-content:center;margin:0 auto 8px;box-shadow:0 0 18px rgba(99,102,241,0.3);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.5" fill="#fff"/></svg>
        </div>
        <div style="font-size:13px;font-weight:800;color:#a5b4fc;">AGIone Platform</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px;">Model Proxy &amp; Billing</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(251,191,36,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">🔗</span><span style="font-size:11px;color:#e2e8f0;">Forward requests to model source</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(99,102,241,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">💰</span><span style="font-size:11px;color:#e2e8f0;">Count tokens &amp; bill users</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.06);border-radius:7px;padding:7px 9px;">
          <span style="font-size:13px;">📊</span><span style="font-size:11px;color:#e2e8f0;">Log every call for both roles</span>
        </div>
      </div>
      <div style="margin-top:10px;background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:8px;padding:7px;font-family:monospace;font-size:10px;color:#fde68a;text-align:center;">demo.agione.pro/v1 · qwen3.6-plus</div>
    </div>

    <!-- Arrow -->
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="arch-arrow-path" d="M2 12h16" stroke="#34d399" stroke-width="1.8" stroke-linecap="round"/><path d="M14 8l4 4-4 4" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
    </div>

    <!-- End User -->
    <div class="arch-col arch-col-3" style="background:linear-gradient(180deg,rgba(20,30,50,0.88),rgba(13,19,33,0.88));border:1px solid rgba(52,211,153,0.28);border-radius:12px;padding:14px;position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <div class="arch-accent-green"></div>
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:12px;">
        <div style="width:28px;height:28px;border-radius:7px;background:rgba(52,211,153,0.15);border:1px solid rgba(52,211,153,0.4);display:flex;align-items:center;justify-content:center;flex:none;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#34d399" stroke-width="1.7"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#34d399" stroke-width="1.7"/></svg>
        </div>
        <div><div style="font-size:13px;font-weight:800;color:#6ee7b7;">End User</div><div style="font-size:10px;color:var(--muted);">Phase 2 · 3 steps</div></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px;flex:1;">
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">🔍</span><span style="font-size:11px;color:#bbf7d0;">Discover in Public Catalog</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">⌨️</span><span style="font-size:11px;color:#bbf7d0;">Call via API / SDK / Claude Code</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;background:rgba(52,211,153,0.05);border-radius:7px;padding:7px 9px;">
          <span style="font-size:14px;">📈</span><span style="font-size:11px;color:#bbf7d0;">My Calls — usage &amp; cost</span>
        </div>
      </div>
      <div class="arch-result-green" style="margin-top:10px;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.3);border-radius:8px;padding:7px;font-size:11px;font-weight:700;color:#6ee7b7;text-align:center;">✅ No Setup Required</div>
    </div>
  </div>
</div>

<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Opening Talking Points</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">🎯</span><p>"Demo 3 is the simplest flow — <strong>no on-prem hardware, no aggregation</strong>. Just bring an API key and publish in minutes."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"This is the typical entry point for Providers who have access to a cloud model like Qwen or DeepSeek and want to <strong>offer it to their internal teams or customers</strong>."</p></div>
    <div class="talk-item"><span class="talk-icon">⚡</span><p>"End Users get the same experience as Demo 1 and Demo 2 — <strong>one catalog, one API format</strong>, regardless of how the model was published."</p></div>
  </div>
</div>
`,

d3pr1: ()=>`
<div class="card card-violet">
  <div class="card-title">Login & Navigate to My Models</div>
  <table class="info-table">
    <tr><td>Platform URL</td><td>https://demo.agione.pro</td></tr>
    <tr><td>Role</td><td>Provider Account (or Operator Account)</td></tr>
    <tr><td>Destination</td><td>My Models → Publish Model</td></tr>
  </table>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body"><strong>Login with Provider Account</strong><p>Navigate to demo.agione.pro. Use Provider credentials.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Left nav → My Models</strong><p>Enter the model management page.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Click "Publish Model" (top right, purple button)</strong><p>This opens the publish wizard. Choose publication scope: <strong>Public</strong>.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body"><strong>Select Model Type → Multimodal</strong><p>Supports Text + Image input, Text output.</p></div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Unlike Demo 1, there is <strong>no deployment step</strong> here — the model already runs on Alibaba Cloud. We're just wrapping it with an AGIone service entry."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Choosing Public means any user on this platform can discover and call this model."</p></div>
  </div>
</div>
`,

d3pr2: ()=>`
<div class="card card-violet">
  <div class="card-title">Fill in Model Source Info</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Connect AGIone to the upstream model API. All fields come from the model provider (Alibaba Cloud in this demo).</p>
</div>
<div class="card" style="border-color:rgba(139,92,246,0.25);padding:18px 20px;">
  <div class="card-title" style="color:#c4b5fd;">Model Source Configuration</div>
  <table class="info-table">
    <tr><td>Model Source</td><td>Alibaba-china</td></tr>
    <tr><td>Region</td><td>china</td></tr>
    <tr><td>Request URL</td><td>https://dashscope.aliyuncs.com</td></tr>
    <tr><td>API Key</td><td>sk-xxxx (masked for demo)</td></tr>
    <tr><td>Meta Model</td><td>Qwen3.6-Plus</td></tr>
    <tr><td>Model Source ID</td><td>qwen3.6-plus</td></tr>
    <tr><td>Input Modalities</td><td>Text, Image</td></tr>
    <tr><td>Output Modalities</td><td>Text</td></tr>
    <tr><td>Advanced Capabilities</td><td>Function/Tool Support, Thinking Mode</td></tr>
    <tr><td>Token Limits</td><td>Max content 1000K · Max input 936K · Max output 64K</td></tr>
    <tr><td>Custom Tag</td><td>Aliyun (optional)</td></tr>
  </table>
</div>
<div class="steps-list" style="margin-top:16px;">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body"><strong>Fill in all fields above</strong><p>Copy from your model provider's dashboard. API Key is the most critical field.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body">
      <strong>Click "Test" to verify connectivity</strong>
      <p>AGIone sends a test request to confirm the API address and key are working.</p>
      <div class="step-note">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#fbbf24" stroke-width="1.8"/></svg>
        <span>If test fails, check the Request URL, API Key, and network before continuing.</span>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Fill in display name &amp; description</strong><p>Auto-generated from Meta Model name. Editable. Add a short description for the catalog listing.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">4</div>
    <div class="step-body"><strong>Publication Method → Immediate Release</strong><p>Model goes live as soon as audit passes.</p></div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"This is the key step — AGIone becomes a <strong>proxy between your users and the upstream model</strong>. Your API key never gets exposed to end users."</p></div>
    <div class="talk-item"><span class="talk-icon">🎯</span><p>Click "Test" live — a green checkmark is a strong visual confirmation the integration is working.</p></div>
  </div>
</div>
`,

d3pr3: ()=>`
<div class="card card-violet">
  <div class="card-title">Set Billing & Submit for Audit</div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.3);color:#a78bfa;">1</div>
    <div class="step-body">
      <strong>Billing Configuration</strong>
      <div class="card" style="margin-top:10px;padding:14px;border-color:rgba(251,191,36,0.2)">
        <table class="info-table">
          <tr><td>Billing Type</td><td>Paid</td></tr>
          <tr><td>Billing Mode</td><td>Input/Output Billing</td></tr>
          <tr><td>Input Tokens</td><td>1M Tokens = 1.00 Credits</td></tr>
          <tr><td>Output Tokens</td><td>1M Tokens = 6.00 Credits</td></tr>
          <tr><td>Free Quota</td><td>Disabled</td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Rate Limit Configuration → Not enabled</strong><p>For this demo, leave rate limiting off.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Click "Submit for Audit"</strong><p>Model goes live immediately after approval. It now appears in the public service catalog.</p></div>
  </div>
</div>
<div class="card" style="margin-top:4px;border-color:rgba(139,92,246,0.3);background:rgba(139,92,246,0.04)">
  <div class="card-title" style="color:#c4b5fd;">✓ Model Published — Now in Public Catalog</div>
  <div class="flow-row">
    <div class="flow-node">API Key + Source</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node">AGIone Proxy</div>
    <div class="flow-arrow">→</div>
    <div class="flow-node active-node">qwen3.6-plus · Public</div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The entire publish process took about <strong>3 minutes</strong>. The model is now live and billable — no infrastructure involved."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Notice we set per-token pricing. AGIone automatically charges users and keeps a full audit trail — the Provider doesn't need to build any billing logic."</p></div>
  </div>
</div>
`,

d3eu1: ()=>`
<div class="card card-green">
  <div class="card-title">End User — Discover Published Model</div>
</div>
<div class="steps-list">
  <div class="step-item highlighted">
    <div class="step-circle" style="background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);color:#34d399;">1</div>
    <div class="step-body"><strong>Login with End User Account</strong><p>Navigate to demo.agione.pro with End User credentials.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">2</div>
    <div class="step-body"><strong>Discover → Models</strong><p>The newly published Qwen3.6-Plus model appears in the public catalog — identical presentation to any other model.</p></div>
  </div>
  <div class="step-item">
    <div class="step-circle" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--muted);">3</div>
    <div class="step-body"><strong>Click the model → Quick Start tab</strong><p>API endpoint, Base URL, and code samples are auto-generated. Ready to copy.</p></div>
  </div>
</div>
<div class="card" style="border-color:rgba(52,211,153,0.25);background:rgba(52,211,153,0.03)">
  <div class="card-title" style="color:#6ee7b7;">What End Users See</div>
  <div class="grid-2">
    <div style="font-size:13px;color:var(--text);line-height:1.9">
      ✅ Model name &amp; description<br>
      ✅ API endpoint URL<br>
      ✅ Pricing (per token)<br>
      ✅ Quick Start code sample
    </div>
    <div style="font-size:13px;color:var(--muted);line-height:1.9">
      ❌ Provider's API key<br>
      ❌ Upstream model source<br>
      ❌ Alibaba Cloud account<br>
      ❌ Any infra details
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"The End User experience is <strong>identical across all three demos</strong> — same catalog, same Quick Start, same API format. That consistency is the point."</p></div>
  </div>
</div>
`,

d3eu2: ()=>`
<div class="card card-green">
  <div class="card-title">Call Model via API / SDK</div>
</div>
<div class="code-block">
  <div class="code-header">
    <div class="code-dots"><div class="code-dot" style="background:#ff5f5f"></div><div class="code-dot" style="background:#fbbf24"></div><div class="code-dot" style="background:#34d399"></div></div>
    <span class="code-lang">Python · Quick Start (copy from platform)</span>
  </div>
<span class="kw">from</span> openai <span class="kw">import</span> OpenAI

client = OpenAI(
    base_url=<span class="str">"https://demo.agione.pro/v1"</span>,
    api_key=<span class="str">"&lt;your-model-key&gt;"</span>
)

response = client.chat.completions.create(
    model=<span class="str">"qwen3.6-plus"</span>,
    messages=[{
        <span class="str">"role"</span>: <span class="str">"user"</span>,
        <span class="str">"content"</span>: <span class="str">"Hello, what can you do?"</span>
    }]
)
<span class="kw">print</span>(response.choices[0].message.content)
</div>
<div style="margin-top:16px;"><div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:14px;">Works With Any OpenAI-Compatible Client</div><div style="font-size:10px;color:var(--subtle);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600;">AI Coding Assistants</div><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:16px;"><div style="text-align:center;padding:12px 6px;background:rgba(255,138,76,0.08);border:1px solid rgba(255,138,76,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:linear-gradient(135deg,#ff8a4c,#f97316);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.5" fill="#fff"/></svg></div><div style="font-size:11px;font-weight:700;color:#fdba74;">Claude Code</div></div><div style="text-align:center;padding:12px 6px;background:rgba(16,163,127,0.08);border:1px solid rgba(16,163,127,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(16,163,127,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#10a37f" stroke-width="1.8"/><path d="M8 12h8M12 8v8" stroke="#10a37f" stroke-width="1.8" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#6ee7b7;">ChatGPT / Codex</div></div><div style="text-align:center;padding:12px 6px;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(139,92,246,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3l7.5 7.5M3 21l7.5-7.5M21 3l-7.5 7.5M21 21l-7.5-7.5M3 3l18 18M21 3L3 21" stroke="#a78bfa" stroke-width="1.6" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#c4b5fd;">Cursor</div></div><div style="text-align:center;padding:12px 6px;background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(56,189,248,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 18c0-5 4-9 9-9s9 4 9 9" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#7dd3fc;">Windsurf</div></div><div style="text-align:center;padding:12px 6px;background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(52,211,153,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="4 17 10 11 4 5" stroke="#34d399" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="19" x2="20" y2="19" stroke="#34d399" stroke-width="1.8" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#6ee7b7;">Cline</div></div></div><div style="font-size:10px;color:var(--subtle);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600;">AI Platforms &amp; Apps</div><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:16px;"><div style="text-align:center;padding:12px 6px;background:rgba(66,133,244,0.08);border:1px solid rgba(66,133,244,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:linear-gradient(135deg,#4285f4,#34a853,#fbbc05,#ea4335);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 3l3 6.5L22 10l-5 5 1.5 7L12 19l-6.5 3L7 15 2 10l7-1.5L12 3z" fill="#fff"/></svg></div><div style="font-size:11px;font-weight:700;color:#93c5fd;">Gemini</div></div><div style="text-align:center;padding:12px 6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(255,255,255,0.08);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#e2e8f0" stroke-width="1.7"/><path d="M9 9l6 6M15 9l-6 6" stroke="#e2e8f0" stroke-width="1.7" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#e2e8f0;">GitHub Copilot</div></div><div style="text-align:center;padding:12px 6px;background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(99,102,241,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#818cf8" stroke-width="1.7" stroke-linejoin="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#a5b4fc;">LobeChat</div></div><div style="text-align:center;padding:12px 6px;background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(245,158,11,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#f59e0b" stroke-width="1.7"/></svg></div><div style="font-size:11px;font-weight:700;color:#fde68a;">Dify</div></div><div style="text-align:center;padding:12px 6px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(239,68,68,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" stroke="#f87171" stroke-width="1.7"/><circle cx="19" cy="5" r="2" stroke="#f87171" stroke-width="1.7"/><circle cx="19" cy="19" r="2" stroke="#f87171" stroke-width="1.7"/><path d="M7 12h5m2-5l-4 4m4 3l-4-4" stroke="#f87171" stroke-width="1.4" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#fca5a5;">n8n</div></div></div><div style="font-size:10px;color:var(--subtle);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600;">SDKs &amp; Direct Integration</div><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;"><div style="text-align:center;padding:12px 6px;background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(59,130,246,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 5.5 4 5 7c-1.5.5-3 2-3 4 0 2.5 2 4 4 4h1v2c0 1 .5 2 1.5 2.5" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round"/><path d="M14 21c1-.5 1.5-1.5 1.5-2.5v-2h1c2 0 4-1.5 4-4 0-2-1.5-3.5-3-4-.5-3-3-5-7-5" stroke="#60a5fa" stroke-width="1.6" stroke-linecap="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#93c5fd;">Python SDK</div></div><div style="text-align:center;padding:12px 6px;background:rgba(234,179,8,0.08);border:1px solid rgba(234,179,8,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(234,179,8,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#eab308" stroke-width="1.7" stroke-linejoin="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#fde68a;">Node.js SDK</div></div><div style="text-align:center;padding:12px 6px;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(34,211,238,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 8l-4 4 4 4m8-8l4 4-4 4" stroke="#22d3ee" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#67e8f9;">HTTP / REST</div></div><div style="text-align:center;padding:12px 6px;background:rgba(168,85,247,0.08);border:1px solid rgba(168,85,247,0.25);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(168,85,247,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" stroke="#a855f7" stroke-width="1.7" stroke-linejoin="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#d8b4fe;">LangChain</div></div><div style="text-align:center;padding:12px 6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:10px;"><div style="width:32px;height:32px;margin:0 auto 7px;background:rgba(255,255,255,0.07);border-radius:8px;display:flex;align-items:center;justify-content:center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="2" rx="1" fill="#94a3b8"/><rect x="3" y="15" width="18" height="2" rx="1" fill="#94a3b8"/><polyline points="3 7 12 3 21 7" stroke="#94a3b8" stroke-width="1.7" stroke-linejoin="round"/></svg></div><div style="font-size:11px;font-weight:700;color:#94a3b8;">curl / CLI</div></div></div></div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Same code as Demo 1. Just a different model name. This is the <strong>power of a unified API layer</strong> — developers don't need to learn anything new."</p></div>
    <div class="talk-item"><span class="talk-icon">🎯</span><p>Run live in terminal or Codex. Show the response. Point out that the request went to Alibaba Cloud behind the scenes — user never saw that.</p></div>
  </div>
</div>
`,

d3eu3: ()=>`
<div class="card card-green">
  <div class="card-title">Call Monitoring — My Calls & Customer Calls</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px">Same two-level observability as Demo 1 — End Users see their own usage, Provider sees all customer calls.</p>
</div>
<div class="grid-2">
  <div class="card" style="border-color:rgba(52,211,153,0.25)">
    <div class="card-title" style="color:#6ee7b7;">End User — My Calls</div>
    <div class="steps-list" style="gap:8px">
      <div class="step-item highlighted" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px;">My Calls → Overview</strong><p style="font-size:12px">Token usage, cost total, total calls, success rate.</p></div></div>
    </div>
  </div>
  <div class="card" style="border-color:rgba(139,92,246,0.25)">
    <div class="card-title" style="color:#c4b5fd;">Provider — Customer Calls</div>
    <div class="steps-list" style="gap:8px">
      <div class="step-item highlighted" style="padding:10px 12px"><div class="step-body"><strong style="font-size:13px;">Customer Calls → Overview</strong><p style="font-size:12px">Total usage, customer list, call trend across all users.</p></div></div>
    </div>
  </div>
</div>
<div class="presenter-box">
  <div class="presenter-title"><svg viewBox="0 0 24 24" fill="none"><path d="M8 10h8M8 14h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" stroke-width="1.8"/></svg>Presenter Notes — Demo 3 Close</div>
  <div class="talk-track">
    <div class="talk-item"><span class="talk-icon">🎉</span><p>"That's Demo 3 — a Provider brought in a cloud model with just an API key, published it publicly, and an End User was calling it in minutes."</p></div>
    <div class="talk-item"><span class="talk-icon">💬</span><p>"Compared to Demo 1, there's <strong>no infrastructure to manage</strong>. Compared to Demo 2, there's <strong>no routing logic to configure</strong>. The simplest path from model to users."</p></div>
    <div class="talk-item"><span class="talk-icon">🏁</span><p>"All three demos show the same End User experience — which is exactly the point. AGIone makes every model look the same to developers."</p></div>
  </div>
</div>
`,

});
