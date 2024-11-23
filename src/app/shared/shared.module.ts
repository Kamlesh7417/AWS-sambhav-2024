import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { NgChartsModule } from 'ng2-charts';

import { PaginationComponent } from './components/pagination/pagination.component';
import { DateRangeFilterComponent } from './components/date-range-filter/date-range-filter.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';

// Import all Lucide icons
import {
  Package, FileText, Truck, MessageSquare, LayoutDashboard,
  LogOut, Search, Filter, Plus, Calendar, Clock, MapPin,
  DollarSign, Bell, AlertTriangle, TrendingUp, Download,
  Eye, Tag, User, Building, Headphones, Paperclip, Send,
  Video, Phone, X, ChevronLeft, ChevronRight, Sparkles
} from 'lucide-angular';

const LUCIDE_ICONS = {
  Package, FileText, Truck, MessageSquare, LayoutDashboard,
  LogOut, Search, Filter, Plus, Calendar, Clock, MapPin,
  DollarSign, Bell, AlertTriangle, TrendingUp, Download,
  Eye, Tag, User, Building, Headphones, Paperclip, Send,
  Video, Phone, X, ChevronLeft, ChevronRight, Sparkles
};

@NgModule({
  declarations: [
    PaginationComponent,
    DateRangeFilterComponent,
    LoadingSpinnerComponent,
    StatusBadgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    LucideAngularModule.pick(LUCIDE_ICONS)
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    LucideAngularModule,
    PaginationComponent,
    DateRangeFilterComponent,
    LoadingSpinnerComponent,
    StatusBadgeComponent
  ]
})
export class SharedModule { }