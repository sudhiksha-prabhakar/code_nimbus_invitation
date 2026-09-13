# Rahul & Ramya — Engagement Invitation (React Clone)

A React + Vite recreation of the Invitation Nation engagement-invitation
site (https://eng004-livedemo.invitationnation.in/).

## Flow

1. **Cover page** — the "A special invitation awaits you" splash screen
   with the bride/groom illustrations and an "Open Invite" button.
   Clicking it plays a fade/scale transition and reveals the site.
2. **Home** — hero, live countdown, Bride & Groom intro, wishes
   carousel, schedule timeline, venue, footer.
3. **About** — Our Story (quote card + milestone carousel), Meet the
   Families (working Bride/Groom photo toggle), footer.
4. **Gallery** — album page with a working Upload button (client-side)
   and pagination, footer.

Home/About/Gallery are separate pages switched via the navbar (matching
the real site's behavior), not one long scroll.

## Animations

- Cover page: staggered fade/slide-in for each line of text, floating
  idle motion on the bride/groom illustrations, hover lift on the
  "Open Invite" button, fade+scale transition into the site on click.
- Every section on every page fades/slides up into view on scroll
  (IntersectionObserver-based, see `src/components/Reveal.jsx`).
- Hover feedback (scale/lift) on all buttons and carousel controls.
- Gentle pulse animation on the heart dividers.

## Functional pieces

- Live countdown to 28 Nov 2026
- Wishes carousel (prev/next)
- Milestone carousel on the About page
- Bride/Groom family-photo toggle
- Gallery upload + pagination (fully client-side)
- Floating call button (tel: link) and a music toggle that plays/pauses
  a bundled placeholder ambient loop (the original track wasn't
  recoverable, so this is a generated stand-in — swap
  `src/assets/bg-music.mp3` for the real track if you have it)

## Run it locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub
Pages) for the hosted link.

## Known honest gaps vs. the original

- Decorative floral corners/leaf branches on the Home/About/Venue
  sections are original SVG recreations in the same palette, not
  extracted assets. The cover page's floral corners and bride/groom
  illustrations ARE extracted directly from your screenshot, so those
  are pixel-accurate.
- The background music is a placeholder loop, not the real track.
