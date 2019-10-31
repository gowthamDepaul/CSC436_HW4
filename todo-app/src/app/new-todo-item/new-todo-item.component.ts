import { Component, OnInit } from '@angular/core';

import { Task } from '../model/task.moudle'

import { TodoServiceService } from '../services/todo-service.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  constructor(private taskService:TodoServiceService) { }

  myTask:Task;

  ngOnInit() {
  	this.myTask = this.taskService.getTobeEditedTask();
  }

  /*submit():void{
  	console.log(this.myTask);
  	this.taskService.addTask(this.myTask);
  	$window.location.href = '/index';
  }*/

  submit():void {
  	console.log(this.myTask);

    if(this.myTask.id!=null && this.myTask.id!="0")
    {
      this.taskService.updateTask(this.myTask.id,this.myTask);
    }
    else
    {
      this.taskService.addTask(this.myTask);
    }
  	

    this.taskService.setEditMode(false);


    //window.location.reload();
  };

}