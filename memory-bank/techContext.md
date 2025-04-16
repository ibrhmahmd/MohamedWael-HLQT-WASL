# Technical Context

## Technologies
Based on the analysis of HTML files and directory structure, the project uses:

- **Frontend**: 
  - HTML5 for structure
  - CSS3 for styling
  - Vanilla JavaScript for interactivity
- **UI Components**: Custom component system in the `src/main` directory
- **Media**: Video background on home page and image sliders for visual content
- **User Authentication**: Form-based authentication with social media integration options
- **Icons**: FontAwesome 6.7.2 for icons and visual elements
- **Animation**: CSS transitions and JavaScript for animations and loading effects

## Development Setup
The project follows a structured approach with:
- Separation of website pages and reusable components
- Organized asset management (js, css, imgs, icons)
- Component-based architecture with each component having HTML, CSS, and JS files
- Service-based content organization by category
- Form handling for user input (contact, authentication)
- Status indicators for content availability ("Coming Soon", error states)

## Technical Patterns
- **Import Pattern**: Components are imported via script tags at the bottom of HTML files
- **Progress Indication**: Loading screen with progress percentage
- **Form Validation**: Input validation for contact and authentication forms
- **Responsive Media**: Video and image optimization for different screen sizes
- **Content Pagination**: Pagination for sliders and multi-item content
- **Navigation Patterns**: Consistent navigation structure across all pages
- **Error Handling**: 404 page for missing content

## Technical Constraints
As this is a web-based project, constraints include:
- Browser compatibility requirements
- Responsive design for different device sizes (mobile-first approach)
- Performance considerations for image loading and animations
- Social media API integration requirements

## Dependencies
The project utilizes:
- FontAwesome 6.7.2 for icons
- Custom-built swiper/carousel for image slideshows
- Custom form handling and validation
- Custom loading screen with progress indicator
- Custom card components for content display
- Custom navigation system with responsive behavior

## File Organization
- Main website pages in `src/website`
- Reusable components in `src/main`
- Service category pages in `src/website/web/content/[category]`
- Individual service pages within each category directory
- Shared assets in `src/website/assets`
- Category-specific assets in `src/website/web/content/[category]/files`

*This technical context is based on analysis of the HTML files and content structure.* 