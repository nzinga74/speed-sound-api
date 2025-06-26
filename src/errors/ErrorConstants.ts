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
  public static readonly CREATE_CONTRACT_WITH_SAME_CLIENT_PROPERTY: string =
    "Erro ao criar um contracto com mesmo cliente e propriedade";
  public static readonly CREATE_RESERVE_ERROR: string = "Erro ao criar reserva";
  public static readonly CREATE_CONTRACT_ERROR: string =
    "Erro ao criar contrato";
  public static readonly LIST_CONTRACT_ERROR: string =
    "Erro ao listar contrato";
  public static readonly LIST_RESERVE_ERROR: string = "Erro ao listar reservas";
  public static readonly LIST_PROPERTY_ERROR: string =
    "Erro ao listar propriedade";
  public static readonly CREATE_ALBUM_ERROR: string = "Erro ao cadastrar album";
  public static readonly CREATE_MUSIC_ERROR: string =
    "Erro ao cadastrar música";
  public static readonly FILE_UPLOAD_ERROR: string =
    "Erro ao fazer upload do arquivo";
  public static readonly ALBUM_VIEW_ALREADEY_EXISTS: string =
    "Já existe uma visualização por parte desse usuário";
  public static readonly FOLLOWER_ALREADY_EXISTS: string =
    "O usuário já segui esse cantor";
  public static readonly VIDEO_VIEW_ALREADY_EXISTS: string =
    "Já existe uma visualização por parte desse usuário";
  public static readonly ALBUM_LIST_ERROR: string =
    "Ocorreu algum erro ao listar os albums";
  public static readonly RADIO_COUNTRY_LIST_ERROR: string =
    "Ocorreu ao listar  de  país";
  public static readonly RADIO_STATION_COUNTRY_LIST_ERROR: string =
    "Ocorreu ao listar os Estações por país";
}
export { ErrorConstants };
