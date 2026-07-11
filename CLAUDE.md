# La Belle SPA Website

## Architecture
- Plain HTML + CSS static site (same pattern as smartkteam-website)
- No framework, no build process, no node_modules
- Deploy to Vercel with `cleanUrls: true` → `page.html` serves at `/page`
- **Always use relative paths**: `./styles.css` and `./app.js` (not `/styles.css`)
- Contact form: `api/contact.js` (Vercel serverless, uses Resend)

## Design System
- **Purple** `#4A3558` — primary brand color: buttons, CTAs, sidebar cards, pricing headers
- **Gold** `#C9A96E` — warm accent: tags, dividers, price highlights, hover states
- **Cream** `#FAF7F4` — page background
- **Espresso** `#1C1410` — body text, footer
- Fonts: Playfair Display (headings, serif) + Inter (body, sans)
- Buttons: pill-shaped (`border-radius: 3rem`)
- Shared CSS in `./styles.css` — do not duplicate styles inline

## Business Info
- Address: 18820 Aurora Ave N STE 206, Shoreline, WA 98133
- Phone: 425-329-9520
- Email: labelle.shoreline@gmail.com
- Booking: https://book.squareup.com/appointments/5k17aeyyrlwz4f/location/LQPD2HSNFKYG0/services
- Gift cards: https://app.squareup.com/gift/MLQZPRC4FJ8HA/order
- Insurance: Premera Blue Cross in-network
- Facebook: https://www.facebook.com/profile.php?id=61574296329271
- Instagram: https://www.instagram.com/la.belle.spa.shoreline/
- TikTok: https://www.tiktok.com/@labellespa

## Site Map (21 pages — all must preserve exact URLs for SEO)
| URL | File |
|-----|------|
| `/` | index.html |
| `/swedishmassage` | swedishmassage.html |
| `/deeptissue-massage` | deeptissue-massage.html |
| `/aromatherapy-massage` | aromatherapy-massage.html |
| `/detox-massage` | detox-massage.html |
| `/pain-relief-massage` | pain-relief-massage.html |
| `/four-hands-massage` | four-hands-massage.html |
| `/couple-massage` | couple-massage.html |
| `/about-1` | about-1.html (Lomi Lomi) |
| `/urban-massage` | urban-massage.html (Urban Facial) |
| `/deep-cleaning-facial` | deep-cleaning-facial.html |
| `/hydrating-facial` | hydrating-facial.html |
| `/luxury-facial` | luxury-facial.html |
| `/back-facial` | back-facial.html |
| `/insurance-massage-shoreline` | insurance-massage-shoreline.html |
| `/shoreline-best-massage` | shoreline-best-massage.html (About) |
| `/shorelinemassage` | shorelinemassage.html (Massage Pricing) |
| `/best-facial-treatment-in-shoreline` | best-facial-treatment-in-shoreline.html (Facial Pricing) |
| `/professional-massage-shoreline` | professional-massage-shoreline.html (Blog listing) |
| `/massage-training` | massage-training.html |
| `/eyelash-training` | eyelash-training.html |

## Rules
- Never build pages without showing the sitemap and getting approval first
- Blog = single listing page only — no individual post pages
- Never spawn agents for page generation (token waste)
- Images are on Wix CDN (static.wixstatic.com) — user must download before canceling Wix
- Domain is registered through Wix — must transfer before canceling Wix subscription

## Next Steps (when ready to deploy)
1. `git init` and push to GitHub
2. Connect GitHub repo to Vercel
3. Transfer domain from Wix to Cloudflare (or another registrar)
4. Point DNS to Vercel
5. Add `RESEND_API_KEY` environment variable in Vercel for contact form
6. Download all images from Wix CDN before canceling subscription
7. Cancel Wix LAST (after domain transfer + new site is live)
