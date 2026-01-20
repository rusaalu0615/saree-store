# Elegant Sarees - Modern E-commerce Website

A modern, responsive saree e-commerce website built with Next.js 14, React, and Tailwind CSS. Inspired by luxury fashion websites with clean design, smooth animations, and comprehensive cart functionality.

## 🌟 Features

### Core E-commerce Functionality
- **Complete Shopping Cart**: Add, remove, update quantities with real-time counter
- **Persistent Cart**: Cart data saved in localStorage across sessions
- **Product Categories**: 8+ saree categories (Silk, Cotton, Linen, Banarasi, etc.)
- **Product Filtering**: Price ranges, sorting, grid/list view toggle
- **Product Detail Pages**: Individual product views with image galleries
- **Checkout Process**: Complete checkout form with order summary
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### Modern Design & UX
- **Luxury Aesthetic**: Clean design inspired by high-end fashion websites
- **Smooth Animations**: Framer Motion hover effects and transitions
- **Interactive Elements**: Product card hover effects, image galleries
- **Custom Typography**: Modeline font for elegant headings
- **Professional Layout**: Consistent spacing and modern UI patterns

### Technical Implementation
- **React Context**: Global cart state management
- **Next.js 14**: App Router, Server Components, and optimizations
- **Tailwind CSS**: Utility-first styling with custom components
- **TypeScript Ready**: Structured for easy TypeScript migration
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized images and efficient rendering

### Pages & Components
- **Home Page**: Hero section, product categories, featured products
- **Category Pages**: Linen, Silk, Cotton, Banarasi, Bhagalpuri, Chiffon, Georgette, Printed, Tissue sarees
- **Product Pages**: Individual product detail views
- **Cart Page**: Complete cart management interface
- **Checkout Page**: Order form with payment options
- **Reusable Components**: Navbar, Footer, Product Cards, Loading states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saree-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
saree-store/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── navbar.js       # Navigation component
│   │   ├── sareeCard.js    # Product card component
│   │   ├── Footer.js       # Footer component
│   │   └── ...
│   ├── context/            # React Context providers
│   │   └── CartContext.js  # Cart state management
│   ├── [category]/         # Dynamic category pages
│   │   └── page.js
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── public/                # Static assets
│   ├── images/           # Product images
│   ├── modeline/         # Custom fonts
│   └── ...
└── package.json
```

## 🛍️ Cart Functionality

### Features
- **Add to Cart**: Add products from any page
- **Update Quantity**: Increase/decrease item quantities
- **Remove Items**: Remove individual items or clear entire cart
- **Persistent Storage**: Cart data saved in localStorage
- **Real-time Updates**: Cart counter updates across all pages
- **Price Calculation**: Automatic subtotal, tax, and total calculation

### Usage
```javascript
// Using the cart context
const { addToCart, removeFromCart, updateQuantity, items, getCartTotal } = useCart();

// Add product to cart
addToCart({
  id: 1,
  title: "Elegant Silk Saree",
  price: 5500,
  images: ["/image1.jpg"],
  type: ["Silk"]
});
```

## 🎨 Customization

### Adding New Product Categories

1. **Create a new page**
   ```bash
   mkdir app/new-category
   touch app/new-category/page.js
   ```

2. **Copy existing category structure**
   Use `app/silk-saree/page.js` as a template

3. **Update navigation**
   Add the new category to `app/components/navbar.js`

4. **Add to product grid**
   Update `app/components/productType.js`

### Styling Customization

- **Colors**: Update Tailwind classes throughout components
- **Fonts**: Modify `app/globals.css` for font changes
- **Animations**: Adjust Framer Motion configurations
- **Layout**: Modify grid layouts and spacing

### Adding New Features

- **User Authentication**: Implement login/signup
- **Payment Integration**: Add Stripe/PayPal
- **Product Reviews**: Add rating and review system
- **Wishlist**: Implement save for later functionality
- **Search**: Add global product search

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Adaptive navigation
- Flexible product grids
- Mobile-optimized cart
- Touch-friendly interactions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for configuration:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
```

### Tailwind Configuration
Customize `tailwind.config.js` for:
- Custom colors
- Font families
- Breakpoints
- Animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS**: Use AWS Amplify
- **Docker**: Create Dockerfile for containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from [Manish Malhotra](https://manishmalhotra.in/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@elegantSarees.com

---

**Happy Shopping! 🛍️**