import { Property } from "@modules/property/models/Property";
import { Employee } from "./Employee";

class Maintenance {
  id: number;
  description: string;
  openingDate: Date;
  closingDate: Date;
  cost: number;
  employee?: Employee[];
  employeeId: number;
  property?: Property[];
  propertyId: number;
}
export { Maintenance };
