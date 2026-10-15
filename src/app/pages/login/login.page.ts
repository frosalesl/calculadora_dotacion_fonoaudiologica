import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonInput, 
  IonButton,
  ToastController 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth'; // Firebase Auth funcional
import { DatabaseService } from '../../services/database'; // Ruta de dos niveles corregida
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonItem, 
    IonInput, 
    IonButton
  ]
})
export class LoginPage {
  private auth = inject(Auth);
  private dbService = inject(DatabaseService);
  private router = inject(Router);
  private toastController = inject(ToastController);

  // Estructura de datos para el formulario
  loginData = {
    email: '',
    password: ''
  };

  async onLogin() {
    const { email, password } = this.loginData;

    if (!email || !password) {
      this.presentToast('Por favor, completa todos los campos.', 'warning');
      return;
    }

    // 1. Validar credenciales en Firebase Authentication
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid; // Tomamos el UID único asignado al usuario

        // 2. Buscar el perfil y rol en Realtime Database usando ese UID
        this.dbService.getUserByUid(uid)
          .pipe(take(1))
          .subscribe({
            next: (userData) => {
              console.log('Datos recuperados de Firebase:', userData);
              
              if (userData) {
                this.presentToast(`¡Bienvenido! Rol: ${userData.rol}`, 'success');
                
                // Guardar la sesión de manera local en el navegador
                localStorage.setItem('user_session', JSON.stringify({ uid, email, ...userData }));
                
                // Redireccionar a la pantalla principal
                this.router.navigate(['/home']);
              } else {
                // El usuario se validó en Auth, pero no existe el nodo en la base de datos
                this.presentToast('Usuario autenticado, pero sin perfil en la base de datos.', 'warning');
              }
            },
            error: (err) => {
              console.error('Error al obtener datos de Realtime:', err);
              this.presentToast('Error al cargar perfil de usuario.', 'danger');
            }
          });
      })
      .catch((error) => {
        console.error('Error de autenticación:', error);
        // Control de errores comunes de Firebase Auth
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          this.presentToast('Credenciales incorrectas.', 'danger');
        } else {
          this.presentToast('Error al intentar iniciar sesión.', 'danger');
        }
      });
  }

  /**
   * Muestra un mensaje emergente temporal en la pantalla
   */
  async presentToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color
    });
    await toast.present();
  }
}