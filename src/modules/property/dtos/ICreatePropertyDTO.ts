import { PropertyImages } from "../models/PropertyImages";

interface ICreatePropertyDTO {
  name: string;
  userId: number;
  description: string;
  numberOfBedrooms: number;
  lease: boolean;
  price: number;
  propertyTypeId: number;
  province: string;
  county: string;
  street: string;
  district: string;
  residenceNumber: number;
  images: PropertyImages[];
}
export { ICreatePropertyDTO };
