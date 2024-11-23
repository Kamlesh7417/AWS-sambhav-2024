import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { path: '/', icon: 'LayoutDashboard', label: 'Dashboard' },
    { path: '/orders', icon: 'Package', label: 'Orders' },
    { path: '/documents', icon: 'FileText', label: 'Documents' },
    { path: '/shipments', icon: 'Truck', label: 'Shipments' },
    { path: '/chat', icon: 'MessageSquare', label: 'Chat' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}