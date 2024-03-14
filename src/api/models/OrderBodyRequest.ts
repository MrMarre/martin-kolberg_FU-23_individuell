export interface OrderBodyRequest {
  details: {
    order: {
      name: string;
      price: number;
    }[];
  };
}
