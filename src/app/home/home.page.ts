import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router'; // <-- Importamos RouterLink para la navegación nativa
import { addIcons } from 'ionicons';
import { calculatorOutline, timeOutline, barChartOutline } from 'ionicons/icons'; // <-- Iconos nuevos

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink // <-- ¡No olvides agregarlo aquí para que funcione en el HTML!
  ]
})
export class HomePage implements OnInit {

  constructor() {
    // Registramos los nuevos iconos de la interfaz
    addIcons({ calculatorOutline, timeOutline, barChartOutline });
  }

  ngOnInit() {}
}