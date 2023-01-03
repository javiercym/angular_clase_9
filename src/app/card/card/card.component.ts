import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  check!: string;
  mostrar = false;

  onModelChange() {
    if (this.check) {
      this.mostrar = true;
      console.log('Checkbox activado');
      
    } else {
      this.mostrar = false;
      console.log('Checkbox desactivado');
    }
  }

}
