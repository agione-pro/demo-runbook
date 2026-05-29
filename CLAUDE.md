# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AGIone Interactive Demo Runbook — a zero-build, single-page web application that guides sales/pre-sales presenters through step-by-step demo scenarios on the AGIone platform. Internal use only (AGIone / OneProCloud).

**Live demo platform:** https://demo.agione.pro

## Architecture

The app is a static site with no build tools, framework, or server required. Open `index.html` in a browser to run locally.

### Rendering pipeline

1. `index.html` contains the full CSS, HTML shell, and **render engine** (vanilla JS)
2. On load, `content/demo*.js` files register step metadata into a global `demos` object and step HTML generators into a global `contentMap` object
3. `content/config.js` maps each step ID to its platform URL, breadcrumb path, and screenshot file path via the global `stepConfig` object
4. The render engine reads these globals to build the sidebar nav and content pane dynamically — no templating library

### Content files pattern

Each `content/demo*.js` follows the same structure:
- Top section: `demos[N] = { steps: [...] }` — step metadata (id, phase, role, title, subtitle, content key)
- Bottom section: `Object.assign(contentMap, { key: () => '...' })` — functions returning raw HTML for each step

Steps are identified by an `id` like `d1-op3` (demo 1, operator step 3). The `content` field maps to a key in `contentMap`.

### Roles and phases

Three roles flow through demos: **Operator** (cyan), **Provider** (violet), **End User** (green). Each step belongs to a phase with corresponding color theming defined in `phaseColors` within `index.html`.

## Deployment

Pushes to `main` trigger `.github/workflows/main.yml` which rsyncs the entire directory to a remote server. Deployment vars (`DEMO_RUNBOOK_DEPLOY_PATH`, `DEPLOY_HOST`, `DEPLOY_PORT`, `DEPLOY_USER`) and the `DEPLOY_KEY` secret are configured in GitHub repo settings.

## Common Tasks

### Add/edit a step's content
Edit the relevant `content/demo*.js` file. Find the step function by its key (e.g., `d1pr3`) and modify the returned HTML.

### Update a screenshot
Replace the PNG in `screenshots/` — filenames are defined in `content/config.js` under each step's `screenshot` field.

### Add a new demo
1. Create `content/demo4.js` following the pattern in existing files
2. Add `<script src="content/demo4.js"></script>` to `index.html`
3. Add a tab button in the header's `.demo-selector`

## Key Conventions

- All content is inline HTML returned from JS functions — no markdown, no templates
- Step IDs follow the pattern `d{demo}-{role_prefix}{number}` (e.g., `d2-pr3` = demo 2, provider step 3)
- The `screenshots/` directory uses the naming convention from `config.js` (e.g., `d1-op3-gpu.png`)
- Mobile responsiveness is handled via CSS media queries at 900px and 640px breakpoints in `index.html`
- The sidebar becomes a slide-out drawer on mobile (≤640px)
