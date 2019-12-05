import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';import { slideInAnimation } from './animations';
import { RoutingInterceptorService } from './services/routing-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'front-end';

  constructor(private router: Router, private navInterceptor: RoutingInterceptorService) {
    router.events.subscribe(navInterceptor.navigationInterceptor);
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
