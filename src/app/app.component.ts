import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-newshore';

  isMenu: boolean = true;
  isInformation: boolean = true;

   /**
   *  Función para recibir dato de header y validar para despliegue o cierre de menú
   */
  watchMenu(){
    switch(true) {
      case this.isMenu && this.isInformation: {
        this.isMenu = false;
         break;
      }
      case !this.isMenu && this.isInformation: {
        this.isMenu = true;
         break;
      }
      case !this.isMenu && !this.isInformation: {
        this.isInformation = true;
        this.isMenu = true;
         break;
      }
      case this.isMenu && !this.isInformation: {
        this.isInformation = true;
      }
   }
  }

  menuInformation(){
    this.isInformation = this.isInformation ? false : true;
  }
}
