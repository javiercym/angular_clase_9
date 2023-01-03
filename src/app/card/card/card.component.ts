import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  check!: string;
  mostrarMensaje = true;
  mostrarCard = false;

  onModelChange() {
    if (this.check) {
      this.mostrarMensaje = false;
      this.mostrarCard = true;
      console.log('Checkbox activado');
      
    } else {
      this.mostrarMensaje = true;
      this.mostrarCard = false;
      console.log('Checkbox desactivado');
    }
  }

}
