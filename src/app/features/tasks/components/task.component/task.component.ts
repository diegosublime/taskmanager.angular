import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-component',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  taskCompletionToggle = output<Task>();

  toggleTaskCompletion(){ 
    this.taskCompletionToggle.emit(this.task());
  }
}
