import { Injectable, resource, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  private listId = signal<string>("");
  private tasks = resource({
    params: () => ({listId: this.listId()}),
    loader: (params) => this.getTasksForList(params.params.listId),
    defaultValue: [] as Task[]
  });

  readonly tasksExposed = this.tasks.asReadonly();

  private getTasksForList(listId: string): Promise<Task[]> {
    const allTasks: Task[] = [
          { id: '1', listId: '1', title: 'first task of list1', description: 'something to say, not much', completed: true },
          { id: '2', listId: '1', title: 'second task of list1', description: 'just testing features', completed: false },
          { id: '3', listId: '2', title: 'first task of list2', description: 'this is just a description', completed: false },
        ];
    
        return new Promise<Task[]>((resolve)=>{
          setTimeout(() => {
            const listTasks = allTasks.filter(task => task.listId === listId);
            resolve(listTasks);
          }, 2000);
        });
  }

  loadTasksForList(listId: string) {
    this.listId.set(listId); 
  }

  toggleTaskCompletion(task: Task) {
    //1- perform optimistic update of the task in the UI
    this.tasks.update((currentTasks)=>{
      currentTasks = currentTasks.map(t => {
        if(t.id === task.id){
          return {...t, completed: !t.completed};
        }
        return t;
      });
      return currentTasks;
    });

    //2- update the task calling the API backend.

    //3- after success update, reload tasks resource
  }


}
