import { ICity } from './ICity';
import { IState } from './IState';

export interface IAddress {
  id: string;
  cityId: string;
  stateId: string;
  street: string;
  number: string;
  zipCode: string;
  complement?: string;
  streetType: string;
  neighborhood: string;
  city: Partial<ICity>;
  state: Partial<IState>;
}
