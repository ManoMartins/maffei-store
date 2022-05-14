import React from 'react';
import { IGame } from 'types/IGame';

export type CartData = {
  storeProducts: Array<IGame & { quantity: number }> | null;

  storeCoupons: Array<{
    voucherCode: string;
  }> | null;

  storePaymentMethods: Array<{
    paymentMethodId: string;
  }> | null;
};

export type CartContextValues = {
  cart: CartData | undefined;
  cartLength: number;
  addProduct: (game: IGame) => void;
  removeProduct: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;

  addCoupon: (voucherCode: string) => void;
  removeCoupon: (voucherCode: string) => void;

  addPaymentMethod: (paymentMethodId: string) => void;
  removePaymentMethod: (paymentMethodId: string) => void;

  makeOrder: () => void;

  disclosureMiniCart: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

export type CartContextProviderProps = {
  children: React.ReactNode;
};
