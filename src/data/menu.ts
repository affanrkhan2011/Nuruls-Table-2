export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
};

export const MENU_CATEGORIES = [
  'Appetizers',
  'Set Menu',
  'Side Dishes (Rice & Bread)',
  'Meat - À La Carte',
  'Fish & Seafood - À La Carte',
  'Vegetarian - À La Carte',
  'Desserts',
  'Drinks & Beverages'
];

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  { id: 'a1_s', name: 'Chicken Corn Soup (Small)', price: 6.99, category: 'Appetizers' },
  { id: 'a1_l', name: 'Chicken Corn Soup (Large)', price: 9.00, category: 'Appetizers' },
  { id: 'a2', name: 'Beef Liver Samosa', price: 6.99, category: 'Appetizers' },
  { id: 'a3_s', name: 'Beef Haleem (Small)', price: 7.99, category: 'Appetizers' },
  { id: 'a3_l', name: 'Beef Haleem (Large)', price: 11.95, category: 'Appetizers' },
  { id: 'a4_s', name: "Nurul's Fish Pakora (Small)", price: 7.99, category: 'Appetizers' },
  { id: 'a4_l', name: "Nurul's Fish Pakora (Large)", price: 11.95, category: 'Appetizers' },
  { id: 'a5', name: 'Papor Vaja', price: 6.10, category: 'Appetizers' },

  // Set Menu
  { id: 'sm1_s', name: 'Beef Bangla Khabar (Small)', price: 17.99, category: 'Set Menu' },
  { id: 'sm1_l', name: 'Beef Bangla Khabar (Large)', price: 27.80, category: 'Set Menu' },
  { id: 'sm2_s', name: 'Chicken Bangla Khabar (Small)', price: 17.99, category: 'Set Menu' },
  { id: 'sm2_l', name: 'Chicken Bangla Khabar (Large)', price: 27.80, category: 'Set Menu' },
  { id: 'sm3_s', name: 'Goat Bangla Khabar (Small)', price: 17.99, category: 'Set Menu' },
  { id: 'sm3_l', name: 'Goat Bangla Khabar (Large)', price: 27.80, category: 'Set Menu' },
  { id: 'sm4_s', name: 'Rui Fish Bangla Khabar (Small)', price: 17.99, category: 'Set Menu' },
  { id: 'sm4_l', name: 'Rui Fish Bangla Khabar (Large)', price: 27.80, category: 'Set Menu' },
  { id: 'sm5_s', name: 'Roast Chicken Pulao (Small)', price: 16.99, category: 'Set Menu' },
  { id: 'sm5_l', name: 'Roast Chicken Pulao (Large)', price: 24.90, category: 'Set Menu' },
  { id: 'sm6_s', name: 'Duck Curry with Tundol Roti (Small)', price: 17.99, category: 'Set Menu' },
  { id: 'sm6_l', name: 'Duck Curry with Tundol Roti (Large)', price: 27.80, category: 'Set Menu' },
  { id: 'sm7_s', name: 'Beef Tehari (Small)', price: 16.99, category: 'Set Menu' },
  { id: 'sm7_l', name: 'Beef Tehari (Large)', price: 24.90, category: 'Set Menu' },
  { id: 'sm8_s', name: 'Tandoori Mix Kebaab (Small)', price: 25.99, category: 'Set Menu' },
  { id: 'sm8_l', name: 'Tandoori Mix Kebaab (Large)', price: 38.05, category: 'Set Menu' },

  // Side Dishes (Rice & Bread)
  { id: 'sd1', name: 'Tundul Roti', description: 'Fresh baked in clay oven', price: 2.99, category: 'Side Dishes (Rice & Bread)' },
  { id: 'sd2', name: 'Boiled Basmati Rice', price: 2.99, category: 'Side Dishes (Rice & Bread)' },
  { id: 'sd3', name: 'Pulao Rice', description: 'Kalijeera rice', price: 3.99, category: 'Side Dishes (Rice & Bread)' },

  // Meat - À La Carte
  { id: 'm1_s', name: 'Beef Bhuna / Curry (Small)', price: 16.99, category: 'Meat - À La Carte' },
  { id: 'm1_l', name: 'Beef Bhuna / Curry (Large)', price: 24.90, category: 'Meat - À La Carte' },
  { id: 'm2_s', name: 'Goat/Mutton Bhuna / Curry (Small)', price: 17.99, category: 'Meat - À La Carte' },
  { id: 'm2_l', name: 'Goat/Mutton Bhuna / Curry (Large)', price: 26.45, category: 'Meat - À La Carte' },
  { id: 'm3', name: 'Lamb Curry', price: 17.99, category: 'Meat - À La Carte' },
  { id: 'm4_s', name: 'Chicken Bhuna / Curry (Small)', price: 15.99, category: 'Meat - À La Carte' },
  { id: 'm4_l', name: 'Chicken Bhuna / Curry (Large)', price: 24.90, category: 'Meat - À La Carte' },
  { id: 'm5_s', name: 'Chicken Tikka Masala (Small)', price: 15.99, category: 'Meat - À La Carte' },
  { id: 'm5_l', name: 'Chicken Tikka Masala (Large)', price: 24.90, category: 'Meat - À La Carte' },
  { id: 'm6_s', name: 'Butter Chicken (Small)', price: 15.99, category: 'Meat - À La Carte' },
  { id: 'm6_l', name: 'Butter Chicken (Large)', price: 24.90, category: 'Meat - À La Carte' },
  { id: 'm7_s', name: 'Chicken Korma (Small)', price: 15.99, category: 'Meat - À La Carte' },
  { id: 'm7_l', name: 'Chicken Korma (Large)', price: 24.90, category: 'Meat - À La Carte' },
  { id: 'm8_s', name: 'Beef Belly / Gorur Bhuri Bhuna (Small)', price: 19.99, category: 'Meat - À La Carte' },
  { id: 'm8_l', name: 'Beef Belly / Gorur Bhuri Bhuna (Large)', price: 29.35, category: 'Meat - À La Carte' },
  { id: 'm9', name: 'Mix Kebab Plate', price: 27.80, category: 'Meat - À La Carte' },
  { id: 'm10', name: 'Beef Tikka Boti', price: 27.80, category: 'Meat - À La Carte' },
  { id: 'm11', name: 'Lamb Tikka Boti', price: 27.80, category: 'Meat - À La Carte' },
  { id: 'm12', name: 'Beef Chaap', price: 27.80, category: 'Meat - À La Carte' },
  { id: 'm13', name: 'Chicken Chaap', price: 26.45, category: 'Meat - À La Carte' },

  // Fish & Seafood - À La Carte
  { id: 'f1', name: 'Shorishe Elish', price: 35.05, category: 'Fish & Seafood - À La Carte' },
  { id: 'f2', name: 'Elish / Hilsha Mach Bhaja', price: 35.05, category: 'Fish & Seafood - À La Carte' },
  { id: 'f3', name: 'Elish / Hilsha Mach Bhuna', price: 35.05, category: 'Fish & Seafood - À La Carte' },
  { id: 'f4_s', name: 'Pomfret Fried Fish / Dopiyaza (Small)', price: 19.99, category: 'Fish & Seafood - À La Carte' },
  { id: 'f4_l', name: 'Pomfret Fried Fish / Dopiyaza (Large)', price: 35.05, category: 'Fish & Seafood - À La Carte' },
  { id: 'f5', name: 'Chingri (Prawn) Dopiyaza', price: 32.30, category: 'Fish & Seafood - À La Carte' },
  { id: 'f6', name: 'Chingri (Prawn) Malay Curry', price: 32.30, category: 'Fish & Seafood - À La Carte' },
  { id: 'f7', name: 'Shutki Mach Bhuna', price: 27.80, category: 'Fish & Seafood - À La Carte' },
  { id: 'f8', name: 'Rui Fish Bhuna', price: 24.90, category: 'Fish & Seafood - À La Carte' },

  // Vegetarian - À La Carte
  { id: 'v1', name: 'Chana Masala', price: 13.99, category: 'Vegetarian - À La Carte' },
  { id: 'v2', name: 'Jackfruit Curry', price: 13.99, category: 'Vegetarian - À La Carte' },
  { id: 'v3', name: 'Paneer and Palak', price: 13.99, category: 'Vegetarian - À La Carte' },
  { id: 'v4', name: 'Shahi Paneer', price: 13.99, category: 'Vegetarian - À La Carte' },
  { id: 'v5', name: 'Vegetable Korma', price: 13.99, category: 'Vegetarian - À La Carte' },

  // Desserts
  { id: 'd1', name: 'Carrot Halwa', price: 3.99, category: 'Desserts' },
  { id: 'd2', name: 'Firni', price: 3.99, category: 'Desserts' },
  { id: 'd3', name: 'Ice Cream', price: 3.99, category: 'Desserts' },

  // Drinks & Beverages
  { id: 'b1', name: 'Pop', description: 'Coke, Pepsi, Sprite, 7up, Ginger Ale', price: 1.99, category: 'Drinks & Beverages' },
  { id: 'b2', name: 'Juice', description: 'Mango, Coconut, Orange', price: 2.99, category: 'Drinks & Beverages' },
  { id: 'b3', name: 'Bengal Milk Tea', price: 3.99, category: 'Drinks & Beverages' },
  { id: 'b4', name: 'Mango or Salted Lassi', price: 3.99, category: 'Drinks & Beverages' },
  { id: 'b5', name: 'Barbican', description: 'Non-alcoholic malt beverage', price: 3.99, category: 'Drinks & Beverages' },
  { id: 'b6', name: 'Mocktails / Mojito', price: 4.99, category: 'Drinks & Beverages' }
];
