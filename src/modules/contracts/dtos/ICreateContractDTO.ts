interface ICreateContractDTO {
  description: string;
  propertyId: number;
  userId: number;

  clientId: number;

  transactionDate: Date;
  transaction_price: number;
}
export { ICreateContractDTO };
