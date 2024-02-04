import { Client } from "@modules/accounts/models/Client";
import { User } from "@modules/accounts/models/User";
import { Property } from "@modules/property/models/Property";

class Contract {
  id?: number;
  description: string;
  propertyId: number;
  property?: Property[];
  userId: number;
  user?: User[];
  clientId: number;
  client?: Client[];
  transactionDate: Date;
  transaction_price: number;
  created_at?: Date;
  updated_at?: Date;
}
export { Contract };
