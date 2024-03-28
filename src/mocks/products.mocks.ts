import { HttpResponse, delay, http } from "msw";
import { Product } from "../types/product";

const url = "http://localhost:3001/products";

export const scenarios = {
  empty: [
    http.get(url, () => {
      return HttpResponse.json([]);
    }),
  ],
  error: [
    http.get(url, () => {
      return new HttpResponse(null, { status: 500 });
    }),
  ],
  success: [
    http.get(url, async () => {
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
      const responseDelay = parseInt(
        new URLSearchParams(window.location.search).get("delay") ?? "0"
      );
      await delay(responseDelay);
      return HttpResponse.json(mockProducts);
    }),
  ],
};
