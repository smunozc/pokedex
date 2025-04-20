import { Component, HostListener, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'search-bar',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input({required: true}) searchBarPlaceHolder!: string;
  protected inputFocused: boolean = false;

  @HostListener('window:resize', ['$event'])
  protected getSearchBarAlignmentClass(event?: Event): string {
    return (event?.target as Window)?.innerWidth ?? window.innerWidth < 600
    ? 'items-top pt-12'
    : 'items-center';
  }
}
