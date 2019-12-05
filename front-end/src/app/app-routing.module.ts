import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/about/about.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { ResolverService } from './services/resolver.service';

const routes: Routes = [
	{
        path: 'tasks',
        component: TaskListComponent,
        resolve: {tasks: ResolverService}
		
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'create-task',
        component: CreateTaskComponent
    },
    {
        path:'tasks/:id',
        component: SingleTaskComponent
    }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}