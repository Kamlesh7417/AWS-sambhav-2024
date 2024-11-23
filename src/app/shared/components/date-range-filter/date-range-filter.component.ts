import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html'
})
export class DateRangeFilterComponent {
  @Input() selectedRange: string = '';
  @Input() customRange: DateRange = { start: null, end: null };
  @Output() rangeChange = new EventEmitter<string>();
  @Output() customRangeChange = new EventEmitter<DateRange>();

  ranges = [
    { value: '', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'week', label: 'Last 7 Days' },
    { value: 'month', label: 'Last 30 Days' },
    { value: 'custom', label: 'Custom Range' }
  ];

  onRangeChange(value: string): void {
    this.rangeChange.emit(value);
  }

  onCustomRangeChange(type: 'start' | 'end', date: Date): void {
    const newRange = {
      ...this.customRange,
      [type]: date
    };
    this.customRangeChange.emit(newRange);
  }
}