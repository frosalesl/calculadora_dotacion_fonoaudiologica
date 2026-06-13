import { Injectable, inject } from '@angular/core';
import { Database, ref, set, push, get } from '@angular/fire/database'; // <-- Usamos 'get' clásico de Firebase
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database = inject(Database);

  constructor() { }

  /**
   * Obtiene los datos del perfil del usuario usando 'get' para evitar errores de contexto
   */
  getUserByUid(uid: string): Observable<any> {
    const dbRef = ref(this.database, `usuarios/${uid}`);
    // Convertimos la Promesa de 'get' en un Observable para no romper tu Login
    return from(get(dbRef)).pipe(
      map(snapshot => {
        if (snapshot.exists()) {
          return snapshot.val(); // Retorna { email, rol } directo si existe
        }
        return null;
      })
    );
  }

  /**
   * Guardar datos en una ruta específica
   */
  setData(path: string, data: any): Promise<void> {
    const dbRef = ref(this.database, path);
    return set(dbRef, data);
  }

  /**
   * Agregar datos a una lista con ID automático
   */
  pushData(path: string, data: any) {
    const dbRef = ref(this.database, path);
    return push(dbRef, data);
  }
}