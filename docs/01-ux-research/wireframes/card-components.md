# Card Components - UX Research & Design System

## Overview
Comprehensive card component library designed for Lemonoid's dual-view interface, optimized for quick scanning and actionable insights for busy business owners.

## Card Design Principles

### Information Hierarchy
1. **Primary Metric**: Large, prominent display (revenue, rating, trend)
2. **Context**: Supporting information and timeframe
3. **Insight**: Key takeaway or pattern identification
4. **Action**: Clear next step or CTA button

### Visual Consistency
- **Dimensions**: Consistent aspect ratios across card types
- **Spacing**: Uniform padding and margin system
- **Typography**: Clear hierarchy with scannable information
- **Color Coding**: Status-based color system for quick recognition

## Core Card Types

### 1. Revenue Opportunity Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 💰 Revenue Opportunity              │
│                                     │
│ +$2,400                             │
│ per month                           │
│                                     │
│ Fix service speed issues mentioned  │
│ in 23% of reviews                   │
│                                     │
│ Impact: High  │  Effort: Medium     │
│                                     │
│ [View Details] ──────────────────→  │
└─────────────────────────────────────┘
```

#### Mobile Version (160px × 140px)
```
┌─────────────────────┐
│ 💰 Revenue Opp      │
│                     │
│ +$2,400/mo          │
│                     │
│ Fix service speed   │
│ (23% of reviews)    │
│                     │
│ [Details] ────────→ │
└─────────────────────┘
```

**Component Specifications**:
- **Background**: White with subtle shadow
- **Border**: 1px solid #E5E7EB, border-radius: 12px
- **Hover State**: Shadow elevation, border color change
- **Status Indicator**: Revenue amount in primary green
- **Action Button**: Secondary style, right-aligned

### 2. Satisfaction Score Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 📊 Customer Satisfaction            │
│                                     │
│ 4.2 ⭐⭐⭐⭐⭐                      │
│ +0.3 from last month ↗              │
│                                     │
│ Trending upward                     │
│ • Food quality improved             │
│ • Service response faster           │
│                                     │
│ Goal: 4.5 ⭐ (87% progress)          │
│                                     │
│ [See Trends] ────────────────────→  │
└─────────────────────────────────────┘
```

#### Mobile Version (160px × 140px)
```
┌─────────────────────┐
│ 📊 Satisfaction     │
│                     │
│ 4.2 ⭐ +0.3 ↗       │
│                     │
│ Trending up         │
│ Goal: 87%           │
│                     │
│ [Trends] ────────→  │
└─────────────────────┘
```

**Component Specifications**:
- **Rating Display**: Large star visualization with numeric value
- **Trend Indicator**: Arrow with percentage change
- **Progress Bar**: Visual goal progress indicator
- **Color Coding**: Green (positive), Yellow (neutral), Red (negative)

### 3. Competitor Analysis Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 🎯 vs Competitors                   │
│                                     │
│ Your Rating: 4.2 ⭐                 │
│ Market Average: 3.8 ⭐              │
│ Position: +10% above average        │
│                                     │
│ Opportunity Areas:                  │
│ • Atmosphere (competitor strength)  │
│ • Menu variety (gap identified)     │
│                                     │
│ [Full Analysis] ─────────────────→  │
└─────────────────────────────────────┘
```

#### Mobile Version (160px × 140px)
```
┌─────────────────────┐
│ 🎯 vs Competitors   │
│                     │
│ You: 4.2 ⭐         │
│ Avg: 3.8 ⭐ (+10%)  │
│                     │
│ Gap: Atmosphere     │
│                     │
│ [Analysis] ──────→  │
└─────────────────────┘
```

**Component Specifications**:
- **Comparison Layout**: Your rating vs. market benchmarks
- **Percentage Indicator**: Performance relative to competition
- **Opportunity List**: Prioritized improvement areas
- **Status Badge**: Above/Below average indicator

### 4. Top Issues Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ ⚠️ Top Issues (Last 30 days)        │
│                                     │
│ 1. Service Speed      23% ████████  │
│ 2. Wait Times         18% ██████    │
│ 3. Food Temperature   12% ████      │
│ 4. Menu Selection     8%  ██        │
│                                     │
│ Total Impact: 61% of complaints     │
│ Est. Revenue Impact: -$1,200/mo     │
│                                     │
│ [Prioritize Actions] ────────────→  │
└─────────────────────────────────────┘
```

#### Mobile Version (160px × 140px)
```
┌─────────────────────┐
│ ⚠️ Top Issues       │
│                     │
│ 1. Service (23%)    │
│ 2. Wait time (18%)  │
│ 3. Food temp (12%)  │
│                     │
│ Impact: -$1,200/mo  │
│                     │
│ [Prioritize] ────→  │
└─────────────────────┘
```

**Component Specifications**:
- **Issue Ranking**: Numbered list with percentage impact
- **Progress Bars**: Visual representation of issue frequency
- **Revenue Impact**: Quantified business impact
- **Urgency Indicator**: Color-coded by severity

### 5. Recent Reviews Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 💬 Recent Reviews                   │
│                                     │
│ "Great food but service was slow"   │
│ ⭐⭐⭐⭐ Sarah M. • 2 hours ago     │
│ Google Reviews                      │
│                                     │
│ "Loved the atmosphere!"             │
│ ⭐⭐⭐⭐⭐ Mike R. • 4 hours ago    │
│ Yelp                                │
│                                     │
│ [View All 23 Reviews] ───────────→  │
└─────────────────────────────────────┘
```

#### Mobile Version (160px × 140px)
```
┌─────────────────────┐
│ 💬 Recent Reviews   │
│                     │
│ "Great food but..." │
│ ⭐⭐⭐⭐ 2h ago      │
│                     │
│ "Loved atmosphere!" │
│ ⭐⭐⭐⭐⭐ 4h ago     │
│                     │
│ [View All] ──────→  │
└─────────────────────┘
```

**Component Specifications**:
- **Review Snippet**: Truncated review text with expand option
- **Rating Display**: Star rating with reviewer name
- **Timestamp**: Relative time display
- **Source Badge**: Platform indicator (Google, Yelp, etc.)

### 6. Team Tasks Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 👥 Team Tasks                       │
│                                     │
│ 3 pending actions                   │
│ 2 assigned to you                   │
│                                     │
│ Next Priority:                      │
│ Update menu descriptions            │
│ Due: Tomorrow                       │
│ Assigned: Sarah K.                  │
│                                     │
│ Progress: 60% tasks completed       │
│                                     │
│ [Manage Tasks] ──────────────────→  │
└─────────────────────────────────────┘
```

#### Mobile Version (160px × 140px)
```
┌─────────────────────┐
│ 👥 Team Tasks       │
│                     │
│ 3 pending           │
│ 2 yours             │
│                     │
│ Next: Update menu   │
│ Due: Tomorrow       │
│                     │
│ [Manage] ────────→  │
└─────────────────────┘
```

**Component Specifications**:
- **Task Counter**: Pending and assigned task counts
- **Next Priority**: Highlighted urgent task
- **Progress Indicator**: Completion percentage
- **Assignment Info**: Team member responsibility

## Specialized Cards

### 7. Trend Alert Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 🚨 Trend Alert                      │
│                                     │
│ Food Quality Rating Declining       │
│ -0.4 stars in past 2 weeks ↓       │
│                                     │
│ Pattern Detected:                   │
│ • 15 mentions of "cold food"        │
│ • Peak times: 6-8 PM               │
│ • Weekend impact: -0.6 stars       │
│                                     │
│ [Investigate] ───────────────────→  │
└─────────────────────────────────────┘
```

**Component Specifications**:
- **Alert Status**: Critical, warning, or informational
- **Trend Direction**: Visual indicator with numeric change
- **Pattern Analysis**: Key insights and correlations
- **Urgency Level**: Color-coded border and background

### 8. Action Items Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ ✅ High-ROI Actions                 │
│                                     │
│ 5 recommended actions               │
│ Est. impact: +$3,200/month          │
│                                     │
│ Top Priority:                       │
│ 1. Train staff on service speed     │
│    Impact: +$1,400  Effort: Medium  │
│                                     │
│ 2. Update menu descriptions         │
│    Impact: +$800   Effort: Low      │
│                                     │
│ [Execute Plan] ──────────────────→  │
└─────────────────────────────────────┘
```

**Component Specifications**:
- **Impact Metrics**: Revenue potential per action
- **Priority Ranking**: AI-ranked improvement suggestions
- **Effort Assessment**: Implementation difficulty
- **ROI Calculator**: Return on investment estimates

### 9. Performance Summary Card

#### Desktop Version (280px × 200px)
```
┌─────────────────────────────────────┐
│ 📈 This Month's Performance         │
│                                     │
│ Overall Rating: 4.2 ⭐ (+0.1)       │
│ Review Volume: 87 (+23%)            │
│ Response Rate: 95% (+5%)            │
│                                     │
│ Key Wins:                           │
│ • Service rating improved to 4.3    │
│ • 15% increase in positive mentions │
│                                     │
│ [Full Report] ───────────────────→  │
└─────────────────────────────────────┘
```

**Component Specifications**:
- **Metric Summary**: Key performance indicators
- **Change Indicators**: Month-over-month comparisons
- **Achievement Highlights**: Notable improvements
- **Report Access**: Detailed analytics link

## Card Interaction Patterns

### Hover States
- **Elevation Change**: 2px → 8px shadow
- **Border Highlight**: Gray → Primary color
- **Scale Effect**: 1.0 → 1.02 transform
- **Transition**: 200ms ease-out

### Click Actions
- **Expand Modal**: Detailed view overlay
- **Navigate**: Direct link to feature page
- **Quick Action**: Inline button actions
- **Mark Complete**: Task completion toggle

### Loading States
```
┌─────────────────────────────────────┐
│ [Card Icon] Card Title              │
│                                     │
│ ▒▒▒▒▒▒▒▒▒▒▒▒                       │
│ ▒▒▒▒▒▒▒▒                           │
│                                     │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒               │
│ ▒▒▒▒▒▒▒▒▒▒▒▒                       │
│                                     │
│ [Loading...] ────────────────────→  │
└─────────────────────────────────────┘
```

### Error States
```
┌─────────────────────────────────────┐
│ ⚠️ Unable to Load Data              │
│                                     │
│ Connection error or data            │
│ temporarily unavailable             │
│                                     │
│ [Retry] ─────────────────────────→  │
└─────────────────────────────────────┘
```

## Responsive Design System

### Breakpoint Strategy
- **Mobile (320-768px)**: Single column, stacked cards
- **Tablet (769-1024px)**: 2-column grid layout
- **Desktop (1025px+)**: 3-column grid layout
- **Large (1440px+)**: 4-column grid with larger cards

### Card Sizing
- **Mobile**: 160px × 140px (compact view)
- **Tablet**: 220px × 180px (balanced view)
- **Desktop**: 280px × 200px (detailed view)
- **Large**: 320px × 220px (expansive view)

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: 4.5:1 minimum for all text
- **Focus Indicators**: Clear keyboard navigation
- **Screen Reader**: Proper ARIA labels and descriptions
- **Touch Targets**: Minimum 44px for interactive elements

### Semantic HTML Structure
```html
<article class="card revenue-opportunity" role="button" tabindex="0">
  <header class="card-header">
    <h3 class="card-title">Revenue Opportunity</h3>
    <span class="card-icon" aria-hidden="true">💰</span>
  </header>
  <div class="card-content">
    <div class="metric-primary">+$2,400/month</div>
    <p class="metric-description">Fix service speed issues mentioned in 23% of reviews</p>
  </div>
  <footer class="card-actions">
    <button class="btn-secondary">View Details</button>
  </footer>
</article>
```

## Performance Optimization

### Loading Strategy
- **Progressive Enhancement**: Basic content first
- **Image Lazy Loading**: Chart and visual elements
- **Data Virtualization**: Large datasets (500+ cards)
- **Skeleton Placeholders**: Immediate visual feedback

### Animation Performance
- **CSS Transforms**: Hardware acceleration for hover effects
- **Reduced Motion**: Respect user preferences
- **60fps Target**: Smooth interactions on all devices
- **Battery Awareness**: Reduced animations on mobile

This comprehensive card component system provides the foundation for Lemonoid's dual-view interface, ensuring consistent user experience while maximizing information density and actionable insights for business owners.