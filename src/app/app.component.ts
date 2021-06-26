import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Ler o livro PBB - Fabio e Paulo.', false));
    this.todos.push(new Todo(2, 'Ler o livro A arte de ligar o foda-se - Mark.', false));
    this.todos.push(new Todo(3, 'Cortar o cabelo.', true));
    this.todos.push(new Todo(4, 'Estudar Angular - Balta.', false));
  }
}
