# claude.md - SaaS Landing Page Development Context

## Project Overview
You are building a high-converting SaaS landing page using vanilla HTML, CSS, and jQuery with modern libraries. The goal is to create a stunning, performant landing page that converts visitors into customers while being easily maintainable and fast to deploy.

## Tech Stack & Libraries

### Core Technologies
- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern features, animations, grid/flexbox
- **jQuery 3.7+**: DOM manipulation, animations, AJAX
- **Vanilla JavaScript**: Performance-critical interactions

### CSS Frameworks & Libraries
```html
<!-- Tailwind CSS via CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Tailwind UI Headless Components (via CDN) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@headlessui/tailwindcss@0.0.0/dist/headless.min.css">

<!-- Animate.css for entrance animations -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<!-- AOS (Animate On Scroll) -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Lottie for micro-animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
```

### Icon Libraries
```html
<!-- Heroicons (Tailwind's icon set) -->
<script src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/index.js"></script>

<!-- Lucide Icons (shadcn/ui compatible) -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

### Utility Libraries
```html
<!-- GSAP for complex animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Intersection Observer API polyfill -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>

<!-- Swiper.js for carousels/sliders -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

## Landing Page Architecture

### Required Sections
1. **Hero Section**: Value proposition, main CTA, hero image/video
2. **Problem/Solution**: Pain points and how your SaaS solves them
3. **Features**: Key functionality with screenshots/demos
4. **Social Proof**: Testimonials, logos, user count
5. **Pricing**: Clear tiers with comparison table
6. **FAQ**: Address common objections
7. **Final CTA**: Strong conversion-focused section
8. **Footer**: Links, contact, legal

### File Structure
```
/landing-page
├── index.html           # Main landing page
├── css/
│   ├── main.css        # Custom styles
│   └── components.css  # Reusable components
├── js/
│   ├── main.js         # Core functionality
│   ├── animations.js   # Animation logic
│   └── forms.js        # Form handling
├── assets/
│   ├── images/         # Screenshots, logos, hero images
│   ├── videos/         # Demo videos, background videos
│   └── lottie/         # Lottie animation files
└── claude.md           # This context file
```

## Design System (Tailwind-based)

### Color Palette
```css
/* Primary Brand Colors */
--primary-50: #eff6ff;
--primary-500: #3b82f6;    /* Main brand color */
--primary-600: #2563eb;    /* Hover states */
--primary-700: #1d4ed8;    /* Active states */

/* Accent Colors */
--accent-400: #34d399;     /* Success/positive */
--accent-500: #10b981;     /* Success darker */

/* Neutral Grays */
--gray-50: #f9fafb;        /* Light backgrounds */
--gray-100: #f3f4f6;       /* Card backgrounds */
--gray-900: #111827;       /* Dark text */
```

### Typography Scale
```css
/* Using Tailwind classes */
.text-display    { @apply text-5xl lg:text-7xl font-bold; }
.text-hero       { @apply text-4xl lg:text-6xl font-bold; }
.text-heading    { @apply text-3xl lg:text-4xl font-bold; }
.text-subheading { @apply text-xl lg:text-2xl font-semibold; }
.text-body       { @apply text-base lg:text-lg; }
.text-small      { @apply text-sm; }
```

### Component Patterns
```css
/* Buttons */
.btn-primary { @apply bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105; }
.btn-secondary { @apply bg-white hover:bg-gray-50 text-primary-500 border-2 border-primary-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200; }
.btn-ghost { @apply bg-transparent hover:bg-primary-50 text-primary-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200; }

/* Cards */
.card { @apply bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6; }
.card-feature { @apply bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-primary-200 transition-all duration-300 p-8; }

/* Gradients */
.gradient-hero { @apply bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700; }
.gradient-accent { @apply bg-gradient-to-r from-primary-500 to-accent-500; }
```

## Animation Guidelines

### Page Load Sequence
1. **Hero elements**: Fade in from bottom (0.6s delay)
2. **Navigation**: Slide down from top (0.3s delay)
3. **CTA buttons**: Scale in with bounce (0.9s delay)
4. **Background elements**: Fade in subtly (1.2s delay)

### Scroll Animations (AOS)
```html
<!-- Example usage -->
<div data-aos="fade-up" data-aos-delay="100">Content</div>
<div data-aos="zoom-in" data-aos-delay="200">Content</div>
<div data-aos="slide-left" data-aos-delay="300">Content</div>
```

### Hover Interactions
- **Buttons**: Scale 1.05, add glow shadow
- **Cards**: Lift shadow, subtle scale 1.02
- **Images**: Slight zoom 1.1 with overlay
- **Links**: Color transition with underline animation

## Conversion Optimization

### CTA Best Practices
- **Primary CTA**: "Start Free Trial" / "Get Started Free"
- **Secondary CTA**: "Watch Demo" / "See How It Works"
- **Colors**: Use primary brand color, ensure contrast
- **Placement**: Above fold, after features, bottom of page
- **Size**: Minimum 44px height for mobile touch targets

### Trust Signals
- Customer logos (grayscale with color on hover)
- User testimonials with photos and titles
- Security badges (SSL, SOC2, GDPR)
- Money-back guarantee
- User count / social proof numbers

### Mobile-First Approach
```css
/* Default mobile styles, then scale up */
.hero-section {
  @apply px-4 py-12;
}

@media (min-width: 768px) {
  .hero-section {
    @apply px-8 py-20;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    @apply px-12 py-32;
  }
}
```

## Performance Requirements

### Loading Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### Optimization Strategies
- Lazy load images below the fold
- Preload critical resources
- Minify CSS/JS
- Use WebP images with fallbacks
- Implement critical CSS inlining

## Form Handling

### Lead Capture Forms
```html
<!-- Example structure -->
<form class="space-y-4" id="lead-form">
  <input type="email" placeholder="Enter your email" required 
         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
  <button type="submit" class="btn-primary w-full">
    <span class="button-text">Start Free Trial</span>
    <span class="loading-spinner hidden">...</span>
  </button>
</form>
```

### Validation & UX
- Real-time email validation
- Clear error messages
- Success states with confirmation
- Loading states during submission
- Progressive enhancement (works without JS)

## Analytics & Tracking

### Events to Track
- **Page Views**: Landing page visits
- **CTA Clicks**: Button interactions
- **Form Submissions**: Lead captures
- **Scroll Depth**: Engagement measurement
- **Time on Page**: Interest indication
- **Video Plays**: Demo engagement

### Implementation
```javascript
// Google Analytics 4 example
gtag('event', 'cta_click', {
  'event_category': 'engagement',
  'event_label': 'hero_cta',
  'value': 1
});
```

## Accessibility Standards

### WCAG 2.1 AA Compliance
- Color contrast ratio 4.5:1 minimum
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images
- Proper heading hierarchy (h1 → h2 → h3)
- Focus indicators for interactive elements

### Implementation Checklist
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Skip links for keyboard users
- [ ] Reduced motion respect
- [ ] High contrast mode support
- [ ] Touch target minimum 44px

## Browser Support

### Minimum Requirements
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced animations with JS support
- Fallbacks for older browsers
- Graceful degradation approach

## Development Workflow

### Daily Development Process
1. **Start with mobile design**: Build mobile-first
2. **Test on real devices**: Use device testing
3. **Performance audit**: Check Core Web Vitals
4. **Accessibility check**: Validate with tools
5. **Cross-browser test**: Ensure compatibility

### Deployment Checklist
- [ ] Minify CSS/JS files
- [ ] Optimize image sizes
- [ ] Test form submissions
- [ ] Verify analytics tracking
- [ ] Check all links work
- [ ] Validate HTML/CSS
- [ ] Test page speed
- [ ] Mobile responsiveness check

## Agent Integration Points

### UX Research Integration
- User testing feedback implementation
- Conversion funnel optimization
- A/B testing setup for different versions

### UI Design Integration
- Design system component creation
- Visual hierarchy implementation
- Brand consistency maintenance

### Visual Storytelling Integration
- Hero section storytelling
- Feature benefit visualization
- Success story presentation

### Whimsy Injection Integration
- Micro-interaction enhancements
- Delightful loading states
- Playful hover effects
- Easter eggs for engaged users

---

## Quick Start Commands

```bash
# Create basic structure
mkdir landing-page && cd landing-page
mkdir css js assets assets/images assets/videos assets/lottie

# Initialize with basic HTML template
touch index.html css/main.css css/components.css js/main.js js/animations.js js/forms.js
```

This context provides everything Claude Code needs to build a modern, high-converting SaaS landing page using vanilla technologies with modern library support. Focus on performance, conversion optimization, and user experience while maintaining clean, maintainable code.