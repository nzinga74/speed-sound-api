interface ICreateUserDto {
  email: string;
  password: string;
  name: string;
  lastname: string;
  province: string;
  county: string;
  street: string;
  district: string;
  residenceNumber: number;
}

export { ICreateUserDto };
