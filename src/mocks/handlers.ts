import { http, HttpResponse } from "msw";
import { Product } from "../types/product";

export const handlers = [
  http.get("http://localhost:3001/products", ({ request, params, cookies }) => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 100,
        image: "image1.jpg",
        category: "category1",
        skus: [],
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description 2",
        price: 200,
        image: "image2.jpg",
        category: "category2",
        skus: [],
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description 3",
        price: 300,
        image: "image3.jpg",
        category: "category3",
        skus: [],
      },
    ];

    return HttpResponse.json(mockProducts);
  }),
];
