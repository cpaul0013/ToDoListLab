import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  todoList: ToDo[] = [{name: "Walk the dog", completed: false},
  {name: "Take out the garbage", completed: true},
  {name: "Do the laungry", completed: true},
  {name: "Do the dishes", completed: false}
  ];
addItem(form:NgForm):void{
  let newItem = {name:form.form.value.name, completed:false};
  this.todoList.push(newItem);

}




  ngOnInit(): void {
  }
  completeTask(items:ToDo):ToDo{
    items.completed = true;
    return items;
  }

}
