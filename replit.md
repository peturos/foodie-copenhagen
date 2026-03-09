# Foodie Copenhagen - Restaurant Website Redesign

## Overview
A modern, conversion-focused restaurant website for Foodie Copenhagen, a premium sandwich takeaway located at Amagerbrogade 13, København S. Built as a React SPA with Express backend.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + Shadcn UI
- **Backend**: Express.js (serves frontend, no database needed)
- **Routing**: Wouter for client-side routing

## Pages
- **/** - Home: Hero, bestsellers, why foodie, bread story, menu preview, local trust, final CTA
- **/menu** - Visual menu with category tabs (Sandwiches, Plates, Sides & Dips, Desserts, Drinks)
- **/about** - Story, philosophy, sourdough bread narrative, values
- **/find-us** - Map, address, hours, phone, getting here info
- **/catering** - Office lunch and catering options with pricing
- **/gallery** - Masonry grid of food photography with lightbox
- **/jobs** - Simple job application page (footer-linked)

## Design System
- **Fonts**: DM Sans (body), Playfair Display (headings/serif)
- **Colors**: Warm off-white background, charcoal/deep olive accents, primary amber/brown
- **Style**: Clean, modern Copenhagen takeaway brand aesthetic

## Business Info (Source of Truth)
- Address: Amagerbrogade 13, København S, 2300 København
- Phone: +45 3020 5656
- Hours: Mon-Fri 11:00-18:00, Sat 11:30-15:00, Sun Closed
- Order: https://foodie-cph.dk

## Key Features
- Sticky mobile order button
- Responsive navigation with mobile sheet menu
- Top info bar with address and phone
- Food photography throughout
- Dietary tags (V/VG/GF) on menu items
- Google Maps embed on Find Us page
- Lightbox gallery
