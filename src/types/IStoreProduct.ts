import { IGenre } from './IGenre';
import { ICompany } from './ICompany';
import { IPlatform } from './IPlatform';

export enum ProductStatus {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

export interface IStoreProduct {
  id: string;
  name: string;
  status?: ProductStatus;
  releaseDate: Date;
  summary: string;
  storyline: string;
  stock: number;
  price: number;
  genres: IGenre[];
  platforms: IPlatform[];
  companies: ICompany[];
  slug: string;
  imageUri?: string;
  imageFilename?: string;
  imageMimetype?: string;
  imageOriginalname?: string;
}
