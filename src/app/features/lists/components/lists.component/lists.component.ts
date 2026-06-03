import { Component } from '@angular/core';
import { input } from '@angular/core';
import { List } from '../../models/list';
import { ListComponent } from '../list.component/list.component';
import { output } from '@angular/core';
@Component({
  selector: 'app-lists-component',
  imports: [ListComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
})
export class ListsComponent {
  lists = input<List[]>()
  listDeleted = output<string>();

  deleteList(id: string) { 
    this.listDeleted.emit(id); 
    console.log(`Delete list emission received in lists component: ${id}`);
  }

}
