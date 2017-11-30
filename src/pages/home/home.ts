import { Component } from '@angular/core';
import { TodoProvider } from '../../providers/todo/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoProvider]
})
export class HomePage {

  private todos = [];
  private items = [];

  constructor(public todoService:TodoProvider) {
    this.getTodos();
  }

  public getTodos() {
    //call the service TodoService
    this.todoService.findAll().subscribe(response => 
      {
        this.todos = response;
        this.items = this.todos;
      });

  }

  public initializeItems() {
    this.items = this.todos;
  }

  public getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
      this.items = this.items.filter((item) => {
        return (item.userId.toString().indexOf(val) > -1);
      });

    }
  }

}