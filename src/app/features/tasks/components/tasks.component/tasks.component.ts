import { Component, input, output } from '@angular/core';
import { TaskComponent } from '../task.component/task.component';
import { Task } from '../../models/task';
@Component({
  selector: 'app-tasks-component',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  tasks = input.required<Task[]>();

  taskCompletionToggle = output<Task>();

  toggleTaskCompletion(task: Task){ 
    this.taskCompletionToggle.emit(task);
  }
}
