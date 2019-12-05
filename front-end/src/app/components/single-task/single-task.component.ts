import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  public id:any;
  public task:any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.activatedRoute.snapshot.data.task;
  }

}
