export interface IGame {
  id: string;
  title: string;
  price: number;
  createdAt: Date;
  thumbnail: string;
  descountPrice?: number;
  descountPorcentage?: number;
}