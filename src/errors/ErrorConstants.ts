class ErrorConstants {
  public static readonly EMAIL_ALREADY_EXISTS: string =
    "Email já Existe no sistema";
  public static readonly EMAIL_OR_PASSWORD_NOT_EXISTS: string =
    "Email ou palavra passe não encontrado";
  public static readonly CREATE_CLIENT_ERROR: string = "Erro ao criar client";
  public static readonly CREATE_USER_ERROR: string = "Erro ao criar usuário";
  public static readonly CREATE_PROPERTY_TYPER_ERROR: string =
    "Erro ao cadastrar tipo de propriedade";
  public static readonly CREATE_PROPERTY_ERROR: string =
    "Erro ao cadastrar  propriedade";
  public static readonly CREATE_EMPLOYEE_ERROR: string =
    "Erro ao cadastrar funcionário";
  public static readonly CREATE_MAINTENACE_ERROR: string =
    "Erro ao cadastrar manutenção";
  public static readonly LIST_MAINTENACE_ERROR: string =
    "Erro ao listar manutenção";
  public static readonly CREATE_RESERVE_WITH_SAME_CLIENT_PROPERTY: string =
    "Erro ao criar uma reserva com mesmo cliente e propriedade";
  public static readonly CREATE_RESERVE_ERROR: string = "Erro ao criar reserva";
}
export { ErrorConstants };
