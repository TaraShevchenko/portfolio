# Taras Shevchenko — Portfolio

A responsive React portfolio with the layout and visual direction of the supplied Ayman Ismail reference: Onest typography, a persistent profile sidebar, dark and light themes, and compact technology filters. Content is Taras's own, based on the supplied 2026 resume and LinkedIn address.

## Development

Requires Node.js 22.12+.

```sh
npm ci
npm start
```

```sh
npm run build
npm run preview
```

The production output is `build/`. Configure static hosts to serve `index.html` for client routes. Netlify (`public/_redirects`) and Vercel (`vercel.json`) fallbacks are included. `/portfolio` redirects to `/projects`.

## Content

- `src/data.js`: profile links, skills, experience, and the empty `projects` collection.
- `src/copy.js`: English and Ukrainian copy.
- `src/assets/Resume.pdf`: the supplied 2026 full-stack resume.
- `src/assets/MyPhoto1.jpg`: original profile photo.
- `public/skills/`: locally bundled brand icons, generated from Simple Icons.

To publish new work, add records to `projects` with `slug`, `title`, `description: { en, uk }`, `tags`, `image`, `url`, and optional `source`. Place screenshots in `public/projects/`. Cards render automatically. The previous three demo projects and their screenshots have been removed.

Theme and language preferences persist locally. The profile photo opens in a native accessible dialog; Escape closes it. Navigation, skill filters, career disclosures, contact links, copy-email, and CV download all work without a backend. No contact form pretends to send a message.

## Content sources

Experience and technical skills: owner's Full-Stack and Frontend CVs, 2026. Education and AI integrations: supplied LinkedIn profile. Contact link: https://www.linkedin.com/in/taras-shevchenko-full-stack/ . No unverified education, awards, testimonials, or new project claims have been added.

## Animation system

Motion powers spring-based navigation and skill layout transitions, staggered reveals, perspective cards with pointer highlights, a flipping profile card, and animated career disclosures. The home grid uses opposing skill marquees, a floating code workbench, a pulsing career timeline, breathing decorative bars, and expanding contact signal rings. Decorative project windows are placeholders, not portfolio entries. CSS and Motion honor prefers-reduced-motion. The profile card also has a keyboard-accessible flip button.
