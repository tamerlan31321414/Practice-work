# IT Processes & Functionalities — Website

## Folder Structure

```
itpf-website-v2/
│
├── index.html                  ← Main page (all sections)
│
├── assets/
│   ├── css/
│   │   ├── main.css            ← Design tokens, reset, buttons, utilities
│   │   ├── navbar.css          ← Navigation bar + language switcher + burger
│   │   ├── hero.css            ← Hero section + stats bar + floating cards
│   │   ├── sections.css        ← About · Services · FAQ
│   │   ├── contact.css         ← Contact form + info column
│   │   └── footer.css          ← Footer
│   │
│   ├── js/
│   │   ├── i18n.js             ← All translations (EN / RU / KZ) + applyLanguage()
│   │   ├── navbar.js           ← Sticky nav, burger menu, active link highlight
│   │   ├── faq.js              ← FAQ accordion
│   │   ├── form.js             ← Contact form → Formspree email delivery
│   │   ├── animations.js       ← Scroll-reveal + smooth scroll
│   │   └── main.js             ← Entry point: initialises all modules
│   │
│   └── images/
│       └── company-logo.png    ← ⬅ REPLACE with your logo file
│
└── README.md
```

---

## Quick Start

1. Put all files on a web server (or just open `index.html` locally in Chrome).
2. Replace `assets/images/company-logo.png` with your actual logo.
3. Set up the contact form (see below).

---

## Contact Form Setup (Formspree — free)

The form sends submissions to your email via **Formspree**.

**Steps:**
1. Go to [https://formspree.io](https://formspree.io) and sign up (free).
2. Click **"+ New Form"** → give it a name → copy the **Form ID** (e.g. `xyzabcde`).
3. Open `index.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/xyzabcde"
   ```
5. Save. Now every form submission will arrive in your email inbox instantly.

**Free plan:** 50 submissions/month. Upgrade for more.

---

## Customise Content

### Company name
Search `IT P&F` / `IT Processes & Functionalities` in `index.html` and replace.
Update `about_title` in `assets/js/i18n.js` for all 3 languages.

### Contact info
In `index.html`, find the `contact-details` block and update address, phone, email.

### Colors
Edit `:root` in `assets/css/main.css`:
- `--accent`  → main blue  (#4F7FFF)
- `--accent2` → teal       (#00D4AA)
- `--bg`      → background (#0A0E1A)

### Add a service
Copy any `<div class="service-card">` in `index.html`, add a new key pair in all 3 language objects in `assets/js/i18n.js`.

### Add a language
Add a new language block in `TRANSLATIONS` in `assets/js/i18n.js`, add a button in `index.html`:
```html
<button class="lang-btn" data-lang="xx">XX</button>
```