import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  template: `
    <span [ngClass]="badgeClass">
      {{ status }}
    </span>
  `
})
export class StatusBadgeComponent {
  @Input() status: string = '';
  @Input() type: 'order' | 'shipment' | 'document' = 'order';

  get badgeClass(): string {
    const baseClasses = 'px-2 py-1 text-xs font-semibold rounded-full';
    
    switch (this.type) {
      case 'order':
        return `${baseClasses} ${this.getOrderStatusClass()}`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }

  private getOrderStatusClass(): string {
    switch (this.status.toLowerCase()) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}