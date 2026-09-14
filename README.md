# Lukesh Kharkar — Portfolio Website

A single-page portfolio site. Static HTML/CSS/JS — no build step, no framework, no backend required.

## Folder structure

```
portfolio-website/
├── index.html        <- all page content
├── css/style.css      <- all styling
├── js/script.js        <- scroll reveal + contact form logic
└── README.md
```

## 1. Before you deploy — set up the contact form (2 minutes, free)

The contact form needs an endpoint to actually send you an email. This site uses **Formspree** (free tier: 50 submissions/month, no backend needed).

1. Go to https://formspree.io and sign up free.
2. Create a new form. Formspree gives you an endpoint that looks like:
   `https://formspree.io/f/abcd1234`
3. Open `index.html`, find this line near the bottom:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real form ID from Formspree.
5. Save the file.

Until you do this, the form will show an error message when submitted (it won't crash the site, it just won't send).

## 2. Deploy to Vercel (free)

**Option A — no coding, drag and drop:**
1. Go to https://vercel.com and sign up free (you can use your GitHub account).
2. Click "Add New Project" → "Deploy" → drag the whole `portfolio-website` folder in when prompted, or use the "Upload" option.
3. Vercel auto-detects it as a static site. Click Deploy.
4. You'll get a live URL like `lukesh-portfolio.vercel.app` within a minute.

**Option B — via GitHub (recommended, makes future updates easier):**
1. Create a new repository on GitHub (e.g. `portfolio-website`).
2. Upload these files to that repository (or use `git push` if you're comfortable with Git).
3. Go to https://vercel.com → "Add New Project" → "Import Git Repository" → select your repo.
4. Framework Preset: choose **Other** (this is plain HTML, not React/Next.js).
5. Click Deploy.
6. Every time you push a change to GitHub, Vercel automatically redeploys — you don't need to re-upload manually.

Free subdomain (`yourname.vercel.app`) works out of the box — no custom domain needed unless you want one later.

## 3. Updating content later

Everything visible on the site lives in `index.html` — project details, skills, links, bio text. Open it in any text editor, find the section you want to change (it's organized with clear HTML comments and structure matching what you see on the page), edit the text, save, and redeploy (or just `git push` if using Option B).

To add a third project later: copy one of the existing `<div class="project">...</div>` blocks in `index.html`, paste it below the second one, and edit its content.

## 4. What's already handled

- Fully responsive (phone, tablet, desktop)
- Keyboard-accessible (visible focus states on links/buttons/form fields)
- Respects "reduce motion" system setting
- No tracking, no cookies, no external dependencies except Google Fonts and the Formspree form endpoint

## 5. Optional next steps (not required)

- Custom domain: buy one (e.g. from Namecheap/GoDaddy) and connect it in Vercel's project settings → Domains.
- Analytics: if you want visit tracking later, Vercel has a free basic analytics add-on you can enable from the project dashboard — no code changes needed.
