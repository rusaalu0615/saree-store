// Centralized product data for the entire application
export const productCategories = {
  'linen-saree': {
    name: 'Linen Sarees',
    description: 'Elegant and lightweight linen sarees that offer comfort and style for any season.',
    products: [
      {
        id: 'linen-001',
        title: 'Pure Linen Saree',
        price: 5500,
        originalPrice: 6500,
        images: ['/linentype.PNG', '/linentype1.PNG'],
        type: ['Linen', 'Handwoven'],
        rating: 4.8,
        description: 'Elegant pure linen saree perfect for summer occasions.',
        features: ['100% Pure Linen', 'Handwoven', 'Breathable Fabric', 'Easy Care'],
        inStock: true,
        category: 'linen-saree'
      },
      {
        id: 'linen-002',
        title: 'Handwoven Linen Saree',
        price: 6200,
        originalPrice: 7200,
        images: ['/linentype1.PNG', '/linentype.PNG'],
        type: ['Linen', 'Premium'],
        rating: 4.7,
        description: 'Premium handwoven linen saree with intricate patterns.',
        features: ['Handwoven', 'Premium Quality', 'Unique Patterns', 'Comfortable'],
        inStock: true,
        category: 'linen-saree'
      },
      {
        id: 'linen-003',
        title: 'Linen Blend Saree',
        price: 4800,
        originalPrice: 5800,
        images: ['/linentype.PNG', '/linentype1.PNG'],
        type: ['Linen', 'Blend'],
        rating: 4.5,
        description: 'Comfortable linen blend saree for everyday elegance.',
        features: ['Linen Blend', 'Soft Texture', 'Durable', 'Affordable'],
        inStock: true,
        category: 'linen-saree'
      },
      {
        id: 'linen-004',
        title: 'Designer Linen Saree',
        price: 7500,
        originalPrice: 8500,
        images: ['/linentype1.PNG', '/linentype.PNG'],
        type: ['Linen', 'Designer'],
        rating: 4.9,
        description: 'Designer linen saree with contemporary styling.',
        features: ['Designer Collection', 'Contemporary Style', 'Premium Finish', 'Exclusive'],
        inStock: true,
        category: 'linen-saree'
      },
      {
        id: 'linen-005',
        title: 'Organic Linen Saree',
        price: 5800,
        originalPrice: 6800,
        images: ['/linentype.PNG', '/linentype1.PNG'],
        type: ['Linen', 'Organic'],
        rating: 4.6,
        description: 'Eco-friendly organic linen saree.',
        features: ['100% Organic', 'Eco-Friendly', 'Natural Dyes', 'Sustainable'],
        inStock: true,
        category: 'linen-saree'
      },
      {
        id: 'linen-006',
        title: 'Printed Linen Saree',
        price: 4200,
        originalPrice: 5200,
        images: ['/linentype1.PNG', '/linentype.PNG'],
        type: ['Linen', 'Printed'],
        rating: 4.4,
        description: 'Beautiful printed linen saree with floral motifs.',
        features: ['Digital Print', 'Vibrant Colors', 'Lightweight', 'Modern Design'],
        inStock: true,
        category: 'linen-saree'
      }
    ]
  },
  'silk-saree': {
    name: 'Silk Sarees',
    description: 'Luxurious silk sarees crafted with the finest materials and traditional techniques.',
    products: [
      {
        id: 'silk-001',
        title: 'Pure Silk Saree',
        price: 8500,
        originalPrice: 9500,
        images: ['/image1.jpg', '/image2.jpg'],
        type: ['Silk', 'Handwoven'],
        rating: 4.9,
        description: 'Exquisite pure silk saree with traditional craftsmanship.',
        features: ['100% Pure Silk', 'Handwoven', 'Rich Texture', 'Traditional'],
        inStock: true,
        category: 'silk-saree'
      },
      {
        id: 'silk-002',
        title: 'Kanjivaram Silk Saree',
        price: 12000,
        originalPrice: 14000,
        images: ['/image2.jpg', '/image1.jpg'],
        type: ['Silk', 'Kanjivaram'],
        rating: 4.8,
        description: 'Authentic Kanjivaram silk saree with gold zari work.',
        features: ['Kanjivaram Silk', 'Gold Zari', 'Traditional Motifs', 'Premium Quality'],
        inStock: true,
        category: 'silk-saree'
      },
      {
        id: 'silk-003',
        title: 'Tussar Silk Saree',
        price: 6800,
        originalPrice: 7800,
        images: ['/image1.jpg', '/image2.jpg'],
        type: ['Silk', 'Tussar'],
        rating: 4.7,
        description: 'Natural tussar silk saree with earthy elegance.',
        features: ['Tussar Silk', 'Natural Texture', 'Earthy Tones', 'Lightweight'],
        inStock: true,
        category: 'silk-saree'
      },
      {
        id: 'silk-004',
        title: 'Designer Silk Saree',
        price: 15000,
        originalPrice: 17000,
        images: ['/image2.jpg', '/image1.jpg'],
        type: ['Silk', 'Designer'],
        rating: 4.9,
        description: 'Contemporary designer silk saree for special occasions.',
        features: ['Designer Collection', 'Contemporary Style', 'Luxury Finish', 'Exclusive'],
        inStock: true,
        category: 'silk-saree'
      }
    ]
  },
  'cotton-saree': {
    name: 'Cotton Sarees',
    description: 'Comfortable and breathable cotton sarees perfect for daily wear and casual occasions.',
    products: [
      {
        id: 'cotton-001',
        title: 'Pure Cotton Saree',
        price: 2500,
        originalPrice: 3000,
        images: ['/cotton.jpg', '/image2.jpg'],
        type: ['Cotton', 'Handwoven'],
        rating: 4.6,
        description: 'Comfortable pure cotton saree for everyday wear.',
        features: ['100% Pure Cotton', 'Breathable', 'Easy Care', 'Comfortable'],
        inStock: true,
        category: 'cotton-saree'
      },
      {
        id: 'cotton-002',
        title: 'Handloom Cotton Saree',
        price: 3200,
        originalPrice: 3800,
        images: ['/image2.jpg', '/cotton.jpg'],
        type: ['Cotton', 'Handloom'],
        rating: 4.7,
        description: 'Traditional handloom cotton saree with ethnic charm.',
        features: ['Handloom', 'Traditional Weave', 'Soft Texture', 'Durable'],
        inStock: true,
        category: 'cotton-saree'
      },
      {
        id: 'cotton-003',
        title: 'Printed Cotton Saree',
        price: 1800,
        originalPrice: 2200,
        images: ['/cotton.jpg', '/image2.jpg'],
        type: ['Cotton', 'Printed'],
        rating: 4.4,
        description: 'Vibrant printed cotton saree with modern designs.',
        features: ['Digital Print', 'Vibrant Colors', 'Modern Design', 'Affordable'],
        inStock: true,
        category: 'cotton-saree'
      }
    ]
  },
  'banarasi-saree': {
    name: 'Banarasi Sarees',
    description: 'Traditional Banarasi sarees with intricate brocade work and timeless elegance.',
    products: [
      {
        id: 'banarasi-001',
        title: 'Pure Banarasi Silk Saree',
        price: 18000,
        originalPrice: 20000,
        images: ['/image4.jpg', '/image1.jpg'],
        type: ['Banarasi', 'Silk'],
        rating: 4.9,
        description: 'Authentic Banarasi silk saree with intricate brocade work.',
        features: ['Pure Banarasi Silk', 'Brocade Work', 'Traditional Motifs', 'Handwoven'],
        inStock: true,
        category: 'banarasi-saree'
      },
      {
        id: 'banarasi-002',
        title: 'Banarasi Georgette Saree',
        price: 12000,
        originalPrice: 14000,
        images: ['/image1.jpg', '/image4.jpg'],
        type: ['Banarasi', 'Georgette'],
        rating: 4.7,
        description: 'Elegant Banarasi georgette saree with gold work.',
        features: ['Banarasi Georgette', 'Gold Work', 'Lightweight', 'Elegant Drape'],
        inStock: true,
        category: 'banarasi-saree'
      }
    ]
  },
  'bhagalpuri-saree': {
    name: 'Bhagalpuri Sarees',
    description: 'Traditional Bhagalpuri sarees known for their unique texture and natural appeal.',
    products: [
      {
        id: 'bhagalpuri-001',
        title: 'Pure Bhagalpuri Silk Saree',
        price: 4500,
        originalPrice: 5500,
        images: ['/image1.jpg', '/image2.jpg'],
        type: ['Bhagalpuri', 'Silk'],
        rating: 4.5,
        description: 'Authentic Bhagalpuri silk saree with natural texture.',
        features: ['Bhagalpuri Silk', 'Natural Texture', 'Traditional Weave', 'Comfortable'],
        inStock: true,
        category: 'bhagalpuri-saree'
      }
    ]
  },
  'chiffon-saree': {
    name: 'Chiffon Sarees',
    description: 'Lightweight and graceful chiffon sarees perfect for parties and celebrations.',
    products: [
      {
        id: 'chiffon-001',
        title: 'Designer Chiffon Saree',
        price: 3500,
        originalPrice: 4200,
        images: ['/image6.jpg', '/image2.jpg'],
        type: ['Chiffon', 'Designer'],
        rating: 4.6,
        description: 'Elegant designer chiffon saree with beautiful drape.',
        features: ['Pure Chiffon', 'Lightweight', 'Graceful Drape', 'Party Wear'],
        inStock: true,
        category: 'chiffon-saree'
      }
    ]
  },
  'georgette-saree': {
    name: 'Georgette Sarees',
    description: 'Flowing georgette sarees with elegant drape and contemporary appeal.',
    products: [
      {
        id: 'georgette-001',
        title: 'Pure Georgette Saree',
        price: 4200,
        originalPrice: 5000,
        images: ['/image8.jpg', '/image2.jpg'],
        type: ['Georgette', 'Designer'],
        rating: 4.5,
        description: 'Beautiful georgette saree with flowing drape.',
        features: ['Pure Georgette', 'Flowing Drape', 'Contemporary Style', 'Versatile'],
        inStock: true,
        category: 'georgette-saree'
      }
    ]
  },
  'printed-saree': {
    name: 'Printed Sarees',
    description: 'Vibrant printed sarees with modern designs and contemporary patterns.',
    products: [
      {
        id: 'printed-001',
        title: 'Digital Print Saree',
        price: 2800,
        originalPrice: 3500,
        images: ['/image5.png', '/image2.jpg'],
        type: ['Printed', 'Digital'],
        rating: 4.4,
        description: 'Modern digital print saree with vibrant colors.',
        features: ['Digital Print', 'Vibrant Colors', 'Modern Design', 'Easy Care'],
        inStock: true,
        category: 'printed-saree'
      }
    ]
  },
  'tissue-saree': {
    name: 'Tissue Sarees',
    description: 'Shimmering tissue sarees with metallic finish for special occasions.',
    products: [
      {
        id: 'tissue-001',
        title: 'Pure Tissue Saree',
        price: 6500,
        originalPrice: 7500,
        images: ['/image7.jpg', '/image2.jpg'],
        type: ['Tissue', 'Metallic'],
        rating: 4.7,
        description: 'Elegant tissue saree with metallic finish.',
        features: ['Pure Tissue', 'Metallic Finish', 'Shimmering Effect', 'Party Wear'],
        inStock: true,
        category: 'tissue-saree'
      }
    ]
  },
  'unstitched-suit-set': {
    name: 'Unstitched Suit Sets',
    description: 'Premium unstitched suit sets with matching dupatta and bottom.',
    products: [
      {
        id: 'suit-001',
        title: 'Premium Suit Set',
        price: 3200,
        originalPrice: 4000,
        images: ['/image5.png', '/image2.jpg'],
        type: ['Suit Set', 'Unstitched'],
        rating: 4.6,
        description: 'Premium unstitched suit set with beautiful embroidery.',
        features: ['3-Piece Set', 'Premium Fabric', 'Embroidered', 'Unstitched'],
        inStock: true,
        category: 'unstitched-suit-set'
      }
    ]
  }
};

// Helper functions
export const getAllProducts = () => {
  return Object.values(productCategories).flatMap(category => category.products);
};

export const getProductsByCategory = (categorySlug) => {
  return productCategories[categorySlug]?.products || [];
};

export const getProductById = (productId) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === productId);
};

export const getCategoryInfo = (categorySlug) => {
  return productCategories[categorySlug] || null;
};

export const searchProducts = (query) => {
  const allProducts = getAllProducts();
  return allProducts.filter(product => 
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.type.some(type => type.toLowerCase().includes(query.toLowerCase()))
  );
};