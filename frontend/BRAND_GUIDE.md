# SimpliCreative Brand Guide — Prospect Intelligence POC

Source of truth: [simplicreative.com](https://simplicreative.com/) and [about](https://simplicreative.com/about/). Captured Aug 2026 from live/archived assets (SiteGround captcha blocks direct crawls; CSS globals and logo verified via Wayback).

## Brand personality

Calm, strategic, clarity-first. Professional agency craft without neon “AI” theatrics. Values from About: **Control**, **Clarity**, **Cover-your-ass Confidence**. Delivery culture: same-day, direct, structured, calm.

## Logo

| Asset | Path | Notes |
|---|---|---|
| Primary mark + wordmark (dark bg) | `public/brand/simplicreative-logo-dark.svg` | Teal hexagon `#009d88` + white wordmark |
| App chrome (light bg) | `public/brand/simplicreative-logo-light.svg` | Same mark + charcoal wordmark `#0b2726` |
| Favicon | `public/brand/favicon-128.png` | Domain favicon fallback |

Do not stretch the logo. Prefer horizontal lockup in sidebar/header.

## Colors

| Role | Token | Hex | Usage |
|---|---|---|---|
| Primary | `--sc-primary` | `#006A5B` | Primary buttons, active nav, key emphasis |
| Accent | `--sc-accent` | `#009D88` | Logo mark, highlights, success accents |
| Primary deep | `--sc-primary-deep` | `#144D4C` | Hover/pressed primary |
| Ink | `--sc-ink` | `#0B2726` | Headings, strongest text |
| Charcoal | `--sc-charcoal` | `#262F3A` | Body emphasis, sidebar |
| Night | `--sc-night` | `#13181D` | Dark panels |
| Muted | `--sc-muted` | `#647B98` | Secondary labels, meta |
| Line | `--sc-line` | `#E0E5EB` | Borders, dividers |
| Canvas | `--sc-canvas` | `#F4F7F6` | App background (tinted from brand neutrals) |
| Surface | `--sc-surface` | `#FFFFFF` | Panels, tables |
| Danger | `--sc-danger` | `#B42318` | Reject / destructive |
| Warning | `--sc-warning` | `#B54708` | Needs review |
| Success | `--sc-success` | `#006A5B` | Approved / complete |

Avoid generic blue SaaS. The `#146ff8` link blue appears rarely on the marketing site — do not use as brand accent in this app.

## Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| UI / body | Inter | 400–600 | Site primary sans |
| Display / page titles | Inter | 600–700 | Tight tracking (−0.02em) |
| Optional supporting | Roboto / Roboto Slab | — | Present on site; prefer Inter for app consistency |

Scale (desktop):

- Page title: 1.75rem / 700
- Section: 1.125rem / 600
- Body: 0.9375rem / 400, line-height 1.55
- Meta / labels: 0.75rem / 500, letter-spacing 0.02em
- Measure: ~65–75ch for long briefing copy

## Spacing

Base unit 4px. Common: 8, 12, 16, 24, 32, 48. More space above section headings than below. Dense tables; airy executive briefing blocks.

## Buttons

- Primary: fill `--sc-primary`, text white, radius 6px, padding 10px 16px, weight 600. Hover → `--sc-primary-deep`.
- Secondary: white surface, 1px `--sc-line`, ink text. Hover soft teal wash.
- Ghost: transparent, teal text.
- Avoid pill (`rounded-full`) CTAs.

## Cards / panels

Soft 1px `--sc-line` border, white surface, radius 10px, shadow `0 1px 2px rgba(19,24,29,0.04), 0 8px 24px rgba(19,24,29,0.04)`. No nested card stacks. No colored left borders as decoration.

## Forms

Inputs: 40px height, 6px radius, `--sc-line` border, focus ring teal 2px. Labels above fields, muted.

## Status styles

| Status | Treatment |
|---|---|
| Ready | Teal soft pill, primary text |
| Needs Review | Warm amber soft pill |
| Approved | Teal outline + check |
| AI Generated | Muted charcoal soft pill |
| Pending | Neutral line pill |

## Navigation

Left sidebar, charcoal/night ground, white/teal logo, muted inactive links, teal active indicator. Top content header with greeting — no marketing hero.

## Motion

Purposeful, calm: analyze checklist stagger, panel fade/slide 200–320ms ease-out, subtle hover lift on work-queue actions. No neon glow or continuous pulse.

## Anti-patterns for this POC

Generic blue SaaS, purple gradients, glassmorphism, oversized KPI hero numbers, chatbot chrome, “Agency Brain” naming.
