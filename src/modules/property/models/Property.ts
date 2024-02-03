import { Prisma } from "@prisma/client";
import { PropertyAddress } from "./PropertyAddress";
import { PropertyImages } from "./PropertyImages";
import { PropertyType } from "./PropertyType";

class Property {
  id: number;
  name: string;
  description: string;
  numberOfBedrooms: number;
  lease?: boolean;
  price: Prisma.Decimal;
  created_at?: Date;
  updated_at?: Date;
  addressId: number;
  propertyTypeId: number;
  address?: PropertyAddress;
  propertyType?: PropertyType;
  userId: number;
  PropertyImages?: PropertyImages[];
}

export { Property };
