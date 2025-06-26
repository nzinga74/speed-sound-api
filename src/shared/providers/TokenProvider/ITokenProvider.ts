interface ITokenProvider {
  sign(subject: string): string;
}
export { ITokenProvider };
