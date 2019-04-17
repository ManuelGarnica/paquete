import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Globals } from '../globals';


@Injectable()
export class ServiciosIntranetService{
    options : any;
	
    constructor(
        public http: HttpClient
    ){
        let headers = new HttpHeaders({'Content-Type': 'text/plain'});
        headers.append('Access-Control-Allow-Origin', 'true');
		this.options = {headers: headers,withCredentials: true};
    }

	obtenerNoticias(): Observable<any>{
		let parametros = JSON.stringify({});
        let observa = this.http.post(
			Globals.ipPlantillaIntranet
			+Globals.uriplantillaintranet
			+'/verNoticias'
            ,parametros
            ,this.options
        );
        return observa;
    }
	obtenerComunicadosRecientes(): Observable<any>{
		let parametros = JSON.stringify({});
        let observa = this.http.post(
			Globals.ipPlantillaIntranet
			+Globals.uriplantillaintranet
			+'/verComunicados'
            ,parametros
            ,this.options
        );
        return observa;
    }
	obtenerSistemas(): Observable<any>{
		let parametros = JSON.stringify({});
        let observa = this.http.post(
			Globals.ipPlantillaIntranet
			+Globals.uriplantillaintranet
			+'/verSistemas'
            ,parametros
            ,this.options
        );
        return observa;
    }
	obtenerMenuModulo(sistema,clasificador): Observable<any>{
		let parametros = JSON.stringify({
			"sistema":sistema
			,"clasificador":clasificador
		});
        let observa = this.http.post(
			Globals.ipPlantillaIntranet
			+Globals.uriplantillaintranet
			+'/verMenuModulo'
            ,parametros
            ,this.options
        );
        return observa;
    }
	obtenerMenuNavegacion(): Observable<any>{
		let parametros = JSON.stringify({});
        let observa = this.http.post(
			Globals.ipPlantillaIntranet
			+Globals.uriplantillaintranet
			+'/verMenuNavegacion'
            ,parametros
            ,this.options
        );
        return observa;
    }
	verDatosDelSistema(sistema): Observable<any>{
		let parametros = JSON.stringify({"sistema":sistema});
        let observa = this.http.post(
			Globals.ipPlantillaIntranet
			+Globals.uriplantillaintranet
			+'/verDatosDelSistema'
            ,parametros
            ,this.options
        );
        return observa;
    }
	logout(): Observable<any>{
		let parametros = JSON.stringify({});
        let observa = this.http.post(Globals.ipSeguridad+Globals.uriseguridad+'/logout'
            ,parametros
            ,this.options
        );
        return observa;
            
    }
}