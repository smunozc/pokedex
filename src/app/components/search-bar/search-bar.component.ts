import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  styleUrl: './search-bar.component.scss',
  animations: [
    trigger('showClearButton', [
      state('show', style({
        right: '4.6rem'
      })),
      state('hide', style({
        right: '*'
      })),
      transition('hide <=> show', [animate('0.5s ease-in-out')])
    ])
  ]
})
export class SearchBarComponent {
  @Input({required: true}) searchBarPlaceHolder!: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

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
   * Emit the search value (if any) when the user presses Enter or clicks on the search icon.
   */
  protected searchValue(): void {
    if(this.searchFormControl.valid) {
      this.search.emit(this.searchFormControl.value || undefined);
    }
  }

  /**
   * Clear the search value when the user clicks on the clear icon.
   */
  protected clearSearchValue(): void {
    if(this.searchFormControl.valid) {
      this.searchFormControl.reset();
    }
  }
}
