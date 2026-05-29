// ============================================================
// AGIone Demo Runbook — Step Configuration
// ============================================================
// Each key matches a step `id` from the demos[] metadata.
//
// Fields:
//   navPath     — breadcrumb shown in the platform link bar
//   platformUrl — "Open in Platform" button destination
//   screenshot  — path relative to project root, e.g. "screenshots/d1-op2.png"
//                 Set to null if no screenshot available yet (placeholder shown)
// ============================================================

/* global stepConfig */

const stepConfig = {

  // ── Demo 1 · On-Premise Model Deploy & Publish ───────────

  "d1-overview": {
    navPath:     "demo.agione.pro · Home",
    platformUrl: "https://demo.agione.pro",
    screenshot:  null
  },
  "d1-op1": {
    navPath:     "demo.agione.pro · Login",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-op1-login.png"
  },
  "d1-op3": {
    navPath:     "Infrastructure → GPU Resources",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-op3-gpu.png"
  },
  "d1-op4": {
    navPath:     "Infrastructure → Resource Pool",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-op4-pool.png"
  },
  "d1-pr1": {
    navPath:     "Studio → My Models → Choose Self Deploy",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-pr1-template.png"
  },
  "d1-pr2": {
    navPath:     "Studio → My Models → On-Prem → Deploy",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-pr2-deploy.png"
  },
  "d1-pr3": {
    navPath:     "My Models → Publish Model",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-pr3-publish.png"
  },
  "d1-eu1": {
    navPath:     "Discover → Models",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-eu1-catalog.png"
  },
  "d1-eu2": {
    navPath:     "Discover → Models → [Model] → Quick Start",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-eu2-quickstart.png"
  },
  "d1-eu3": {
    navPath:     "My Calls → Overview",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d1-eu3-mycalls.png"
  },

  // ── Demo 2 · Aggregate Model Publish ─────────────────────

  "d2-overview": {
    navPath:     "demo.agione.pro · Home",
    platformUrl: "https://demo.agione.pro",
    screenshot:  null
  },
  "d2-pr1": {
    navPath:     "My Models → My Aggregate",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-pr1-aggregate-tab.png"
  },
  "d2-pr2": {
    navPath:     "My Models → My Aggregate → Create Aggregate Model",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-pr2-create.png"
  },
  "d2-pr3": {
    navPath:     "Create Aggregate → Routing Strategy",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-pr3-routing.png"
  },
  "d2-pr4": {
    navPath:     "Create Aggregate → Billing → Submit for Audit",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-pr4-billing.png"
  },
  "d2-eu1": {
    navPath:     "Discover → Models → [Aggregate Model]",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-eu1-discover.png"
  },
  "d2-eu2": {
    navPath:     "Discover → Models → [Aggregate Model] → Quick Start",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-eu2-call.png"
  },
  "d2-eu3": {
    navPath:     "Customer Calls → Overview",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d2-eu3-observe.png"
  },

  // ── Demo 3 · Public Model Publish ────────────────────────

  "d3-overview": {
    navPath:     "demo.agione.pro · Home",
    platformUrl: "https://demo.agione.pro",
    screenshot:  null
  },
  "d3-pr1": {
    navPath:     "My Models → Publish Model",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d3-pr1-publish-btn.png"
  },
  "d3-pr2": {
    navPath:     "Publish Model → Model Source Info → Test",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d3-pr2-source.png"
  },
  "d3-pr3": {
    navPath:     "Publish Model → Billing → Submit for Audit",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d3-pr3-billing.png"
  },
  "d3-eu1": {
    navPath:     "Discover → Models → [Published Model]",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d3-eu1-catalog.png"
  },
  "d3-eu2": {
    navPath:     "Discover → Models → [Model] → Quick Start",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d3-eu2-quickstart.png"
  },
  "d3-eu3": {
    navPath:     "My Calls → Overview",
    platformUrl: "https://demo.agione.pro",
    screenshot:  "screenshots/d3-eu3-calls.png"
  }

};
