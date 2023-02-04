import { Tags } from "./Tags";

export interface Coffee {
  id: string | number;
  ilustration: string;
  name: string;
  price: number;
  description: string;
  tag: Tags[];
}