export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "SALE" | "DROP" | "NEW";
  slug: string;
}

export interface ValueProp {
  title: string;
  description: string;
  // Added React import to satisfy React.ReactNode type reference
  icon: React.ReactNode;
}
