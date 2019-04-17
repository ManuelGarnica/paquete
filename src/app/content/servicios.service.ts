import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Globals } from '../globals';




@Injectable()
export class ServiciosService{
    options : any;
	
    constructor(
        public http: HttpClient
    ){
        let headers = new HttpHeaders({'Content-Type': 'text/plain'});
        headers.append('Access-Control-Allow-Origin', 'true');
		this.options = {headers: headers,withCredentials: true};
    }  
	login(usuario,contrasenia): Observable<any>{
		let parametros = JSON.stringify({
			"usuario" : usuario
			,"contrasenia" : contrasenia
		});
        let observa = this.http.post(Globals.ipSeguridad+Globals.uriseguridad+'/login'
            ,parametros
            ,this.options
        );
        return observa;
            
    }
	verificarSesion(): Observable<any>{
		let parametros = JSON.stringify({});
        let observa = this.http.post(Globals.ipSeguridad+Globals.uriseguridad+'/verificarsesion'
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

}