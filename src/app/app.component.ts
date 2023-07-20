import { Component } from '@angular/core';

// Services
import { ThemeAppService } from './core/services/theme-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-kpis-brownsville-cargo';
  constructor(private themeAppSer: ThemeAppService) {
    themeAppSer.load();
  }
}
