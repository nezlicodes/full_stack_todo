import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleTaskComponent } from '../single-task/single-task.component';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
export interface Task {
 name: string;
  description: string;
  completed:any,
  id:any
}

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {

  public id:any;
  public editTaskForm: FormGroup;
  constructor(private fb: FormBuilder,  public dialogRef: MatDialogRef<SingleTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, private taskService: TasksService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.editTaskForm = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      completed: [0, Validators.required]
    })
  }

  updateTask(id) {
    this.taskService.updateTask(this.data.id, this.editTaskForm.value).subscribe(res => res, err => err)
  }
}
