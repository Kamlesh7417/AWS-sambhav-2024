import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div [ngClass]="containerClass" role="status">
      <div class="animate-spin rounded-full border-2" 
           [ngClass]="spinnerClass"
           [ngStyle]="{'width.px': size, 'height.px': size}">
      </div>
      <span *ngIf="text" class="ml-2 text-sm text-gray-600">{{ text }}</span>
    </div>
  `
})
export class LoadingSpinnerComponent {
  @Input() size: number = 24;
  @Input() text: string = '';
  @Input() center: boolean = false;

  get containerClass(): string {
    return this.center ? 'flex justify-center items-center' : 'inline-flex items-center';
  }

  get spinnerClass(): string {
    return 'border-primary-500 border-t-transparent';
  }
}