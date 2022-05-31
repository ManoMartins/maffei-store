import { IStoreProduct } from './IStoreProduct';

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export interface IOrderOnStoreProducts {
  storeProduct: IStoreProduct;
  quantity: number;
}

export interface IOrder {
  id: string;
  userId: string;
  storeProducts: IOrderOnStoreProducts[];
  paymentMethodId: string;
  paymentStatus: PaymentStatus;
  shippingAddressId: string;
  billingAddressId: string;
  totalPrice: number;
  promoCodeId: string | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}
