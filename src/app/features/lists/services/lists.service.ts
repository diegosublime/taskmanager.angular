import { Injectable, resource, signal } from '@angular/core';
import { List } from '../models/list';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListsService {

  //Private signals and resources
  private userId = signal('user1');
  private singleListId = signal("");
    
  private listsResource = resource({
    params: () => ({userId: this.userId()}),
    loader: (params) => this.getListsForUser(params.params.userId),
    defaultValue: [] as List[]
  });

  private listByUserResource = resource({
      params: () => ({listId: this.singleListId()}),
      loader: (params) => this.getSingleListById(params.params.listId),
      defaultValue: undefined as List | undefined
  });

   //Publicly exposed readonly versions of the resources to be used in the components
  readonly listsResourceExposed = this.listsResource.asReadonly();
  readonly listByUserIdResourceExposed = this.listByUserResource.asReadonly(); 
 
  private getListsForUser(userId: string): Promise<List[]> { 

    const allLists: List[] = [
      { id: '1', userId: 'user1', name: 'user 1 list 1', description: 'This is the first list for user 1' },
      { id: '2', userId: 'user1', name: 'user 1 list 2', description: 'This is the second list for user 1' },
      { id: '3', userId: 'user2', name: 'user 2 list 1', description: 'This is the first list for user 2' }
    ];

    return new Promise<List[]>((resolve)=>{
      setTimeout(() => {
        const userLists = allLists.filter(list => list.userId === userId);
        resolve(userLists);
      }, 2000);
    });
  }

  private getSingleListById(id: string): Promise<List | undefined> { 

    const allLists: List[] = [
      { id: '1', userId: 'user1', name: 'user 1 list 1', description: 'This is the first list for user 1' },
      { id: '2', userId: 'user1', name: 'user 1 list 2', description: 'This is the second list for user 1' },
      { id: '3', userId: 'user2', name: 'user 2 list 1', description: 'This is the first list for user 2' }
    ];

    return new Promise<List | undefined>((resolve)=>{
      setTimeout(() => {
        const list = allLists.find(list => list.id === id);
        resolve(list);
      }, 2000);
    });
  }

  deleteListById(id: string): Promise<void> {  
    this.listsResource.set(this.listsResource.value().filter(list => list.id !== id))  
    //this.listsResource.reload();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, 500);
    });
  }

  getListById(urlParamListId: string): void { 
    
    this.singleListId.set(urlParamListId);   
  }

}
