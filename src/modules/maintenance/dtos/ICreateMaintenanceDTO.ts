interface ICreateMaintenanceDTO {
  description: string;
  openingDate: Date;
  closingDate: Date;
  cost: number;
  employeeId: number;
  propertyId: number;
}
export { ICreateMaintenanceDTO };
