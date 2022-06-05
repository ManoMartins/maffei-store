import React from 'react';
import { IStoreProduct } from 'types/IStoreProduct';

export interface ICartGame {
  quantity: number;
  storeProductId: string;
}

export type CartData = {
  storeProducts: Array<ICartGame> | null;
  voucherCode: string;
  paymentMethodId: string;
  shippingAddressId: string;
};

export type StoreProductCheckoutData = IStoreProduct & {
  quantity: number;
};

export type CheckoutData = {
  id: string;
  priceTotal: number;
  priceDiscount?: number;
  totalWithoutDiscount: number;
  storeProducts: Array<StoreProductCheckoutData>;
};

export type PaymentMethodType = {
  paymentMethodId: string;
  price: number;
};

export type CartContextValues = {
  cart: CartData | undefined;
  checkout: CheckoutData | undefined;
  cartLength: number;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;

  addPromoCode: (voucherCode: string) => Promise<void>;
  removePromoCode: (voucherCode: string) => void;

  addPaymentMethod: (paymentMethodId: PaymentMethodType[]) => void;
  removePaymentMethod: (paymentMethodId: string) => void;

  addShippingAddress: (shippingAddressId: string) => void;
  removeShippingAddress: (shippingAddressId: string) => void;

  makeOrder: () => Promise<void>;

  disclosureMiniCart: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

export type CartContextProviderProps = {
  children: React.ReactNode;
};

export interface IOrder {
  id: string;
  userId: string;
  paymentStatus: string;
  shippingAddressId: string;
  billingAddressId: string;
  totalPrice: number;
  promotionalCodeId: any;
  exchangeCodeId?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IExchangeCode {
  id: string;
  voucherCode: string;
  discountPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface IOrderAPI {
  order: IOrder;
  exchangeCode?: IExchangeCode;
}
