
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { 
  businessOutline, statsChartOutline, statsChart, trashOutline, trash, 
  bedOutline, personOutline, thermometerSharp, bagHandleSharp, bandageSharp, 
  personRemoveOutline, personRemoveSharp, personAddSharp, medicalOutline, 
  medicalSharp, bagAddSharp, warningOutline, briefcaseOutline, timeOutline, 
  addCircleOutline, analyticsOutline, ribbonOutline, calendarOutline, documentTextOutline, star, documentOutline, alarmOutline, refreshOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import {
  IonContent,
  IonIcon,
  IonFooter,
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
  IonImg,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonSearchbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dofo',
  standalone: true,
  templateUrl: './dofo.page.html',
  styleUrls: ['./dofo.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonIcon,
    IonFooter,
    IonHeader,
    IonImg,
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
    IonSearchbar,
    NgApexchartsModule
]
})
export class DofoPage {

  protected Math = Math;

  // --- Getters para gráficos ---
  get hospitalPediatricoHs(): number {
    return (this.tabla.basicasPed?.hs || 0)
        + (this.tabla.mediasPed?.hs || 0)
        + (this.tabla.criticasPed?.hs || 0);
  }

  get hospitalAdultoHs(): number {
    return (this.tabla.basicas30?.hs || 0)
        + (this.tabla.basicas70?.hs || 0)
        + (this.tabla.mediasAdultos?.hs || 0)
        + (this.tabla.criticasAdultos?.hs || 0);
  }

  get ambulatorioPediatricoHs(): number {
    return this.tabla.ambulatorioPediatrico?.hs || 0;
  }

  get ambulatorioAdultoHs(): number {
    return this.tabla.ambulatorioAdulto?.hs || 0;
  }

  constructor(private cdr: ChangeDetectorRef) {
    addIcons({businessOutline,statsChartOutline,documentOutline,trashOutline,alarmOutline,analyticsOutline,calendarOutline,refreshOutline,star,documentTextOutline,medicalOutline,briefcaseOutline,timeOutline,addCircleOutline,ribbonOutline,statsChart,warningOutline,medicalSharp,trash,bedOutline,personOutline,thermometerSharp,bagHandleSharp,bandageSharp,personRemoveOutline,personRemoveSharp,personAddSharp,bagAddSharp});
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
  horasAmbulatoriasPediatricas: number = 0;
  horasAmbulatoriasAdultos: number = 0;

  //---------------------------------------------------
  // RESULTADOS
  //---------------------------------------------------
  mostrarResultados = false;
  tabla: any = {
    basicas30: {},
    basicas70: {},
    basicasadulto100: {},
    basicasPed: {},
    mediasAdultos: {},
    mediasPed: {},
    criticasAdultos: {}, // Corregido a plural consecuente
    criticasPed: {},
    ambulatorioAdulto: {},
    ambulatorioPediatrico: {},
    totalAmbulatorio: {},
    total: {},
    contratos: {
      total: { jce44: 0, parcial22: 0, remanente: 0 },
      pediatria: { jce44: 0, parcial22: 0, remanente: 0 },
      adultos: { jce44: 0, parcial22: 0, remanente: 0 }
    },
    resumen: {
      hospitalizadoAdulto: { hs: 0, porcentaje: 0 },
      hospitalizadoPediatrico: { hs: 0, porcentaje: 0 },
      ambulatorioAdulto: { hs: 0, porcentaje: 0 },
      ambulatorioPediatrico: { hs: 0, porcentaje: 0 }
    }
  };
  

  interpretacionSemanal = '';
  interpretacionClinica = '';
  interpretacionNoHabiles = '';
  interpretacionContrato = '';

  porcentajeHospitalario = 0;
  porcentajeAmbulatorio = 0;
  jce = 0;

  // Interpretaciones específicas
  interpretacionGeneral = '';
  interpretacionDiaNoHabil = '';
  interpretacionHospitalariaPediatrica = '';
  interpretacionHospitalariaAdultos = '';
  interpretacionAmbulatoriaPediatrica = '';
  interpretacionAmbulatoriaAdultos = '';
  continuidadTotal = '';
  continuidadPediatrica = '';
  continuidadAdultos = '';
  contractualTotal = '';
  contractualPediatrica = '';
  contractualAdultos = '';
  cobertura7DiasTotal = '';
  cobertura7DiasPediatrica = '';
  cobertura7DiasAdultos = '';
  textoFinalObligatorio = '';

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
    horasAmbulatorias: false,
    ambulatorioAdulto: false,
    ambulatorioPediatrico: false
  };

  //---------------------------------------------------
  // BUSCAR HOSPITAL
  //---------------------------------------------------
filtrarHospitales(event: any) {
  // Obtenemos el valor de forma segura
  const valor = (event.detail.value || '').toLowerCase().trim();
  
  this.hospitalSeleccionado = false;

  // SI EL VALOR ESTÁ VACÍO, CERRAMOS LA LISTA Y SALIMOS
  if (valor === '') {
    this.hospitalesFiltrados = [];
    return;
  }

  // Si hay texto, filtramos
  this.hospitalesFiltrados = this.hospitales.filter(h =>
    h.toLowerCase().includes(valor)
  );
}

// Asegúrate de tener este método para cuando el usuario presiona la 'X'
  limpiarBusqueda() {
    this.hospital = '';
    this.hospitalesFiltrados = [];
    this.hospitalSeleccionado = false;
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
    if (valor !== null && valor !== undefined && valor !== '') {
      const stringValor = String(valor);
      const soloNumeros = stringValor.replace(/[^0-9]/g, '');
      const num = parseInt(soloNumeros, 10);
      (this as any)[campo] = isNaN(num) ? 0 : num;
    } else {
      (this as any)[campo] = 0;
    }
    this.errores[campo as keyof typeof this.errores] = isNaN((this as any)[campo]);
  }

  parseNumero(valor: any): number {
    if (!valor) return 0;
    const n = parseInt(String(valor), 10);
    return isNaN(n) ? 0 : n;
  }

  bloquearNegativos(event: KeyboardEvent) {
    const teclasProhibidas = ['-', 'e', 'E', '.', ',', '+'];
    if (teclasProhibidas.includes(event.key)) {
      event.preventDefault();
    }
  }

  validar(): boolean {
    const hayErrores = Object.values(this.errores).some(e => e);
    const tieneAlMenosUnaCama = (
      this.parseNumero(this.camasBasicasPediatricas) > 0 ||
      this.parseNumero(this.camasMediasPediatricas) > 0 ||
      this.parseNumero(this.camasCriticasPediatricas) > 0 ||
      this.parseNumero(this.camasBasicasAdultos) > 0 ||
      this.parseNumero(this.camasMediasAdultos) > 0 ||
      this.parseNumero(this.camasCriticasAdultos) > 0
    );

    return (
      this.hospitalSeleccionado &&
      !hayErrores &&
      tieneAlMenosUnaCama
    );
  }

  //---------------------------------------------------
  // CÁLCULO DE NARRATIVAS AUXILIARES
  //---------------------------------------------------
  private generarTextoContinuidad(nh: number, tipo: 'total' | 'pediatrica' | 'adultos'): string {
    const horas = nh.toFixed(2);

    if (tipo === 'total') {
      if (nh < 4.5) {
        return `-General: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios adultos y pediátricos. Dado que la carga estimada es inferior a 4,5 horas diarias, se sugiere que cada institución evalúe alternativas de cobertura mediante extensión horaria, horas extraordinarias u otros mecanismos locales según necesidad asistencial.`;
      }
      if (nh < 8) {
        return `-General: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios adultos y pediátricos. La carga proyectada sugiere la implementación de cobertura profesional organizada durante días no hábiles, considerando programación institucional y continuidad clínica según demanda asistencial.`;
      }
      return `-General: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios adultos y pediátricos. La carga asistencial proyectada respalda la implementación formal de cobertura clínica permanente durante días no hábiles, considerando organización institucional de turnos y continuidad operativa.`;
    }

    if (tipo === 'pediatrica') {
      if (nh < 4.5) {
        return `-Usuarios pediátricos: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios pediátricos. Dado que la carga proyectada es inferior a media jornada clínica diaria, se recomienda evaluar mecanismos flexibles de cobertura pediátrica según necesidad institucional.`;
      }
      if (nh < 8) {
        return `-Usuarios pediátricos: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios pediátricos. La carga asistencial proyectada sugiere programación organizada de continuidad clínica de usuarios pediátricos.`;
      }
      return `-Usuarios pediátricos: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios pediátricos. La carga proyectada respalda la implementación formal de cobertura profesional permanente para pacientes pediátricos.`;
    }

    if (nh < 4.5) {
      return `-Usuarios adultos: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios adultos. Dado que la carga proyectada es inferior a media jornada clínica diaria, se recomienda evaluar alternativas de cobertura flexible según requerimientos institucionales.`;
    }
    if (nh < 8) {
      return `-Usuarios adultos: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios adultos. La carga asistencial proyectada sugiere programación organizada de continuidad clínica de usuarios adultos.`;
    }
    return `-Usuarios adultos: Se estima un total de ${horas} horas por cada día no hábil para la atención de usuarios adultos. La carga proyectada respalda la implementación formal de cobertura profesional permanente para pacientes adultos.`;
  }

  private generarTextoContractual(horas: number): { t44: string; t22: string; tComp: string } {
    const cargos44 = Math.floor(horas / 44);
    const horasRestantes = horas - (cargos44 * 44);

    let cargos22 = 0;
    let horasComplementarias = horasRestantes;

    if (horasRestantes >= 22) {
      cargos22 = Math.floor(horasRestantes / 22);
      horasComplementarias = horasRestantes - (cargos22 * 22);
    }

    let t44 = '';
    let t22 = '';
    let tComp = '';

    if (cargos44 === 1) t44 = '1 jornada completa de 44 horas.';
    if (cargos44 > 1) t44 = `${cargos44} jornadas completas de 44 horas.`;

    if (cargos22 === 1) t22 = '1 jornada parcial de 22 horas.';
    if (cargos22 > 1) t22 = `${cargos22} jornadas parciales de 22 horas.`;

    const compRedondeadas = Number(horasComplementarias.toFixed(2));
    if (compRedondeadas === 1) tComp = '1 hora complementaria adicional.';
    if (compRedondeadas > 0 && compRedondeadas !== 1) tComp = `${compRedondeadas} horas complementarias adicionales.`;

    return { t44, t22, tComp };
  }

  private calcularSegmentosContrato(totalHoras: number) {
    let horasRestantes = Math.round(totalHoras * 100) / 100;
    
    const jce44 = Math.floor(horasRestantes / 44);
    horasRestantes %= 44;
    
    const parcial22 = Math.floor(horasRestantes / 22);
    horasRestantes %= 22;
    
    const remanente = Math.round(horasRestantes * 100) / 100;

    return {
      jce44: jce44,
      parcial22: parcial22,
      remanente: remanente
    };
  }

  // --- FUNCIÓN FÁBRICA PARA GRÁFICOS ---
  public getChartConfig(type: 'donut' | 'bar', series: number[], labels: string[]) {
    const isDonut = type === 'donut';
    
    return {
      chart: {
        type: type,
        height: isDonut ? 220 : 250,
        animations: { enabled: true, easing: 'easeinout', speed: 800 }
      },
      series: series,
      labels: labels,
      // Usando tu paleta: Turquesa, Gris Borde, Azul Oscuro
      colors: ['#00aeb3', '#cbd5e1', '#062638'], 
      plotOptions: {
        pie: isDonut ? { 
          donut: { 
            size: '65%',
            labels: { show: true } 
          } 
        } : {},
        bar: !isDonut ? { 
          columnWidth: '50%', 
          borderRadius: 4,
          distributed: true // Esto hace que cada barra use un color diferente si tienes varios labels
        } : {}
      },
      legend: { 
        position: 'bottom',
        labels: { colors: '#334155' } // Usando tu $gris-texto
      }
    };
  }

  //---------------------------------------------------
  // CÁLCULO PRINCIPAL
  //---------------------------------------------------
  calcular() {
    if (!this.validar()) return;

    const cbAdultoTotal = this.camasBasicasAdultos || 0;
    const cba30 = cbAdultoTotal * 0.3; 
    const cba70 = cbAdultoTotal * 0.7;

    this.tabla.basicas30 = {
      dh: cba30,
      hs: (cba30 / 10) * 0.06,
      nh: (cba30 / 10) * 0.06 
    };
    this.tabla.basicas70 = {
      dh: cba70,
      hs: (cba70 / 10) * 0.23, 
      nh: (cba70 / 10) * 0.23
    };

    const CBA = this.parseNumero(this.camasBasicasAdultos);
    const CBP = this.parseNumero(this.camasBasicasPediatricas);
    const CMA = this.parseNumero(this.camasMediasAdultos);
    const CMP = this.parseNumero(this.camasMediasPediatricas);
    const CCA = this.parseNumero(this.camasCriticasAdultos);
    const CCP = this.parseNumero(this.camasCriticasPediatricas);
    const HA  = this.parseNumero(this.horasAmbulatoriasAdultos);
    const HP  = this.parseNumero(this.horasAmbulatoriasPediatricas);

    this.tabla.ambulatorioAdulto = {
      dh: HA / 5, 
      hs: HA,
      nh: 0
    };

    const basicasAdultos30 = (((CBA * 0.3) / 10) * 0.06) * 44;
    const basicasAdultos70 = (((CBA * 0.7) / 10) * 0.23) * 44;
    const basicasAdultos100 = basicasAdultos30 + basicasAdultos70;

    const basicasPediatricas = ((CBP / 10) * 0.06) * 44;
    const mediasAdultos      = ((CMA / 10) * 0.23) * 44;
    const mediasPediatricas  = ((CMP / 10) * 0.23) * 44;
    const criticasAdultos    = ((CCA / 6) * 0.46) * 44;
    const criticasPediatricas  = ((CCP / 6) * 0.23) * 44;

    const hospitalarioBase =
      basicasAdultos30 + basicasAdultos70 + basicasPediatricas +
      mediasAdultos + mediasPediatricas + criticasAdultos + criticasPediatricas;

    const ambulatorioSemanal = HA + HP;
    const remanenteHospitalario = hospitalarioBase - ambulatorioSemanal;
    const factorHospitalario = ambulatorioSemanal > 0 ? (remanenteHospitalario / hospitalarioBase) : 1;

    const ba30  = basicasAdultos30 * factorHospitalario;
    const ba70  = basicasAdultos70 * factorHospitalario;
    const ba100 = basicasAdultos100 * factorHospitalario;
    const bp    = basicasPediatricas * factorHospitalario;
    const ma    = mediasAdultos * factorHospitalario;
    const mp    = mediasPediatricas * factorHospitalario;
    const ca    = criticasAdultos * factorHospitalario;
    const cp    = criticasPediatricas * factorHospitalario;

    const totalHospitalarioAjustado = ba30 + ba70 + bp + ma + mp + ca + cp;
    const totalSemanalAjustado = totalHospitalarioAjustado + ambulatorioSemanal;

    const totalAdultos = ba30 + ba70 + ma + ca;
    const totalPediatricos = bp + mp + cp;

    this.porcentajeHospitalario = totalSemanalAjustado === 0 ? 0 : (totalHospitalarioAjustado / totalSemanalAjustado) * 100;
    this.porcentajeAmbulatorio = totalSemanalAjustado === 0 ? 0 : (ambulatorioSemanal / totalSemanalAjustado) * 100;

    const jceHospitalario = hospitalarioBase / 44;
    const jceRemanente = remanenteHospitalario / 44;
    this.jce = jceHospitalario > jceRemanente ? jceHospitalario : jceRemanente;

    // 1. Horas Pediátricas Totales (Hospitalario + Ambulatorio)
    const totalPediatricoHs = bp + mp + cp + HP;
    const pedClinicas = ( (bp + mp + cp) * 0.77 ) + (HP * 0.84);
    const pedNoClinicas = ( (bp + mp + cp) * 0.23 ) + (HP * 0.16);

    // 2. Horas Adultas Totales (Hospitalario + Ambulatorio)
    const totalAdultoHs = ba30 + ba70 + ma + ca + HA;
    const aduClinicas = ( (ba30 + ba70 + ma + ca) * 0.77 ) + (HA * 0.84);
    const aduNoClinicas = ( (ba30 + ba70 + ma + ca) * 0.23 ) + (HA * 0.16);

    // Asignación estructurada y robusta del objeto tabla
    this.tabla = {
      basicas30: { dh: ba30 / 5, hs: ba30, nh: ba30 / 5 },
      basicas70: { dh: ba70 / 5, hs: ba70, nh: ba70 / 5 },
      basicasadultos100: { dh: ba100 / 5, hs: ba100, nh: ba100 / 5 },
      basicasPed: { dh: bp / 5, hs: bp, nh: bp / 5 },
      mediasAdultos: { dh: ma / 5, hs: ma, nh: ma / 5 },
      mediasPed: { dh: mp / 5, hs: mp, nh: mp / 5 },
      criticasAdultos: { dh: ca / 5, hs: ca, nh: ca / 5 },
      criticasPed: { dh: cp / 5, hs: cp, nh: cp / 5 },
      ambulatorio: { dh: ambulatorioSemanal / 5, hs: ambulatorioSemanal, nh: 0 },
      ambulatorioAdulto: { dh: HA / 5, hs: HA, nh: 0 },
      ambulatorioPediatrico: { dh: HP / 5, hs: HP, nh: 0 },
      
      resumen: {
        hospitalizadoAdultos: {
          hs: totalAdultos,
          porcentaje: totalSemanalAjustado === 0 ? 0 : (totalAdultos / totalSemanalAjustado) * 100
        },
        hospitalizadoPediatricos: {
          hs: totalPediatricos,
          porcentaje: totalSemanalAjustado === 0 ? 0 : (totalPediatricos / totalSemanalAjustado) * 100
        },
        ambulatorioAdulto: {
          hs: HA,
          porcentaje: totalSemanalAjustado === 0 ? 0 : (HA / totalSemanalAjustado) * 100
        },
        ambulatorioPediatrico: {
          hs: HP,
          porcentaje: totalSemanalAjustado === 0 ? 0 : (HP / totalSemanalAjustado) * 100
        }
      },
      
      total: {
        dh: totalSemanalAjustado / 5,
        hs: totalSemanalAjustado,
        nh: totalHospitalarioAjustado / 5
      },
      
      contratos: {
        total: this.calcularSegmentosContrato(totalSemanalAjustado),
        pediatria: this.calcularSegmentosContrato(totalPediatricos + HP),
        adultos: this.calcularSegmentosContrato(totalAdultos + HA)
      },

      distribucion: {
        pediatrica: {
          totalHs: totalPediatricoHs,
          clinicas: pedClinicas,
          noClinicas: pedNoClinicas
        },
        adultos: {
          totalHs: totalAdultoHs,
          clinicas: aduClinicas,
          noClinicas: aduNoClinicas
        }
      }
    };

    // Narrativas e Interpretaciones finales
    const totalHoras = this.tabla.total.hs;
    const jceTotal = (totalHoras / 44).toFixed(2);
    const nhTotal = this.tabla.total.nh;

    const horasPediatricas = totalPediatricos;
    const jcePed = (horasPediatricas / 44).toFixed(2);
    const pctPed = totalHoras > 0 ? ((horasPediatricas / totalHoras) * 100).toFixed(1) : '0';

    const horasAdultos = totalAdultos;
    const jceAdulto = (horasAdultos / 44).toFixed(2);
    const pctAdulto = totalHoras > 0 ? ((horasAdultos / totalHoras) * 100).toFixed(1) : '0';

    this.interpretacionSemanal = `La estimación de dotación fonoaudiológica para el ${this.hospital} corresponde a ${totalHoras.toFixed(1)} horas semanales de lunes a viernes, equivalentes a ${jceTotal} JCE. Días no hábiles: ${nhTotal.toFixed(1)} horas por cada día.`;
    this.interpretacionClinica = `DISTRIBUCIÓN:\n- Área Pediátrica: ${horasPediatricas.toFixed(1)} hrs (${jcePed} JCE), representando el ${pctPed}% de la carga total.\n- Área Adultos: ${horasAdultos.toFixed(1)} hrs (${jceAdulto} JCE), representando el ${pctAdulto}% de la carga total.\n\nContinuidad Adultos (Sáb-Dom): ${(this.tabla.total.nh * 2).toFixed(1)} horas estimadas.`;
    this.interpretacionContrato = `Los resultados entregados corresponden a una estimación referencial de dotación fonoaudiológica basada en capacidad instalada hospitalaria y continuidad asistencial. Se recomienda que cada establecimiento supervise el desempeño profesional para garantizar cobertura efectiva.`;

    const nhPediatricos = (bp + mp + cp) / 5;
    const nhAdultos = (ba30 + ba70 + ma + ca) / 5;

    const total7Dias = totalHoras + (nhTotal * 2);
    const total7DiasPediatrico = (totalPediatricos + HP) + (nhPediatricos * 2);
    const total7DiasAdultos = (totalAdultos + HA) + (nhAdultos * 2);

    const contractualTotalCalc = this.generarTextoContractual(totalSemanalAjustado);
    const contractualPedCalc = this.generarTextoContractual(totalPediatricos + HP);
    const contractualAdultosCalc = this.generarTextoContractual(totalAdultos + HA);

    this.interpretacionGeneral = `-La estimación de dotación fonoaudiológica para el ${this.hospital} corresponde a ${totalHoras.toFixed(2)} horas semanales de lunes a viernes, equivalentes a ${jceTotal} JCE de fonoaudiología.`;
    this.interpretacionDiaNoHabil = `-La estimación de dotación fonoaudiológica para el ${this.hospital} corresponde a ${nhTotal.toFixed(2)} horas por cada día no hábil.`;
    this.interpretacionHospitalariaPediatrica = `-Usuarios pediátricos: se estima un total de ${horasPediatricas.toFixed(2)} horas semanales, equivalentes a ${jcePed} JCE, representando el ${pctPed}% de la carga total.`;
    this.interpretacionHospitalariaAdultos = `-Usuarios adultos: se estima un total de ${horasAdultos.toFixed(2)} horas semanales, equivalentes a ${jceAdulto} JCE, representando el ${pctAdulto}% de la carga clínica total.`;
    
    this.interpretacionAmbulatoriaPediatrica = `-Usuarios pediátricos: se estima un total de ${HP.toFixed(2)} horas semanales, equivalentes a ${(HP / 44).toFixed(2)} JCE.`;
    this.interpretacionAmbulatoriaAdultos = `-Usuarios adultos: se estima un total de ${HA.toFixed(2)} horas semanales, equivalentes a ${(HA / 44).toFixed(2)} JCE.`;

    this.continuidadTotal = this.generarTextoContinuidad(nhTotal, 'total');
    this.continuidadPediatrica = this.generarTextoContinuidad(nhPediatricos, 'pediatrica');
    this.continuidadAdultos = this.generarTextoContinuidad(nhAdultos, 'adultos');

    this.contractualTotal = `-Sugerencia general: La estimación institucional corresponde a ${totalSemanalAjustado.toFixed(2)} horas semanales equivalentes a ${(totalSemanalAjustado / 44).toFixed(2)} JCE. Distribución: ${contractualTotalCalc.t44} ${contractualTotalCalc.t22} ${contractualTotalCalc.tComp}`.trim();
    this.contractualPediatrica = `-Sugerencia usuarios pediátricos: La estimación corresponde a ${(totalPediatricos + HP).toFixed(2)} horas semanales equivalentes a ${((totalPediatricos + HP) / 44).toFixed(2)} JCE. Distribución: ${contractualPedCalc.t44} ${contractualPedCalc.t22} ${contractualPedCalc.tComp}`.trim();
    this.contractualAdultos = `-Sugerencia usuarios adultos: La estimación corresponde a ${(totalAdultos + HA).toFixed(2)} horas semanales equivalentes a ${((totalAdultos + HA) / 44).toFixed(2)} JCE. Distribución: ${contractualAdultosCalc.t44} ${contractualAdultosCalc.t22} ${contractualAdultosCalc.tComp}`.trim();

    this.cobertura7DiasTotal = `-Cobertura global: La cobertura fonoaudiológica institucional estimada para continuidad asistencial de siete días corresponde a ${total7Dias.toFixed(2)} horas semanales, distribuidas en ${totalHoras.toFixed(2)} horas de atención entre lunes y viernes y ${(nhTotal * 2).toFixed(2)} horas destinadas a continuidad asistencial durante sábados y domingos.`;
    this.cobertura7DiasPediatrica = `-Cobertura atención usuarios pediátricos: La cobertura fonoaudiológica de usuarios pediátricos estimada para continuidad asistencial de siete días corresponde a ${total7DiasPediatrico.toFixed(2)} horas semanales.`;
    this.cobertura7DiasAdultos = `-Cobertura atención usuarios adultos: La cobertura fonoaudiológica de usuarios adultos estimada para continuidad asistencial de siete días corresponde a ${total7DiasAdultos.toFixed(2)} horas semanales.`;
    
    this.textoFinalObligatorio = `Los resultados entregados corresponden a una estimación referencial de dotación fonoaudiológica basada en capacidad instalada hospitalaria y continuidad asistencial. Se sugiere revisar las orientaciones técnicas ministeriales para lograr el rendimiento establecido de dos a tres atenciones por hora. Se recomienda que cada establecimiento supervise el correcto desempeño de los profesionales dentro de las horas asignadas para actividades clínicas, con el objetivo de garantizar la continuidad, oportunidad y cobertura efectiva de atención de usuarios adultos y pediátricos.`;

    this.mostrarResultados = true;

    this.cdr.detectChanges();

  }
  

  //---------------------------------------------------
  // RESET CLEAN
  //---------------------------------------------------
  resetear() {
    this.hospital = '';
    this.hospitalSeleccionado = false;
    this.hospitalesFiltrados = [];

    this.camasBasicasAdultos = 0;
    this.camasBasicasPediatricas = 0;
    this.camasMediasAdultos = 0;
    this.camasMediasPediatricas = 0;
    this.camasCriticasAdultos = 0;
    this.camasCriticasPediatricas = 0;
    this.horasAmbulatorias = 0;
    this.horasAmbulatoriasAdultos = 0;
    this.horasAmbulatoriasPediatricas = 0;

    this.mostrarResultados = false;

    this.tabla = {
      basicas30: {}, basicas70: {}, basicasadultos100: {}, basicasPed: {},
      mediasAdultos: {}, mediasPed: {}, criticasAdultos: {}, criticasPed: {},
      ambulatorio: {}, ambulatorioAdulto: {}, ambulatorioPediatrico: {}, total: {},
      contratos: {
        total: { jce44: 0, parcial22: 0, remanente: 0 },
        pediatria: { jce44: 0, parcial22: 0, remanente: 0 },
        adultos: { jce44: 0, parcial22: 0, remanente: 0 }
      }
    };
  }
}