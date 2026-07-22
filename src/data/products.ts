export interface ProductVariant {
  size: string;
  price: number;
  stock: number;
}

export interface Product {
  id: string;
  nameGu: string;
  nameEn: string;
  descriptionGu: string;
  descriptionEn: string;
  category: string;
  categoryGu: string;
  variants: ProductVariant[];
  ingredients: string;
  shelfLife: string;
  storageInstructions: string;
  tags: string[];
  taste: string;
  rating: number;
  reviewCount: number;
  emoji: string;
  image: string;
}

export const categories = [
  { id: "pickles", nameEn: "Pickles", nameGu: "અથાણાં", emoji: "🫙", image: "/logo.png" },
  { id: "wafers", nameEn: "Wafers", nameGu: "વેફર્સ", emoji: "🥔", image: "/logo.png" },
  { id: "mukhwas", nameEn: "Mukhwas", nameGu: "મુખવાસ", emoji: "🌿", image: "/logo.png" },
  { id: "papad", nameEn: "Papad", nameGu: "પાપડ", emoji: "🫓", image: "/logo.png" },
];

export const products: Product[] = [
  {
    id: "mango-pickle",
    nameGu: "કેરી કા અચાર",
    nameEn: "Mango Pickle",
    descriptionGu: "પરંપરાગત ગુજરાતી કેરીનું અથાણું, ખાસ મસાલા સાથે તૈયાર.",
    descriptionEn: "Traditional Gujarati mango pickle made with handpicked raw mangoes and special spice blend.",
    category: "pickles",
    categoryGu: "અથાણાં",
    variants: [
      { size: "250g", price: 149, stock: 50 },
      { size: "500g", price: 249, stock: 35 },
      { size: "1kg", price: 449, stock: 20 },
    ],
    ingredients: "Raw Mango, Mustard Oil, Fenugreek, Turmeric, Red Chilli, Salt, Mustard Seeds",
    shelfLife: "12 months",
    storageInstructions: "Store in a cool, dry place. Use dry spoon.",
    tags: ["Bestseller", "Traditional"],
    taste: "Spicy",
    rating: 4.8,
    reviewCount: 124,
    emoji: "🥭",
    image: "/logo.png",
  },
  {
    id: "lemon-pickle",
    nameGu: "લીંબુ કા અચાર",
    nameEn: "Lemon Pickle",
    descriptionGu: "ખાટા-મીઠા લીંબુનું અથાણું, ગુજરાતી પદ્ધતિથી.",
    descriptionEn: "Tangy lemon pickle prepared the authentic Gujarati way with whole lemons and aromatic spices.",
    category: "pickles",
    categoryGu: "અથાણાં",
    variants: [
      { size: "250g", price: 129, stock: 40 },
      { size: "500g", price: 199, stock: 30 },
      { size: "1kg", price: 359, stock: 15 },
    ],
    ingredients: "Lemon, Salt, Turmeric, Red Chilli, Mustard Seeds, Fenugreek, Asafoetida",
    shelfLife: "12 months",
    storageInstructions: "Store in a cool, dry place. Use dry spoon.",
    tags: ["Popular"],
    taste: "Traditional",
    rating: 4.6,
    reviewCount: 89,
    emoji: "🍋",
    image: "/logo.png",
  },
  {
    id: "green-chilli-pickle",
    nameGu: "મરચાં કા અચાર",
    nameEn: "Green Chilli Pickle",
    descriptionGu: "તીખા લીલા મરચાંનું અથાણું, ગરમ મસાલા સાથે.",
    descriptionEn: "Fiery green chilli pickle with bold spices for those who love heat.",
    category: "pickles",
    categoryGu: "અથાણાં",
    variants: [
      { size: "250g", price: 179, stock: 25 },
      { size: "500g", price: 299, stock: 18 },
    ],
    ingredients: "Green Chilli, Mustard Oil, Fenugreek, Salt, Turmeric, Mustard Seeds",
    shelfLife: "10 months",
    storageInstructions: "Store in a cool, dry place. Keep away from moisture.",
    tags: ["Spicy", "New Arrival"],
    taste: "Spicy",
    rating: 4.5,
    reviewCount: 56,
    emoji: "🌶️",
    image: "/logo.png",
  },
  {
    id: "mixed-pickle",
    nameGu: "મિક્સ અચાર",
    nameEn: "Mixed Pickle Special",
    descriptionGu: "વિવિધ શાકભાજીનું મિક્સ અથાણું - હરિવલ્લભ સ્પેશિયલ.",
    descriptionEn: "A delightful mix of seasonal vegetables pickled with our signature spice blend.",
    category: "pickles",
    categoryGu: "અથાણાં",
    variants: [
      { size: "250g", price: 169, stock: 30 },
      { size: "500g", price: 299, stock: 22 },
      { size: "1kg", price: 549, stock: 10 },
    ],
    ingredients: "Mango, Lemon, Chilli, Carrot, Mustard Oil, Fenugreek, Turmeric, Salt",
    shelfLife: "12 months",
    storageInstructions: "Store in a cool, dry place. Use dry spoon.",
    tags: ["Special", "Bestseller"],
    taste: "Traditional",
    rating: 4.7,
    reviewCount: 98,
    emoji: "🫙",
    image: "/logo.png",
  },
  {
    id: "chundo",
    nameGu: "છુંદો",
    nameEn: "Sweet Mango Chundo",
    descriptionGu: "ગળ્યો છુંદો - ગુજરાતની ખાસ મીઠી વાનગી.",
    descriptionEn: "Sweet and tangy grated mango preserve - a Gujarati delicacy.",
    category: "pickles",
    categoryGu: "અથાણાં",
    variants: [
      { size: "250g", price: 149, stock: 35 },
      { size: "500g", price: 229, stock: 25 },
    ],
    ingredients: "Raw Mango (grated), Sugar, Salt, Red Chilli, Cumin",
    shelfLife: "8 months",
    storageInstructions: "Refrigerate after opening.",
    tags: ["Sweet", "Traditional"],
    taste: "Sweet",
    rating: 4.9,
    reviewCount: 145,
    emoji: "🍯",
    image: "/logo.png",
  },
  {
    id: "gunda-pickle",
    nameGu: "ગુંદા કા અચાર",
    nameEn: "Gunda Pickle",
    descriptionGu: "પ્રીમિયમ ગુંદાનું અથાણું - પરંપરાગત સ્વાદ.",
    descriptionEn: "Premium gunda (cordia) pickle with traditional Gujarati preparation.",
    category: "pickles",
    categoryGu: "અથાણાં",
    variants: [
      { size: "250g", price: 199, stock: 20 },
      { size: "500g", price: 349, stock: 12 },
    ],
    ingredients: "Gunda (Cordia), Mustard Oil, Fenugreek, Red Chilli, Salt, Turmeric",
    shelfLife: "10 months",
    storageInstructions: "Store in a cool, dry place.",
    tags: ["Premium"],
    taste: "Traditional",
    rating: 4.4,
    reviewCount: 42,
    emoji: "🫒",
    image: "/logo.png",
  },
  {
    id: "masala-wafers",
    nameGu: "મસાલા વેફર્સ",
    nameEn: "Masala Potato Wafers",
    descriptionGu: "કડક મસાલેદાર બટાકાના વેફર્સ.",
    descriptionEn: "Crispy masala-flavored potato wafers, handmade with love.",
    category: "wafers",
    categoryGu: "વેફર્સ",
    variants: [
      { size: "200g", price: 149, stock: 40 },
      { size: "400g", price: 269, stock: 25 },
    ],
    ingredients: "Potato, Salt, Red Chilli, Turmeric, Oil",
    shelfLife: "3 months",
    storageInstructions: "Store in airtight container.",
    tags: ["Crispy", "Popular"],
    taste: "Spicy",
    rating: 4.6,
    reviewCount: 67,
    emoji: "🥔",
    image: "/logo.png",
  },
  {
    id: "plain-wafers",
    nameGu: "સાદા વેફર્સ",
    nameEn: "Plain Potato Wafers",
    descriptionGu: "હળવા મીઠાવાળા કડક બટાકાના વેફર્સ.",
    descriptionEn: "Lightly salted crispy potato wafers - perfect snack.",
    category: "wafers",
    categoryGu: "વેફર્સ",
    variants: [
      { size: "200g", price: 129, stock: 45 },
      { size: "400g", price: 229, stock: 30 },
    ],
    ingredients: "Potato, Salt, Oil",
    shelfLife: "3 months",
    storageInstructions: "Store in airtight container.",
    tags: ["Light"],
    taste: "Traditional",
    rating: 4.3,
    reviewCount: 38,
    emoji: "🥔",
    image: "/logo.png",
  },
  {
    id: "special-mukhwas",
    nameGu: "સ્પેશિયલ મુખવાસ",
    nameEn: "Special Mukhwas Mix",
    descriptionGu: "જમ્યા પછીનો ખાસ મુખવાસ - સોંફ, ધાણા, તલ.",
    descriptionEn: "Premium after-meal mouth freshener with fennel, coriander, and sesame.",
    category: "mukhwas",
    categoryGu: "મુખવાસ",
    variants: [
      { size: "100g", price: 99, stock: 60 },
      { size: "250g", price: 199, stock: 40 },
    ],
    ingredients: "Fennel Seeds, Coriander Seeds, Sesame, Sugar, Food Color",
    shelfLife: "6 months",
    storageInstructions: "Store in airtight container in cool place.",
    tags: ["Popular", "Bestseller"],
    taste: "Sweet",
    rating: 4.7,
    reviewCount: 112,
    emoji: "🌿",
    image: "/logo.png",
  },
  {
    id: "masala-papad",
    nameGu: "મસાલા પાપડ",
    nameEn: "Masala Papad",
    descriptionGu: "હાથથી બનાવેલા મસાલેદાર પાપડ.",
    descriptionEn: "Handmade spicy papad with traditional masala.",
    category: "papad",
    categoryGu: "પાપડ",
    variants: [
      { size: "200g (10pcs)", price: 99, stock: 50 },
      { size: "500g (25pcs)", price: 219, stock: 30 },
    ],
    ingredients: "Urad Dal, Black Pepper, Salt, Cumin, Asafoetida",
    shelfLife: "6 months",
    storageInstructions: "Store in airtight container. Keep dry.",
    tags: ["Handmade"],
    taste: "Spicy",
    rating: 4.5,
    reviewCount: 55,
    emoji: "🫓",
    image: "/logo.png",
  },
];
