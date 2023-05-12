import {HttpHeaders} from "@angular/common/http";

export class HttpHeaderCreator{
  createHeader(): HttpHeaders{
    let token = localStorage.getItem('token')
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
  }
}
