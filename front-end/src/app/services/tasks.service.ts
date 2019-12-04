import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorHandlerService, HandleError  } from './http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private handleError: HandleError
  constructor(private http: HttpClient,  private httpErrorHandler: HttpErrorHandlerService) { 
    this.handleError = httpErrorHandler.createHandleError('TasksService')
  }
  getAllTasks(): Observable<any> {
    return this.http.get(environment.apiUrl)
    .pipe( catchError(this.handleError('getAllTasks', [])) )
  }
}
