import { Client } from "@modules/accounts/models/Client";
import { User } from "@modules/accounts/models/User";

class Reserve {
  id: number;
  userId: number;
  user?: User;
  propertyId: number;
  clientId: number;
  client?: Client;
  isActived?: boolean;
  estimatedDate?: Date;
  scheduledDate?: Date | null;
}
export { Reserve };
