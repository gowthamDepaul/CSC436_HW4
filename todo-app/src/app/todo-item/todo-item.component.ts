import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task.moudle';
import {
  Input,        // <-- added,
  HostBinding
} from '@angular/core';

import { TodoServiceService } from '../services/todo-service.service';

import {DueDateEnum} from '../model/due_date_enum.moudle';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	@HostBinding('attr.class') cssClass = 'row';
	@Input() task: Task;

	dueDate:DueDateEnum;
	dueDateEnum = DueDateEnum;

  constructor(private taskService: TodoServiceService) {
  	this.dueDate = DueDateEnum.Days;
  }

  ngOnInit() {
    if(this.task.dueDate == "Urgent") this.dueDate = DueDateEnum.Urgent;
    if(this.task.dueDate == "Days") this.dueDate = DueDateEnum.Days;
    if(this.task.dueDate == "Week") this.dueDate = DueDateEnum.Week;
  }

  setUrgent():void
  {
  	this.dueDate = DueDateEnum.Urgent;
    this.task.dueDate = "Urgent";
    this.taskService.updateTask(this.task.id,this.task);
  }

  setDays():void
  {
  	this.dueDate = DueDateEnum.Days;
    this.task.dueDate = "Days";
    this.taskService.updateTask(this.task.id,this.task);
  }

  setWeek():void
  {
  	this.dueDate = DueDateEnum.Week;
    this.task.dueDate = "Week";
    this.taskService.updateTask(this.task.id,this.task);
  }

  edit(task)
  {
    this.taskService.setTobeEditedTask(task);
  }

  deleteTask(task)
  {
  	console.log(task);
  	this.taskService.deleteTask(task.id);
  }

}