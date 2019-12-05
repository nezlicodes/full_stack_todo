import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterState } from '@angular/router';
import { TasksService } from './tasks.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private taskService:TasksService) { }

  resolve(){
    let tasks = this.taskService.getAllTasks();
    return tasks
  }
}
