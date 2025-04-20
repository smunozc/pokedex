import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'menu-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input({ required: true }) targetUrl!: string;
  @Input({ required: true }) buttonIconName!: string;
}
