import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  public urlTodo = "https://jsonplaceholder.typicode.com/todos";

  constructor(public http: HttpClient) {
  }

  public findAll():Observable<any>{
    return this.http.get(this.urlTodo);
  }

}
