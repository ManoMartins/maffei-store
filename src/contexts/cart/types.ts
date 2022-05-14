import React from 'react';

export type CartContextValues = {
  addProduct: (productId: string) => void;
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

export type CartData = {
  storeProducts: Array<{
    productId: string;
    quantity: number;
  }> | null;

  storeCoupons: Array<{
    voucherCode: string;
  }> | null;

  storePaymentMethods: Array<{
    paymentMethodId: string;
  }> | null;
};
