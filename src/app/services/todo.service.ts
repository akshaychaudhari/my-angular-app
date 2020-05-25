import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

//Options for HTTP request
const HttpOptions = {
  headers: new HttpHeaders({
    'content/type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5'

  constructor(private http:HttpClient) { }

  // Get todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);  
  }

  //Toggle Completed
  toggleCompleted(todo: Todo):Observable<any>{

    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.put(url, todo, HttpOptions);  
  }
}
