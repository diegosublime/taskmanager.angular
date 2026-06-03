import { Component, input, output } from '@angular/core';
import { List } from '../../models/list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-component',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  listDeleted = output<string>();
  list = input<List>() ;

  deleteList() {
    const list = this.list();
    if (!list) {
      console.log('No list to delete');
      return;
    }
    this.listDeleted.emit(list.id);
  }
}
