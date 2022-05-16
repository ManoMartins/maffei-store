import React from 'react';
import { IGame } from 'types/IGame';

export interface ICartGame extends IGame {
  quantity: number;
}

export type CartData = {
  storeProducts: Array<ICartGame> | null;

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
