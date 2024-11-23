import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gray-50">
      <div class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'export-edge';
}