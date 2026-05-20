import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trashOutline, trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import {
  IonContent,
  IonIcon,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonSearchbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonSearchbar
  ]
})

export class HomePage {

  constructor() {
    // Registras el icono para que Ionic lo pueda renderizar
    addIcons({ trashOutline, trash });
  }

  //---------------------------------------------------
  // HOSPITAL
  //---------------------------------------------------

  hospital = '';

  hospitalSeleccionado = false;

  hospitales: string[] = [

    "Hospital Regional Dr. Juan Noé Crevani",
    "Hospital Dr. Ernesto Torres Galdames",
    "Hospital 21 de Mayo",
    "Hospital de Mejillones",
    "Hospital Dr. Carlos Cisternas",
    "Hospital Dr. Leonardo Guzmán",
    "Hospital Dr. Marcos Macuada",
    "Hospital Dr. Jerónimo Méndez Arancibia",
    "Hospital Dr. Manuel Magalhaes Medling",
    "Hospital Provincial del Huasco Monseñor Ariztía",
    "Hospital San José del Carmen",
    "Hospital de Salamanca",
    "Hospital Dr. Antonio Tirado Lanas de Ovalle",
    "Hospital Dr. José Arraño",
    "Hospital San Juan de Dios de Combarbalá",
    "Hospital Dr. Humberto Elorza Cortés",
    "Hospital San Juan de Dios de La Serena",
    "Hospital San Juan de Dios de Vicuña",
    "Hospital San Pablo",
    "Hospital San Pedro",
    "Hospital Carlos Van Buren",
    "Hospital Claudio Vicuña",
    "Hospital Dr. Eduardo Pereira Ramírez",
    "Hospital San José de Casablanca",
    "Hospital Adriana Cousiño",
    "Hospital Centro Geriátrico Paz de la Tarde",
    "Hospital de Petorca",
    "Hospital de Quilpué",
    "Hospital Dr. Gustavo Fricke",
    "Hospital Dr. Mario Sánchez Vergara",
    "Hospital Dr. Víctor Hugo Moll",
    "Hospital Juana Ross de Edwards",
    "Hospital San Agustín",
    "Hospital San Martín",
    "Hospital Santo Tomás",
    "Hospital San Camilo de San Felipe",
    "Hospital San Antonio",
    "Hospital San Francisco",
    "Hospital San Juan de Dios de Los Andes",
    "Complejo Hospitalario San José",
    "Hospital Clínico de Niños Dr. Roberto del Río",
    "Hospital de Til Til",
    "Instituto Nacional del Cáncer",
    "Hospital Adalberto Steeger",
    "Hospital de Curacaví",
    "Hospital de Peñaflor",
    "Hospital Félix Bulnes Cerda",
    "Hospital San José de Melipilla",
    "Hospital San Juan de Dios de Santiago",
    "Instituto Traumatológico Dr. Teodoro Gebauer",
    "Hospital Dr. Luis Valentín Ferrada",
    "Hospital Clínico San Borja Arriarán",
    "Hospital de Urgencia Asistencia Pública",
    "Centro de Referencia de Salud de Maipú",
    "Hospital Dr. Luis Calvo Mackenna",
    "Hospital del Salvador de Santiago",
    "Hospital Dr. Luis Tisné",
    "Hospital Hanga Roa",
    "Instituto de Neurocirugía Dr. Alfonso Asenjo",
    "Instituto Nacional del Tórax",
    "Instituto Nacional de Rehabilitación Infantil PAC",
    "Instituto Nacional de Geriatría",
    "Hospital Metropolitano",
    "Hospital Barros Luco Trudeau",
    "Hospital Dr. Lucio Córdova",
    "Hospital Dr. Exequiel González Cortés",
    "Hospital El Pino",
    "Hospital Parroquial de San Bernardo",
    "Hospital Psiquiátrico El Peral",
    "Hospital San Luis",
    "Complejo Hospitalario Dr. Sótero del Río",
    "Hospital Padre Alberto Hurtado",
    "Hospital San José de Maipo",
    "Hospital La Florida Dra. Eloísa Díaz Insunza",
    "Hospital de Coínco",
    "Hospital de Litueche",
    "Hospital de Lolol",
    "Hospital de Marchigüe",
    "Hospital de Nancagua",
    "Hospital de Pichidegua",
    "Hospital de Pichilemu",
    "Hospital de Santa Cruz",
    "Hospital Del Salvador de Peumo",
    "Hospital Dr. Ricardo Valenzuela Sáez",
    "Hospital Mercedes de Chimbarongo",
    "Hospital Regional de Rancagua",
    "Hospital San Juan de Dios de San Fernando",
    "Hospital San Vicente de Tagua-Tagua",
    "Hospital Santa Filomena de Graneros",
    "Hospital de Constitución",
    "Hospital de Curepto",
    "Hospital de Hualañé",
    "Hospital de Licantén",
    "Hospital de Molina",
    "Hospital de Teno",
    "Hospital Dr. Abel Fuentealba Lagos de San Javier",
    "Hospital Dr. Benjamín Pedreros",
    "Hospital Dr. César Garavagno Burotto",
    "Hospital Presidente Carlos Ibáñez del Campo",
    "Hospital San José de Parral",
    "Hospital San Juan de Dios de Cauquenes",
    "Hospital San Juan de Dios de Curicó",
    "Hospital Clínico Herminda Martín",
    "Hospital Comunitario de Salud Familiar de Bulnes",
    "Hospital de Coelemu",
    "Hospital de El Carmen",
    "Hospital de Quirihue",
    "Hospital Pedro Morales Campos",
    "Hospital de San Carlos",
    "Hospital Dr. Guillermo Grant Benavente",
    "Hospital Clorinda Avello",
    "Hospital San Agustín de Florida",
    "Hospital de Lota",
    "Hospital San José de Coronel",
    "Hospital Traumatológico de Concepción",
    "Hospital de Tomé",
    "Hospital Las Higueras",
    "Hospital Penco Lirquén",
    "Complejo Asistencial Dr. Víctor Ríos Ruiz",
    "Hospital Comunitario de Laja",
    "Hospital de Mulchén",
    "Hospital Comunitario y Familiar de Nacimiento",
    "Hospital Comunitario de Yumbel",
    "Hospital Dr. Roberto Muñoz Urrutia de Huépil",
    "Hospital de Contulmo",
    "Hospital de Lebu",
    "Hospital Intercultural Kallvu Llanka",
    "Hospital Provincial Dr. Rafael Avaría",
    "Hospital San Vicente de Arauco",
    "Hospital de Collipulli",
    "Hospital de Lonquimay",
    "Hospital de Purén",
    "Hospital Dr. Dino Stagno M.",
    "Hospital Dr. Mauricio Heyermann",
    "Hospital Dr. Oscar Hernández E.",
    "Hospital San José de Victoria",
    "Complejo Asistencial Padre Las Casas",
    "Hospital de Carahue",
    "Hospital de Galvarino",
    "Hospital de Gorbea",
    "Hospital Intercultural de Nueva Imperial",
    "Hospital Familiar y Comunitario de Loncoche",
    "Hospital de Pitrufquén",
    "Hospital de Toltén",
    "Hospital de Vilcún",
    "Hospital de Villarrica",
    "Hospital Dr. Abraham Godoy Peña",
    "Hospital Dr. Arturo Hillerns Larrañaga",
    "Hospital Dr. Eduardo González Galeno",
    "Hospital Dr. Hernán Henríquez Aravena",
    "Hospital San Francisco de Pucón",
    "Hospital Clínico Regional",
    "Hospital de Lanco",
    "Hospital de Los Lagos",
    "Hospital de Paillaco",
    "Hospital de Río Bueno",
    "Hospital Juan Morey",
    "Hospital Padre Bernabé de Lucerna",
    "Hospital Santa Elisa de San José de la Mariquina",
    "Hospital de Corral",
    "Hospital Base San José de Osorno",
    "Hospital de Puerto Octay",
    "Hospital de Purranque Dr. Juan Hepp Dubiau",
    "Hospital de Río Negro",
    "Hospital Pu Mulen Quilacahuín",
    "Hospital Futa Sruka Lawenche Kunko Mapu Mo",
    "Hospital de Calbuco",
    "Hospital de Fresia",
    "Hospital de Frutillar",
    "Hospital de Futaleufú",
    "Hospital de Llanquihue",
    "Hospital de Maullín",
    "Hospital de Palena",
    "Hospital de Puerto Montt",
    "Hospital Comunitario de Achao",
    "Hospital de Ancud",
    "Hospital de Castro",
    "Hospital Comunitario de Queilén",
    "Hospital de Quellón",
    "Hospital de Puerto Aysén",
    "Hospital Dr. Jorge Ibar",
    "Hospital Dr. Leopoldo Ortega R.",
    "Hospital Lord Cochrane",
    "Hospital Regional de Coyhaique",
    "Hospital Dr. Augusto Essmann Burgos",
    "Hospital Clínico de Magallanes",
    "Hospital Dr. Marco Antonio Chamorro",
    "Hospital Cristina Calderón de Puerto Williams"
  ];


  hospitalesFiltrados: string[] = [];

  //---------------------------------------------------
  // CAMAS
  //---------------------------------------------------

  camasBasicasAdultos: number = 0;
  camasBasicasPediatricas: number = 0;

  camasMediasAdultos: number = 0;
  camasMediasPediatricas: number = 0;

  camasCriticasAdultos: number = 0;
  camasCriticasPediatricas: number = 0;

  horasAmbulatorias: number = 0;

  //---------------------------------------------------
  // RESULTADOS
  //---------------------------------------------------

  mostrarResultados = false;

  tabla: any = {

    basicas30: {},
    basicas70: {},
    basicasPed: {},

    mediasAdultos: {},
    mediasPed: {},

    criticasAdultos: {},
    criticasPed: {},

    ambulatorio: {},
    total: {},

    resumen: {

      adultos: {
        hs: 0,
        porcentaje: 0
      },

      pediatricos: {
        hs: 0,
        porcentaje: 0
      },

      ambulatorio: {
        hs: 0,
        porcentaje: 0
      }
    }
  };

  interpretacionSemanal = '';
  interpretacionNoHabiles = '';
  interpretacionContrato = '';

  porcentajeHospitalario = 0;
  porcentajeAmbulatorio = 0;

  jce = 0;

  //---------------------------------------------------
  // ERRORES
  //---------------------------------------------------

  errores = {

    camasBasicasAdultos: false,
    camasBasicasPediatricas: false,

    camasMediasAdultos: false,
    camasMediasPediatricas: false,

    camasCriticasAdultos: false,
    camasCriticasPediatricas: false,

    horasAmbulatorias: false
  };

  //---------------------------------------------------
  // BUSCAR HOSPITAL
  //---------------------------------------------------

  filtrarHospitales(event: any) {

    const valor =
      event.detail.value?.toLowerCase() || '';

    this.hospitalSeleccionado = false;

    this.hospitalesFiltrados =
      this.hospitales.filter(h =>
        h.toLowerCase().includes(valor)
      );
  }

  seleccionarHospital(h: string) {

    this.hospital = h;

    this.hospitalSeleccionado = true;

    this.hospitalesFiltrados = [];
  }

  //---------------------------------------------------
  // VALIDACIONES
  //---------------------------------------------------

  

  

  validarCampo(campo: string, valor: any) {
  // 1. Forzar a entero positivo
  if (valor !== null && valor !== undefined && valor !== '') {
    const stringValor = String(valor);
    const soloNumeros = stringValor.replace(/[^0-9]/g, ''); // Elimina cualquier cosa que no sea número
    const num = parseInt(soloNumeros, 10);
    
    // Asignar el valor limpio de vuelta a la variable
    (this as any)[campo] = isNaN(num) ? 0 : num;
  } else {
    (this as any)[campo] = 0;
  }

  // 2. Marcar error si es NaN (aunque el paso anterior lo previene)
  this.errores[campo as keyof typeof this.errores] = isNaN((this as any)[campo]);
}

// Asegurarse de que el cálculo use los valores ya limpios
parseNumero(valor: any): number {
  if (!valor) return 0;
  const n = parseInt(String(valor), 10);
  return isNaN(n) ? 0 : n;
}

// Bloqueo de teclas punto y coma además de negativos
  bloquearNegativos(event: KeyboardEvent) {
    const teclasProhibidas = ['-', 'e', 'E', '.', ',', '+'];
    if (teclasProhibidas.includes(event.key)) {
      event.preventDefault();
    }
  }

  validar(): boolean {

    const hayErrores =
      Object.values(this.errores)
      .some(e => e);

    return (
      this.hospitalSeleccionado &&
      !hayErrores
    );
  }

  

  //---------------------------------------------------
  // CALCULO PRINCIPAL
  //---------------------------------------------------

  calcular() {

    if (!this.validar()) return;

    //-------------------------------------------------
    // VARIABLES
    //-------------------------------------------------

    const CBA =
      this.parseNumero(
        this.camasBasicasAdultos
      );

    const CBP =
      this.parseNumero(
        this.camasBasicasPediatricas
      );

    const CMA =
      this.parseNumero(
        this.camasMediasAdultos
      );

    const CMP =
      this.parseNumero(
        this.camasMediasPediatricas
      );

    const CCA =
      this.parseNumero(
        this.camasCriticasAdultos
      );

    const CCP =
      this.parseNumero(
        this.camasCriticasPediatricas
      );

    const H =
      this.parseNumero(
        this.horasAmbulatorias
      );

    //-------------------------------------------------
    // FORMULA PAPER / MINSAL
    //-------------------------------------------------

    const basicasAdultos30 =
      (((CBA * 0.3) / 10) * 0.06) * 44;

    const basicasAdultos70 =
      (((CBA * 0.7) / 10) * 0.23) * 44;

    const basicasPediatricas =
      ((CBP / 10) * 0.06) * 44;

    const mediasAdultos =
      ((CMA / 10) * 0.23) * 44;

    const mediasPediatricas =
      ((CMP / 10) * 0.23) * 44;

    const criticasAdultos =
      ((CCA / 6) * 0.46) * 44;

    const criticasPediatricas =
      ((CCP / 6) * 0.23) * 44;

    //-------------------------------------------------
    // TOTAL HOSPITALARIO BASE
    //-------------------------------------------------

    const hospitalarioBase =

      basicasAdultos30 +
      basicasAdultos70 +

      basicasPediatricas +

      mediasAdultos +
      mediasPediatricas +

      criticasAdultos +
      criticasPediatricas;

    //-------------------------------------------------
    // AMBULATORIO
    //-------------------------------------------------

    const ambulatorioSemanal =
      H * 5;

    //-------------------------------------------------
    // DESCUENTO PROPORCIONAL
    //-------------------------------------------------

    const totalBase =
      hospitalarioBase +
      ambulatorioSemanal;

    const factorHospitalario =

      ambulatorioSemanal > 0

      ? hospitalarioBase / totalBase

      : 1;

    //-------------------------------------------------
    // AJUSTE PROPORCIONAL
    //-------------------------------------------------

    const ba30 =
      basicasAdultos30 *
      factorHospitalario;

    const ba70 =
      basicasAdultos70 *
      factorHospitalario;

    const bp =
      basicasPediatricas *
      factorHospitalario;

    const ma =
      mediasAdultos *
      factorHospitalario;

    const mp =
      mediasPediatricas *
      factorHospitalario;

    const ca =
      criticasAdultos *
      factorHospitalario;

    const cp =
      criticasPediatricas *
      factorHospitalario;

    //-------------------------------------------------
    // TOTALES
    //-------------------------------------------------

    const totalHospitalario =

      ba30 +
      ba70 +
      bp +
      ma +
      mp +
      ca +
      cp;

    const totalSemanal =

      totalHospitalario +
      ambulatorioSemanal;

    //-------------------------------------------------
    // RESUMEN ADULTOS / PEDIATRICOS
    //-------------------------------------------------

    const totalAdultos =

      ba30 +
      ba70 +
      ma +
      ca;

    const totalPediatricos =

      bp +
      mp +
      cp;

    //-------------------------------------------------
    // PORCENTAJES
    //-------------------------------------------------

    this.porcentajeHospitalario =

      totalSemanal === 0

      ? 0

      : (totalHospitalario / totalSemanal) * 100;

    this.porcentajeAmbulatorio =

      totalSemanal === 0

      ? 0

      : (ambulatorioSemanal / totalSemanal) * 100;

    //-------------------------------------------------
    // JCE
    //-------------------------------------------------

    this.jce =
      totalSemanal / 44;

    //-------------------------------------------------
    // TABLA
    //-------------------------------------------------

    this.tabla = {

      basicas30: {
        dh: ba30 / 5,
        hs: ba30,
        nh: ba30 / 5
      },

      basicas70: {
        dh: ba70 / 5,
        hs: ba70,
        nh: ba70 / 5
      },

      basicasPed: {
        dh: bp / 5,
        hs: bp,
        nh: bp / 5
      },

      mediasAdultos: {
        dh: ma / 5,
        hs: ma,
        nh: ma / 5
      },

      mediasPed: {
        dh: mp / 5,
        hs: mp,
        nh: mp / 5
      },

      criticasAdultos: {
        dh: ca / 5,
        hs: ca,
        nh: ca / 5
      },

      criticasPed: {
        dh: cp / 5,
        hs: cp,
        nh: cp / 5
      },

      ambulatorio: {
        dh: H,
        hs: ambulatorioSemanal,
        nh: 0
      },

      resumen: {

        adultos: {
          hs: totalAdultos,
          porcentaje:
            totalSemanal === 0
            ? 0
            : (totalAdultos / totalSemanal) * 100
        },

        pediatricos: {
          hs: totalPediatricos,
          porcentaje:
            totalSemanal === 0
            ? 0
            : (totalPediatricos / totalSemanal) * 100
        },

        ambulatorio: {
          hs: ambulatorioSemanal,
          porcentaje:
            totalSemanal === 0
            ? 0
            : (ambulatorioSemanal / totalSemanal) * 100
        }
      },

      total: {
        dh: totalSemanal / 5,
        hs: totalSemanal,
        nh: totalHospitalario / 5
      }
    };

    //-------------------------------------------------
    // INTERPRETACIONES
    //-------------------------------------------------

    this.interpretacionSemanal =

      `La dotación estimada corresponde a
      ${this.jce.toFixed(2)}
      jornadas completas equivalentes (JCE),
      equivalente a
      ${totalSemanal.toFixed(2)}
      horas semanales de cobertura
      fonoaudiológica.

      Del total calculado,
      ${this.porcentajeHospitalario.toFixed(1)}%
      corresponde a atención hospitalaria y
      ${this.porcentajeAmbulatorio.toFixed(1)}%
      a atención ambulatoria.`;

    this.interpretacionNoHabiles =

      `La propuesta de cobertura para días
      no hábiles corresponde a
      ${(totalHospitalario / 5).toFixed(2)}
      horas diarias de continuidad
      hospitalaria.`;

    this.interpretacionContrato =

      `Se recomienda distribuir la jornada
      clínica según el perfil asistencial
      del establecimiento, equilibrando
      actividades hospitalarias y
      ambulatorias.`;

    //-------------------------------------------------

    this.mostrarResultados = true;
  }

  //---------------------------------------------------
  // RESET
  //---------------------------------------------------

  resetear() {

    this.hospital = '';

    this.hospitalSeleccionado = false;

    this.hospitalesFiltrados = [];

    this.camasBasicasAdultos = Number(0);
    this.camasBasicasPediatricas = Number(0);

    this.camasMediasAdultos = Number(0);
    this.camasMediasPediatricas = Number(0);

    this.camasCriticasAdultos = Number(0);
    this.camasCriticasPediatricas = Number(0);

    this.horasAmbulatorias = Number(0);

    this.mostrarResultados = false;

    this.tabla = {

      basicas30: {},
      basicas70: {},
      basicasPed: {},

      mediasAdultos: {},
      mediasPed: {},

      criticasAdultos: {},
      criticasPed: {},

      ambulatorio: {},
      total: {},

      resumen: {

        adultos: {
          hs: 0,
          porcentaje: 0
        },

        pediatricos: {
          hs: 0,
          porcentaje: 0
        },

        ambulatorio: {
          hs: 0,
          porcentaje: 0
        }
      }
    };
  }
}