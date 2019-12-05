import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleTaskComponent } from '../single-task/single-task.component';
export interface Task {
 name: string;
  description: string;
  completed:any
}

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {

  public editTaskForm: FormGroup;
  constructor(private fb: FormBuilder,  public dialogRef: MatDialogRef<SingleTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit() {
    this.editTaskForm = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      completed: ['', Validators.required]
    })
  }

}
