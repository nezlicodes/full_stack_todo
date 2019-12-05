import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  public id:any;
  public task:any
  public loading = false;
  constructor(private activatedRoute: ActivatedRoute, private taskService: TasksService, private router: Router) { }

  ngOnInit() {
    this.task = this.activatedRoute.snapshot.data.task;
  }

  deleteTask(id) {
    this.loading = true;
    this.taskService.deleteTask(id).subscribe(
      res => {
        this.loading = false;
        this.router.navigateByUrl('/tasks');
      },
      err =>
      {
        this.loading = false;
        console.log(err);
      }
    )
  }

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

}
