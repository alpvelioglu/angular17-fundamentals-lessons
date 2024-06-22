import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    @for(todo of todos(); track todo.id) {
    <label
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
    >
      <input
        type="checkbox"
        [checked]="todo.completed"
        (change)="updateTodo(todo)"
      />
      {{ todo.title }}
    </label>
    }
  `,
  styles: `
      label {
        display: block;
      }
    `,
})
export class AppComponent {

  todos = signal<Todo[]>([
    {
      id: 1,
      title: "Learn Angular",
      completed: true,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ]);

  constructor() {
    effect(() => {
      console.log('todos', this.todos());
      console.log('completedTodos', this.completedTodos());
    });
  }
  completedTodos = computed(() => {
    return this.todos().filter(todo => todo.completed).length;
  });

  updateTodo(todo: Todo) {
    this.todos.update((todoList) =>
      todoList.map((todoEntry) => {
        if (todo.id === todoEntry.id)
          todoEntry.completed = !todoEntry.completed;
        return todoEntry;
      })
    );
  }
}
