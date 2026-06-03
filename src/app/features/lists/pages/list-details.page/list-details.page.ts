import { Component, inject, input, signal } from '@angular/core';
import { TasksComponent } from '../../../tasks/components/tasks.component/tasks.component';
import { List } from '../../models/list';
import { ListsService } from '../../services/lists.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { Task } from '../../../tasks/models/task';
import { TaskService } from '../../../tasks/services/task.service';

@Component({
  selector: 'app-list-details.page',
  imports: [TasksComponent],
  templateUrl: './list-details.page.html',
  styleUrl: './list-details.page.scss',
})
export class ListDetailsPage {
  route = inject(ActivatedRoute);
  listsService = inject(ListsService);
  tasksService = inject(TaskService);

  currentList = this.listsService.listByUserIdResourceExposed;
  currentTasks = this.tasksService.tasksExposed;
  
  toggleTaskCompletion(task: Task){
    this.tasksService.toggleTaskCompletion(task);
  }
  
  ngOnInit() {
    const urlParamListId = this.route.snapshot.paramMap.get('id')??'';
    //this.listsService.getListById(urlParamListId);
    this.tasksService.loadTasksForList(urlParamListId);
  }
   
}





//  temoralTasks = signal<Task[]>([
//     {
//       id: '1',
//       listId: '1',
//       title: 'Task 1',
//       description: 'This is the first task for list 1',
//       completed: false
//     },
//     {
//       id: '2',
//       listId: '1',
//       title: 'Task 2',
//       description: 'This is the second task for list 1',
//       completed: true
//     }, 
//   ]);

//   toggleTaskCompletion(task: Task){
//     this.temoralTasks.update((tasks) => {
//       return tasks.map(t => {
//         if(t.id === task.id){
//           return {...t, completed: !t.completed};
//         }
//         return t;
//       });
//     });
//   }