import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class ControlUploadFileService{

	options : any;
	
	constructor(
        public http: HttpClient
    ){
        let headers = new HttpHeaders({'Content-Type': 'text/plain'});
        headers.append('Access-Control-Allow-Origin', 'true');
		this.options = {headers: headers,withCredentials: true};
    }

    upload(url, archivo): Observable<any>{	
		
        let parametros = JSON.stringify(archivo);
        let observa = this.http.post(
			url
            ,parametros
            ,this.options
        );		
        return observa;
            
    }
}