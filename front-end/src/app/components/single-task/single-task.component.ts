import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  public id:any;
  public task:any
  constructor(private activatedRoute: ActivatedRoute, private tasksService:TasksService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tasksService.getSingleTask(this.id).subscribe(res => this.task = res, err=> console.error(err));
  }

}
