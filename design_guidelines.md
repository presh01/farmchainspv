# Cattle Ranch Cooperative Platform - Design Guidelines

## Design Approach
**Reference-Based**: Fintech onboarding flows (Kuda Bank, Paystack) with clear progression indicators and trust-building elements. This application prioritizes clarity, trust, and guided user flows over visual experimentation.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Primary Green: #228B22 (forest green) - Main CTAs, active states, success indicators
- Secondary Gold: #DAA520 (golden rod) - Accent elements, highlights, premium features
- Background: #F8F9FA (light grey) - Page backgrounds, card containers
- Text Primary: #2C3E50 (dark grey) - Body text, headings

**Feedback Colors:**
- Success: #28A745 - Approved applications, passed eligibility
- Error: #DC3545 - Failed eligibility, validation errors
- Warning: #FFC107 - Informational alerts, pending reviews

**Dark Mode**: Not required for this application (financial/administrative focus)

### Typography
**Font Stack**: Inter (primary) / Lato (fallback) via Google Fonts
- Headings: Inter, 600-700 weight, sizes: 2xl-4xl
- Body: Inter, 400 weight, size: base-lg
- Labels/Captions: Inter, 500 weight, size: sm
- Numbers/Figures: Inter, 600 weight (tabular-nums for financial data)

### Layout System
**Spacing**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-12 md:py-20
- Card padding: p-6 md:p-8
- Form spacing: gap-6 between fields
- Component gaps: gap-4 standard, gap-8 for larger separations

**Container Strategy:**
- Max-width: max-w-6xl for main content areas
- Forms: max-w-2xl centered for focus
- Dashboard: max-w-7xl for data tables
- Cards: Full width within containers with responsive grid

### Component Library

**Forms & Input Fields:**
- Multi-step forms with prominent progress indicators (numbered circles or bar)
- Input fields: Rounded borders (rounded-lg), generous padding (px-4 py-3), clear labels above fields
- Validation: Inline error messages below fields with error icon
- Required fields: Asterisk notation with helper text
- Nigerian phone format: +234 prefix auto-populated
- BVN input: Masked input with privacy consideration
- Save-for-later: Sticky button at bottom with clear "Resume Application" messaging

**Cards:**
- Elevated cards: shadow-md with rounded-xl borders
- Pricing cards: Border highlighting for selected option, checkmark indicators
- Application cards (admin): Status badge, applicant preview, quick action buttons
- Hover states: Subtle lift (translate-y-1) with increased shadow

**Navigation:**
- Top navigation: Logo left, admin/user menu right, transparent on light background
- Progress indicators: Horizontal stepper with completed/current/upcoming states
- Breadcrumbs: For admin dashboard navigation
- Mobile: Hamburger menu with slide-out drawer

**Buttons:**
- Primary: Forest green background, white text, rounded-lg, px-8 py-3
- Secondary: White background, green border and text, same padding
- Outline on images: Backdrop blur with white/transparent background
- Sizes: Regular (form CTAs), Large (hero sections), Small (inline actions)

**Data Display:**
- Tables: Alternating row colors, sticky headers for admin views
- Status badges: Colored pills (rounded-full) - green (approved), amber (pending), red (rejected)
- Financial figures: Prominent display with naira symbol (₦), thousand separators
- Eligibility results: Large checkmark/cross icon with clear messaging

**Overlays:**
- Modals: Centered, max-w-lg, backdrop blur, for confirmations and quick actions
- Alerts: Toast notifications top-right for success/error messages
- Loading states: Spinner with "Processing..." text for eligibility calculations

## Page-Specific Guidelines

### Landing/Marketing Pages
**Hero Section:** Full-width image of cattle ranch operations with overlay gradient (green to transparent). Headline emphasizes cooperative membership benefits, dual CTAs (Start Application / Learn More).

**Trust Indicators:** Display member count, success stories, registration/licensing information prominently below hero.

**How It Works:** 3-column grid explaining eligibility → application → membership with icons and brief descriptions.

**Pricing Options:** Side-by-side comparison cards for Outright Purchase vs Financing, highlighting monthly commitment and total cost.

### Eligibility Test Flow
**Lead Capture:** Clean form with 3-4 fields (name, email, phone), privacy assurance text, green CTA button.

**Purchase Option Selection:** Large radio card selectors with visual distinction, financial breakdown displayed dynamically.

**Income Calculator:** Clear input field with helper text showing minimum requirement, real-time validation with color-coded feedback.

**Results Page:** Large visual indicator (success/failure), next steps clearly outlined, contact information prominent for failed applicants.

### Membership Application
**Progress Bar:** Always visible at top showing current step of 4-5 total steps.

**Form Sections:** One section visible at a time, previous data preserved, "Save & Continue Later" button always accessible.

**Field Organization:** Logical grouping with section headings, responsive 2-column layout on desktop for related fields.

### Admin Dashboard
**Overview Cards:** Key metrics at top (pending applications, total members, approval rate) with icon + number display.

**Application Table:** Sortable columns, filter by status, search functionality, action buttons inline.

**Detail View:** Modal or side panel with full application data, action buttons for approve/reject with confirmation.

## Images
**Hero Image:** Wide shot of healthy cattle in pasture with ranch facilities visible, creates trust and authenticity. Position: Full-width background with text overlay.

**Trust Section:** Small profile photos for testimonials or team members if included.

**How It Works Icons:** Use Heroicons for process step illustrations (no custom images needed).

## Animations
Use sparingly - only for:
- Progress indicator transitions between steps
- Success/error message appearances (fade-in)
- Loading spinners during eligibility calculation
- No parallax or scroll-triggered animations