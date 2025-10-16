export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data found!",
  CREATE_FAILED = "Create is failed!",
  UPDATE_FAILED = "Update is failed!",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  constructor(code: HttpCode, message: Message) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

export default Errors;
