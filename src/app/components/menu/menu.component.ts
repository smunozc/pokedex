import { Component } from '@angular/core';
import { MenuButtonComponent } from "./menu-button/menu-button.component";

@Component({
  selector: 'app-menu',
  imports: [MenuButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
