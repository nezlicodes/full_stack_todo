import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
	{
		path: '',
		component: AppComponent
		
	},
	{
        path: 'tasks',
        component: TaskListComponent
		
    },
    {
        path: 'about',
        component: AboutComponent
    }

];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}