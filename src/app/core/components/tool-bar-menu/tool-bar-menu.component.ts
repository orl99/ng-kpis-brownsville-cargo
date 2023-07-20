import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar-menu',
  templateUrl: './tool-bar-menu.component.html',
  styleUrls: ['./tool-bar-menu.component.scss']
})
export class ToolBarMenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  showNav() {
    if (this.router.url === '/auth' || this.router.url === '/') {
      return false;
    }
    return true;
}

}
