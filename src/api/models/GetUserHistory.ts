export interface GetUserHistory {
  success: boolean;
  orderHistory: [
    {
      total: number;
      orderNr: string;
      orderDate: string;
    }
  ];
}

// /api/user/history
