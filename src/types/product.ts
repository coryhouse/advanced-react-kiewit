export type Product = {
  id: number;
  category: string;
  image: string;
  name: string;
  price: number;
  skus: {
    sku: string;
    size: number;
  }[];
  description: string;
};
