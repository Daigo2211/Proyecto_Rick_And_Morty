import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
  `,
  styles: ['h1 { color: red; }']
})
export class PageNotFoundComponent {}
