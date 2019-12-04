import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {
  constructor(private tasksService: TasksService) { }
  public tasks  = [];
  ngOnInit() {
    this.tasksService.getAllTasks().subscribe(res => {this.tasks = res; console.log(res)}, err => console.log(err));
  }

}
