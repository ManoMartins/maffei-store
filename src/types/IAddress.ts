export interface IAddress {
  id: string;
  city: string;
  state: string;
  street: string;
  number: string;
  zipCode: string;
  complement?: string;
  addressType: string;
  neighborhood: string;
}
