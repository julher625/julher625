import { Component } from '@angular/core'; // OnInit se llama apenas inicia el componente 

// Los que tienen @ son decoradores
@Component({
  selector: 'app-header', // Como lo llamare en el HTML principal
  templateUrl: './header.component.html', // Ubicación del HTML
  styleUrls: ['./header.component.sass'] // Ubicación del SASS (CSS con esteroides)
})

export class HeaderComponent {

  constructor() { }

  elements: Array<string> = ['Home', 'Proyects', 'Contact'];


}
