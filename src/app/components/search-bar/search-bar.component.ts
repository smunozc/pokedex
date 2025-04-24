import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'search-bar',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input({required: true}) searchBarPlaceHolder!: string;
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  protected inputFocused: boolean = false;
  protected searchFormControl: FormControl<string|null> = new FormControl(null, Validators.required);
  protected theme: string;

  constructor() {
    // Get system theme preference
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.theme = event.matches ? 'dark' : 'light';
    });
  }

  /**
   * Get the search bar alignment class based on the window size.
   * If the window size is less than 600px, the search bar will be aligned to the top.
   * 
   * @returns {string} The alignment class for the search bar.
   * The class will be 'items-top pt-12' if the window size is less than 600px, otherwise 'items-center'.
   */
  @HostListener('window:resize', ['$event'])
  protected getSearchBarAlignmentClass(event?: Event): string {
    return (event?.target as Window)?.innerWidth ?? window.innerWidth < 600
    ? 'items-top pt-12'
    : 'items-center';
  }

  /**
   * Emit the search value (if any) when the user presses Enter or clicks on the search icon.
   */
  protected search(): void {
    if(this.searchFormControl.valid) {
      this.searchValue.emit(this.searchFormControl.value || undefined);
    }
  }
}
