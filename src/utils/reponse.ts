export class ResponseService {
  
  static okResponse(code: string, message = {}, details?: any) {
    return { code, message, details };
  };
  
  static _200(message) {
    return this.okResponse('OK', message, message);
  }
}
  
  