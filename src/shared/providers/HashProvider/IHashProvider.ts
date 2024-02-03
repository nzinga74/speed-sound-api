interface IHashProvider {
  hash(str: string, salt: number): Promise<string>;
  compare(str: string, strHashed: string): Promise<boolean>;
}

export { IHashProvider };
