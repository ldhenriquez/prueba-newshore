import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isBrowser: boolean = false;
  isMenuMobile: boolean = true;

  @Output() nextMenuMobile = new EventEmitter<any>();

  /**
   *  Función para enviar un output a app-component y despliegue menú
   */
  menu(){
    this.isMenuMobile = this.isMenuMobile ? false : true;
    this.nextMenuMobile.emit();
  }

}
