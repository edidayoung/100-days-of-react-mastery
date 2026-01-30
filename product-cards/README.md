# Product Cards

A React mini project showcasing reusable product cards rendered from an array of 6 products.

## Features

- Reusable `ProductCard` component
- Array of 6 sample products with data
- Responsive grid layout
- Hover effects and transitions
- "Add to Cart" button on each card
- Dark mode support

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx           # Main app component with products array
├── App.css           # App styles
├── ProductCard.jsx   # Reusable product card component
├── ProductCard.css   # Product card styles
├── main.jsx          # React entry point
└── index.css         # Global styles
```

## Technologies

- React 19
- Vite
- CSS3

## Component Props

### ProductCard

- `id` (number): Product ID
- `name` (string): Product name
- `price` (number): Product price
- `description` (string): Product description
- `image` (string): Product image URL
