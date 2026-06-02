# AGIOne Interactive Demo Runbook

An interactive, browser-based demo script for AGIOne platform sales and pre-sales teams.

## What is this?

A single-page web application that guides presenters through three complete demo scenarios on the AGIOne platform — step by step, with platform screenshots, live links, and presenter talking points at every stage.

## Demo Scenarios

| Demo | Name | Roles | Steps |
|------|------|-------|-------|
| Demo 1 | On-Premise Model Deploy & Publish | Operator → Provider → End User | 10 |
| Demo 2 | Aggregate Model Publish | Provider → End User | 8 |
| Demo 3 | Public Model Publish | Provider → End User | 7 |

## Project Structure

```
agione-demo-runbook/
├── index.html          # App shell: CSS, layout, render engine
├── content/
│   ├── config.js       # Per-step platform links and screenshot paths
│   ├── demo1.js        # Demo 1 step metadata + HTML content
│   ├── demo2.js        # Demo 2 step metadata + HTML content
│   ├── demo3.js        # Demo 3 step metadata + HTML content
│   └── demo4.js        # FAQ step metadata + role-based FAQ content
└── screenshots/
    ├── README.md       # Screenshot filename reference table
    └── *.png           # Platform screenshots (one per step)
```

## How to Use

Open `index.html` in a browser — no build tools, no server required for local use.

For team access, deploy the entire folder as a static site on any web server or CDN.

## How to Update Content

**Edit a step's talking points or instructions:**  
Open `content/demo1.js` (or demo2/demo3), find the step function by its key (e.g. `d1pr3`), and edit the HTML directly.

**Update a platform screenshot:**  
Replace the corresponding PNG in `screenshots/` — filenames are defined in `content/config.js`.

**Update FAQ content:**  
Open `content/demo4.js`. FAQ items must follow the classification rules below.

### FAQ Classification Rules

FAQ is organized for fast demo delivery from a single page. Except for High-Level Design topics and service/responsibility topics, FAQ questions should be assigned to the role whose AGIone operation interface owns the workflow.

Role FAQ sections must then be grouped by the corresponding AGIone menu or management domain, not by abstract customer question type.

Use these rules when adding or moving FAQ items:

- **High-Level Design FAQ**: only keep solution-level architecture, strategy, or security topics that do not belong to a specific role's daily operation screen.
- **Service FAQ**: keep partner service process, SLA, benchmark, responsibility matrix, and similar service-delivery topics.
- **Operator FAQ**: classify by management menu/domain, especially `AI-Infra`, `Card`, `Model`, `Tenant Management`, and `Operations Management`.
- **Provider FAQ**: classify by provider-side workflows such as aggregate model management, model publishing controls, and tenant-facing publishing configuration.
- **End User & Developer FAQ**: classify by end-user workflows such as user management, API access, and development workbench.

When appending new FAQ questions, first decide the owning role/interface, then place the item under the matching menu-domain section. Do not create a new top-level FAQ category unless the question cannot be demonstrated or explained from an existing role or service page.

**Add a new demo:**  
1. Create the next numbered content file, such as `content/demo5.js`, following the same pattern as existing files
2. Add the matching `<script src="content/demo5.js"></script>` to `index.html`
3. Add a tab button in the header

## Platform

**Demo URL:** [https://demo.agione.pro](https://demo.agione.pro)

## License

Internal use only — AGIOne / OneProCloud.
