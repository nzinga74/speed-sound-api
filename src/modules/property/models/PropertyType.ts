import { Property } from "./Property";

class PropertyType {
  id?: number;
  type: string;
  created_at?: Date;
  updated_at?: Date;
  Property?: Property[];
}

export { PropertyType };
