import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { TodoServiceService } from '../services/todo-service.service';
import { Observable } from 'rxjs';
import {config} from '../model/task.moudle';
import {Task} from '../model/task.moudle';
import { map } from 'rxjs/operators';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListComponent } from '../todo-list/todo-list.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	tasks: Observable<any[]>;

	constructor(private taskService: TodoServiceService) { 
		
	}

  	ngOnInit() {
		
	}


	toEditMode():void{
		this.taskService.setEditMode(true);
	}

	isEditMode():boolean{
		return this.taskService.isEditMode();
	}

}