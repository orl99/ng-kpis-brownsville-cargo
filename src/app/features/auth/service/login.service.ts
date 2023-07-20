import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Models
import { UserSessionI } from '../../../core/models/userSession.model';
@Injectable()
export class LoginService {

  constructor(htpp$: HttpClient) {

  }

  /**
   * postLogin()
   *  @param body: UserSession
   * This method will make a http resquest to the endpoint in orther to authenticate
   * @return jw-user-response
   */
  public postLogin(body: UserSessionI) {
    // TODO: AUTH
  }
}
