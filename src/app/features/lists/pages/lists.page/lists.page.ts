import { Component, effect, inject, signal } from '@angular/core';
import { List } from '../../models/list';
import { ListsService } from '../../services/lists.service';
import { ListsComponent } from '../../components/lists.component/lists.component'; 


interface ListsServiceResponse { data?: List[]; isLoading: boolean; isError: boolean; };

@Component({
  selector: 'app-lists-page',
  imports: [ListsComponent],
  templateUrl: './lists.page.html',
  styleUrl: './lists.page.scss',
})
export class ListsPage { 

  readonly listService = inject(ListsService); 
 
  listsResource = this.listService.listsResourceExposed;
   
  async deleteList(id: string) {
    await this.listService.deleteListById(id); 
  }

  


constructor() {
    effect(() => {
      const data = this.listsResource.value();

      if (data) {
        console.log('HTTP response received:', data);
      }
    });
  }
  




// //load lists by user from service handling errors
//   getListsByUserResponse = toSignal(
//     this.listService.getListsForUser('user1').pipe(
//       map((response) => ({ data: response, isLoading: false, isError: false } as ListsServiceResponse)),
//       startWith({ data: undefined, isLoading: true, isError: false } as ListsServiceResponse),
//       catchError((error) =>{
//         console.error('Error fetching lists:', error);
//         return of({ data: undefined, isLoading: false, isError: true } as ListsServiceResponse); 
//       }) 
//     ), 
//     { initialValue: { 
//         data: undefined, 
//         isLoading: true, 
//         isError: false 
//       } as ListsServiceResponse 
//     }
//   );
 
//   //mapping response to separate signals to present in the template
//   lists = computed(() => this.getListsByUserResponse().data ?? []);
//   listsc = signal<List[]>(this.lists());  
//   isComponentLoadingLists = computed(() => this.getListsByUserResponse().isLoading);
//   isComponentErrorLoadingLists = computed(() => this.getListsByUserResponse().isError);

 
   
  //simple only computed version without loading and error states
  // lists = toSignal<List[] | undefined>(this.listService.getListsForUser('user1'), { 
  //   initialValue: undefined 
  // }); 
  // isComponentLoadingLists = computed(() => this.lists() === undefined);  
 
  //Older implementation, using subscriptions and signals to manage loading and error states manually.
  // ngOnInit() {
  //   // In a real application, you would get the user ID from an authentication service
  //   const userId = 'user1';
     
  //   // this.listService.getListsForUser(userId).subscribe({
  //   //   next: (lists) => {
  //   //     this.lists.set(lists);
  //   //     this.isComponentLoadingLists.set(false);
  //   //   },
  //   //   error: (error) => {
  //   //     console.error('Error fetching lists:', error);
  //   //     this.isComponentLoadingLists.set(false);
  //   //   }
  //   // });
 
  // }

}
