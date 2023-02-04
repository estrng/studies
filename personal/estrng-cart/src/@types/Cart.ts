import { SelectedItem } from "./Operation";

export interface CartState {
  id: number | string;
  items: SelectedItem[];
}
