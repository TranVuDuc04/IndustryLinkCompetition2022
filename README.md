# DAV Coffee - React Application

This is a React.js conversion of the DAV Coffee website, a Vietnamese coffee shop e-commerce platform.

## Features

- 🏠 **Home Page** - Showcase with image slider and location preview
- 🛍️ **Shop** - Product catalog with filtering and sorting
- 🛒 **Shopping Cart** - Add/remove items with persistent storage
- 💳 **Checkout** - Complete checkout process with form validation
- 📍 **Locations** - Store locations across Vietnam
- 📝 **About** - Company information and team members
- 💬 **Contact** - Contact form with opening hours
- ⭐ **Feedback** - Customer feedback slider
- 👤 **Registration** - User login and registration

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Context API** - State management for cart
- **LocalStorage** - Cart persistence

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components (Navbar, Footer)
├── pages/          # Page components
├── context/        # React Context (CartContext)
├── data/           # Data files (products)
└── styles.css      # Main stylesheet
public/
└── pictures/       # Image assets
```

## Key Features Implementation

### Cart Management
- Uses React Context API for global cart state
- Persists cart data in localStorage
- Real-time cart count in navbar

### Product Filtering & Sorting
- Filter by category (All, Green Coffee, Italian Coffee, Roasted Coffee)
- Sort by price (Low to High, High to Low)
- React hooks for efficient state management

### Form Validation
- Checkout form with comprehensive validation
- Credit card number validation
- Address management with "same as delivery" option

## Original to React Conversion Notes

- Converted all HTML pages to React components
- Replaced vanilla JavaScript with React hooks
- Implemented React Router for client-side navigation
- Converted jQuery-based functionality to React state
- Maintained all original styling and functionality
- Added proper React patterns (Context API, hooks, etc.)

