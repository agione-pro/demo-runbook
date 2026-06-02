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
│   └── demo3.js        # Demo 3 step metadata + HTML content
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

**Add a new demo:**  
1. Create `content/demo4.js` following the same pattern as existing files
2. Add `<script src="content/demo4.js"></script>` to `index.html`
3. Add a tab button in the header

## Platform

**Demo URL:** [https://demo.agione.pro](https://demo.agione.pro)

## License

Internal use only — AGIOne / OneProCloud.
