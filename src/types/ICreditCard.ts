export enum EnumCardBrand {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD'
}

export interface ICreditCard {
  id?: string;
  documentNumber: string;
  cardHolder: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  cardBrand: EnumCardBrand | null;
}
