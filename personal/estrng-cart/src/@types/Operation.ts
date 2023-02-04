import { Coffee } from "./Coffee";

export interface SelectedItem {
  operation_id: string | number;
  quantity: number;
  coffee: Coffee;
}