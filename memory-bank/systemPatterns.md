# System Patterns

## Architecture
Based on the HTML files and directory structure, HLQT WASL follows a component-based architecture with clear separation of concerns:

- The `src/website` directory contains main website pages and assets
- The `src/main` directory contains reusable UI components
- Website content is organized in `src/website/web/content` by service category
- Assets are organized into subdirectories (css, js, imgs, icons)

## Content Structure
The project organizes content into hierarchical categories:
- **Top level**: Home page and authentication
- **Second level**: Main service categories (restaurants, hospitals, services, tourism)
- **Third level**: Individual service pages (specific restaurants, hospitals, etc.)

## Component Structure
UI components are organized into discrete folders, each with its own structure, CSS, and JavaScript:
- `navbar`: Navigation components with mobile-responsive hamburger menu
- `cards`: Content display components for service listings
- `footer`: Page footer components with social media links
- `loadingScreen`: Loading indicator with progress bar animation
- `alerts`: User notification components
- `swiper`: Image carousel/slider component for imagery
- `toTopBtn`: Navigation assistance button
- `defaultStyling`: Base styling and themes

## Design Patterns
The application follows these patterns:
- **Component-Based Architecture**: UI elements are modularized for reusability
- **Directory Structure Pattern**: Service categories organized in dedicated folders
- **Card Interface Pattern**: Consistent card-based UI for all service listings
- **Progressive Loading**: Loading screen with progress bar shows loading status
- **Responsive Design**: Mobile-first approach with hamburger menu for small screens
- **Status Indicators**: "Coming Soon" and error state indicators for content
- **Service Details Pattern**: Consistent layout for individual service pages

## Page Structure Pattern
Each service category follows a consistent pattern:
1. Header with navigation
2. Image slider showcasing the category
3. Card-based directory of services/establishments
4. Footer with social links

## Information Architecture
- **Home**: Overview and access to all service categories
- **Restaurants**: Directory of local restaurants with individual detail pages
- **Hospitals**: Directory of local medical facilities with individual detail pages
- **Services**: Marketplace of various services (delivery, medical, internet, etc.)
- **Tourism**: Information about local attractions (coming soon)
- **Contact**: User feedback form

## Component Interdependencies
- Loading screen component is imported and used in all pages
- Navbar component is used across the website for consistent navigation
- Footer component provides consistent footer across pages
- Swiper/carousel component is used on the homepage for university imagery
- Authentication forms are structured with toggle functionality between sign-in and sign-up

## Code Organization
- Website pages are in the root of the website directory (index.html, signInUp.html)
- Components are organized by functionality in dedicated folders with their own CSS and JS
- Script includes are placed at the bottom of HTML files
- FontAwesome is used consistently for icons

*This system pattern documentation is based on analysis of the HTML files and content structure.* 