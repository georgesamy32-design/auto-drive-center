# Auto Drive Center — Elementor Build Guide (Hostinger + WordPress)

This rebuilds the [prototype](prototype/index.html) as a **client-editable** Elementor page. Values below are taken directly from [prototype/styles.css](prototype/styles.css) so the live site matches the design exactly.

> Time estimate: ~2–4 hours the first time. After you save it as a Template Kit, every future client is ~half a day.

---

## 0. Design tokens (set these ONCE, globally)

**Elementor → top-left hamburger → Site Settings.**

### Global Colors (Site Settings → Global Colors)
| Name | Hex | Used for |
|---|---|---|
| Primary (Accent) | `#e11d2a` | Buttons, accents, eyebrows |
| Accent Dark | `#b3121d` | Button hover |
| Black | `#0b0b0d` | Page background |
| Charcoal | `#121216` | Alternating section background |
| Surface | `#1c1c22` | Cards |
| Border | `#2c2c34` | Card/input borders |
| Text | `#ffffff` | Headings |
| Text Muted | `#a8a8b3` | Body / sub text |

### Global Fonts (Site Settings → Global Fonts)
| Role | Font | Weights |
|---|---|---|
| Primary / Headings | **Sora** | 700–800 |
| Secondary / Text | **Inter** | 400–600 |
| (Arabic site) Headings | **Cairo** | 700–800 |
| (Arabic site) Text | **Tajawal** | 400–700 |

### Layout (Site Settings → Layout)
- Content Width: **1180px**
- Widgets Space (gap): **24px**

### Background (Site Settings → Background)
- Page background color: **Black `#0b0b0d`**.

Setting these globally means the client can never break the palette — and if they ever want a different accent color, changing it once recolors the whole site.

---

## 1. Theme & plugin setup on Hostinger

1. hPanel → **Websites → Add Website → WordPress** (1-click install).
2. WP Admin → **Appearance → Themes** → install **Hello Elementor** (blank, fast base) and activate.
3. **Plugins → Add New**:
   - **Elementor** (free is fine to start; **Pro ~$59/yr** adds the Form widget, Theme Builder for header/footer, and pop-ups — recommended for client sites).
   - If staying on free Elementor, add **Fluent Forms** for the booking form.
4. **Pages → Add New** → title "Home" → **Edit with Elementor**. Set **Page Layout = Elementor Full Width** (gear icon, bottom-left) so sections go edge-to-edge.
5. Later: **Settings → Reading → Your homepage displays → A static page → Home.**

---

## 2. Section-by-section build

Each prototype section = one Elementor **Section** (or **Container**, if you use the newer flexbox containers — recommended). Settings shown as **Tab → Field → value**.

### 2.1 Top bar
- Container, **Layout → Direction: Row**, justify **Space Between**, background **Black `#0b0b0d`**, padding **8px 24px**.
- Left: Text Editor → `⏱ Sat–Thu, 10:00 AM – 9:00 PM`.
- Right: inner Row container with two Icon-List / Text widgets linking `mailto:` and `tel:+201227570033`. Text color **#a8a8b3**, size **13px**.

### 2.2 Header / Nav (use Pro Theme Builder, or the page header)
- **Pro:** Templates → Theme Builder → Header. Container Row, Space Between, sticky.
  - **Motion Effects → Sticky: Top.** Background `rgba(11,11,13,.95)` on scroll.
- Left: **Site Logo** or a Heading "Auto Drive Center" + sub "أوتو درايف سنتر".
- Right: **Nav Menu** widget (build the menu under Appearance → Menus: Home, Why Us, Services, Our Engineer, Locations) + a **Button** "Book Now".
  - Nav links: color **#a8a8b3**, hover **#ffffff**, typography Sora 500 / 15px.
  - Mobile breakpoint: enable the hamburger (toggle) — Elementor handles this automatically.

### 2.3 Hero
- Container, **min-height 92vh**, vertical align **Middle**.
- **Style → Background:**
  - Type **Classic** → Image: upload a real workshop/car photo (dark).
  - Add **Background Overlay** → color `#0b0b0d` opacity **0.6**, plus an optional gradient overlay (Angle 135°, `#0b0b0d` → transparent) for the cinematic look.
- Inside, a column max-width **720px**:
  - **Heading (eyebrow):** "ENGINEERING-LED AUTO CARE" — Sora 700, 13px, letter-spacing 3px, uppercase, color **#e11d2a**.
  - **Heading (H1):** "Expert Car Care, Led by Engineers" — Sora 800, clamp ~38–68px, color #fff. Wrap "Led by Engineers" in a span colored **#e11d2a** (use the editor's text color on selection, or a second Heading).
  - **Text:** the sub-paragraph, color **#a8a8b3**, 18–20px.
  - **Button group** (two Buttons side by side):
    - "📞 Call Now" → link `tel:+201227570033`, bg **#e11d2a**, hover **#b3121d**, radius **9px**, padding 16/34, Sora 600.
    - "Book Appointment" → link `#booking`, **transparent bg + 2px white border** (Style → Border), hover bg `rgba(255,255,255,.08)`.
  - **Icon List** for the 3 trust badges (✔ items), color #a8a8b3.

### 2.4 Stats strip
- Container, **Direction Row**, 4 columns, background **#e11d2a**, padding 44px 24px, text align center.
- 4× **Counter** widget:
  | Number | Suffix | Label |
  |---|---|---|
  | 12 | | Years of Expertise |
  | 8000 | + | Vehicles Serviced |
  | 2 | | Service Locations |
  | 100 | % | Genuine Parts & Fluids |
  - Counter number: Sora 800, ~46px, #fff. Label: 14px, `rgba(255,255,255,.88)`.
  - Add a right divider between columns (Column → Style → Border-right `rgba(255,255,255,.2)`), remove on last.
  > Confirm real numbers with the client before publishing — these are placeholders.

### 2.5 Why Us (3 features)
- Container, background **Black**, padding 96px 0.
- Section head (centered, max 680px): eyebrow + H2 "Real Engineering Behind Every Repair" + lead text.
- 3× **Icon Box** widget in a 3-column row:
  - Icon (or emoji 🛠️ 🛢️ 🔬), title (Sora 20px), description (#a8a8b3).
  - Box: bg **#1c1c22**, border 1px **#2c2c34**, radius **14px**, padding 34/28.
  - **Hover** (Style → Box → Hover): translateY -6px, border color **#e11d2a**. Set under Advanced → Motion or the widget's hover state.

### 2.6 Services (4 cards)
- Container, background **Charcoal #121216**.
- Section head: eyebrow "OUR SERVICES" + H2 "Complete Care Under One Roof".
- 4× **Icon Box** (or save one as a template and duplicate):
  - ⚙️ Mechanical Repairs / 🔧 Transmission Service / ⚡ Electrical & Tuning / ✨ Full Vehicle Renewal.
  - Each with a "Book service →" link (link to `#booking`, color **#e11d2a**).
  - Card hover: translateY -6px + a **3px top border in #e11d2a** appearing (use Advanced → Border on hover).

### 2.7 Our Engineer (2-col)
- Container, **Direction Row**, 2 columns (~45% / 55%), gap 56px, vertical align center.
- Left: **Image** widget — a photo of Eng. Mina Matta (radius 18px). Overlay a small badge box "12+ years leading the workshop" (Inner container, bg **#e11d2a**, absolute/negative margin to overlap).
- Right: eyebrow "MEET THE ENGINEER" + H2 "Directed by Eng. Mina Matta" + paragraph + an **Icon List** (3 check items, check icon in red circle) + a Button "Book with our team".

### 2.8 Process (4 steps)
- Container, background **Charcoal**. Section head "How It Works".
- 4× small containers, each: big number "01–04" (Sora 800, 40px, color **#23232b**, turns **#e11d2a** on hover) + H3 + text.

### 2.9 Booking (form)
- Container, background gradient Black → `#17171c`. **Direction Row**, 2 columns (40/60).
- Left: eyebrow + H2 "Reserve Your Slot in Minutes" + text + two large phone links (Sora 700, 22px).
- Right: **Form widget** (Elementor Pro) — or a Fluent Forms block.
  - Fields: **Name** (text), **Phone** (tel), **Car Model** (text), **Preferred Date** (date), **Service Needed** (select: Mechanical Repairs / Transmission Service / Electrical & Tuning / Full Vehicle Renewal / General Diagnostics), **Notes** (textarea).
  - **Actions After Submit:** Email (to `auto.drive2024@outlook.com`) + optionally WhatsApp/redirect.
  - Style: form bg **#1c1c22**, border 1px **#2c2c34**, radius 14px, padding 34px. Inputs bg **#121216**, border **#2c2c34**, focus border **#e11d2a**.
  - Submit button: full width, bg **#e11d2a**, "Request Appointment".

### 2.10 Locations (2-col)
- Container, background **Charcoal**. Section head "Two Locations in El-Salam".
- 2× containers (cards, bg #1c1c22, border, radius 14px):
  - **The Workshop:** `5 El-Sherkat St, End of Gamal Abdel Nasser St, El-Herfeyeen, El-Salam` + phones `01227570033`, `01228884611`.
  - **The Office:** `61 El-Badrawy St, Quba, El-Salam` + email.
  - Add **Google Maps** widget under each (paste the place's coordinates/address). Title color **#e11d2a**.

### 2.11 CTA banner
- Container, background **gradient #e11d2a → #b3121d**, Direction Row, Space Between, padding 54px.
- Left: H2 "Your car deserves an engineer's attention." + text. Right: white Button "Book Appointment" → `#booking`.

### 2.12 Footer (Pro Theme Builder → Footer)
- Container, background **#000**, 4 columns: Brand+about / Quick Links / Contact / Locations.
- Bottom bar: `© 2026 Auto Drive Center (أوتو درايف سنتر). All rights reserved.`

### 2.13 Floating call button
- Add a **Button** widget, Advanced → Position **Fixed**, bottom 22 / right 22, circular (radius 50%), bg **#e11d2a**, icon 📞. (Or install a free "Click to Call" / floating WhatsApp plugin.)

---

## 3. Make it reusable for the next client (your agency leverage)

1. Build Home once, polished.
2. **Elementor Pro:** top-left hamburger → **Templates → Save as Template** (save each section, or the whole page).
3. Better — export a **Template Kit**: WP Admin → **Elementor → Tools → (or) Templates → Kit Library → Export**. This bundles your design, global colors, fonts, and templates into one `.zip`.
4. **New client:** spin up WP on Hostinger → import the kit → swap text, photos, colors (one global color change re-themes everything), phone numbers, and map. A new site = half a day.

---

## 4. Client handoff (the no-code part)

Tell the client: **edit any page → "Edit with Elementor" → click the text/phone/price you want to change → type → Update.** No code, no re-upload. For text-only tweaks they can even use the WordPress block editor.

Optionally lock the layout: with Elementor Pro + a role manager, give the client an **Editor** role so they can change content but not break the structure.

---

## 5. Quick reference — the exact style values

```
Accent red ........ #e11d2a      Accent dark ....... #b3121d
Page black ........ #0b0b0d      Charcoal section .. #121216
Card surface ...... #1c1c22      Border ............ #2c2c34
Heading text ...... #ffffff      Muted text ........ #a8a8b3
Radius (cards) .... 14px         Radius (buttons) .. 9px
Section padding ... 96px top/bottom (68px on mobile)
Content width ..... 1180px       Heading font ...... Sora 700/800
Body font ......... Inter        Button hover ...... translateY(-3px)
Card hover ........ translateY(-6px) + red border/top-bar
```
