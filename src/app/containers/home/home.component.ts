import { Component } from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: 'home',
  imports: [SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly searchBarPlaceHolder: string = "¿Qué Pokémon buscas?"
}
