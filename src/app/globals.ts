import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  static cvesistema: string = 'isalud_visorconsultaext';
  //static cvesistema: string = 'isalud_directoriotelefonico';
  static titulopagina: string = 'iSalud | ';
  static nombretoken: string = 'token_session';
  static ipserviciosApp: string = 'http://192.168.5.170:8000';
  static ipserviciosMul: string = 'http://192.168.5.170:8000';
  static ipserviciosReporteador: string = 'http://192.168.5.170:8001';
  static ipPlantillaIntranet: string = 'http://192.168.5.170:8000';
  static ipSeguridad: string = 'http://192.168.1.214:8002/isalud_administrador_backp/web';
  static ipclienteser: string = 'http://192.168.5.170:40004';
  static ipRecursosPlantilla: string = 'http://admin.isalud-conval.org';
//  static ipclienteser: string = 'http://192.168.5.170:9090';
  static uriseguridad: string = '/servicios/seguridad';
  static urigenerales: string = '/servicios/generales';
  static uridisponibilidad: string = '/servicios/disponibilidad';
  static urireportes: string = '/servicios/reportes';
  static uricatalogos: string = '/servicios/catalogos';
  static uridirectorio: string = '/servicios/directorio';
  static uriincidentes: string = '/servicios/incidentes';
  static uridepositosbancarios: string = '/servicios/depositosbancarios';
  static uriagenda: string = '/servicios/agenda';
  static uriplantillaintranet: string = '/servicios/menu';
  static intranet: string = '/servicios/intranet';
}