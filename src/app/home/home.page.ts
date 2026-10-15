import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, 
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonIcon 
} from '@ionic/angular/standalone'; // Importa cada componente que usas en tu HTML
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { calculatorOutline, timeOutline, barChartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    // Agrega aquí todos los componentes importados arriba
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, 
    IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonIcon
  ]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ calculatorOutline, timeOutline, barChartOutline });
  }

  ngOnInit() {}
}