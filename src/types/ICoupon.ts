export interface ICoupon {
  id: string;
  voucherCode: string;
  discountPrice: number;
  status: 'ENABLED' | 'DISABLED';
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
