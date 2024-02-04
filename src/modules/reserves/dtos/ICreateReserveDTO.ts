interface ICreateReserveDTO {
  userId: number;
  propertyId: number;
  clientId: number;
  isActived: boolean;
  estimatedDate: Date;
}

export { ICreateReserveDTO };
