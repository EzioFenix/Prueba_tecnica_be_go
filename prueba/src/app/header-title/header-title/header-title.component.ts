import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.css'
})
export class HeaderTitleComponent {

  @Input() title: string = 'Default Title';
  @Input() redirectBackUrl: string = '';

  constructor(
    private router: Router
  ) { }

  redirectToBack(): void {
    this.router.navigate([this.redirectBackUrl]);
  }
}
