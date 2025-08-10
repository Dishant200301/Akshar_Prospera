# Akshar Prospera - Professional Insurance Website

A modern, premium, and trustworthy website for Akshar Prospera, a professional insurance company serving Canada and the USA. The site conveys trust, security, and reliability using a clean, corporate yet welcoming style with soft gradients, high-quality professional imagery, and a clear layout.

## 🚀 Features

### Navigation/Header
- **Sticky top navigation** with multi-level hover-triggered mega menu
- **Top-level menu items**: Home, Services, About Us, Blogs, Contact
- **Services mega dropdown** with two-column layout:
  - Left column: Insurance types (Health, Travel, Visitor Visa, Other Plans)
  - Right column: Dynamic panel with descriptions and features
- **North America-inspired logo** (maple leaf + US star)
- **Prominent CTA**: "Get a Free Quote" button

### Hero Section
- **Full-width banner** with diverse, smiling people
- **Compelling headline**: "Protecting Your Health, Travel, and Future Across North America"
- **Animated background** featuring Canadian and US landmarks:
  - CN Tower (Toronto)
  - Parliament Hill (Ottawa)
  - Statue of Liberty (NYC)
  - Golden Gate Bridge (San Francisco)
- **Trust badges** and quick stats

### Main Services Section
- **Grid layout** for all insurance types
- **Interactive cards** with icons, descriptions, and CTAs
- **Feature lists** for each service
- **Bottom CTA** for consultation

### Why Choose Us Section
- **4 key benefits** with minimalist vector icons:
  - 24/7 Support
  - North America-wide Coverage
  - Affordable Plans
  - Licensed Advisors
- **Trust indicators** and regulatory information

### Testimonials
- **Client reviews carousel** with photos, star ratings, and quotes
- **Navigation controls** and dot indicators
- **Bottom statistics** showing company achievements

### Contact Form
- **Prominent quote request form** with all necessary fields
- **Trust badges**: Licensed Insurance Provider, Secure Data Protection
- **Contact information** and office locations
- **Quick response guarantee**

## 🎨 Design Style

- **Mobile-first responsive design**
- **Minimalist yet rich visuals**
- **Soft shadows and generous whitespace**
- **Balanced typography hierarchy**

### Color Palette
- **Primary Blue**: #0056b3 (hsl(213 100% 35%))
- **White**: #ffffff
- **Gold Accents**: #c9a34e (hsl(42 67% 55%)) for elegance and trust

### Typography
- **Clean sans-serif font** (Inter) for body text
- **Bold headings** with clear hierarchy
- **Responsive text sizing**

## 🛠️ Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Router** for navigation
- **Intersection Observer API** for scroll animations

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- **Touch-friendly navigation**
- **Optimized layouts** for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd akshar-prospera

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
```bash
# Start development server with hot reload
npm run dev

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # Base UI components (shadcn/ui)
│   ├── Navigation.tsx # Main navigation with mega menu
│   ├── HeroSection.tsx # Hero banner with landmarks
│   ├── ServicesSection.tsx # Insurance services grid
│   ├── WhyChooseUsSection.tsx # Company benefits
│   ├── TestimonialsSection.tsx # Client reviews carousel
│   ├── ContactSection.tsx # Contact form and info
│   └── Footer.tsx     # Footer with locations map
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### Navigation Component
- **Mega menu** with hover interactions
- **Responsive mobile menu**
- **Company branding** with North America theme

### Hero Section
- **Animated background** with landmark icons
- **Trust indicators** and statistics
- **Call-to-action buttons**

### Services Grid
- **Interactive cards** with hover effects
- **Feature lists** and CTAs
- **Responsive grid layout**

### Testimonials Carousel
- **Smooth transitions** between testimonials
- **Navigation controls** and indicators
- **Responsive design** for all devices

## 🔧 Customization

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --insurance-blue: 213 100% 35%;
  --insurance-gold: 42 67% 55%;
  /* ... other colors */
}
```

### Content
- Update company information in component files
- Modify service descriptions and features
- Change testimonials and contact details

### Styling
- Adjust Tailwind classes in components
- Modify CSS custom properties
- Update animations and transitions

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy
The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## 📄 License

This project is proprietary software for Akshar Prospera.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**Akshar Prospera** - Protecting your health, travel, and future across North America.
