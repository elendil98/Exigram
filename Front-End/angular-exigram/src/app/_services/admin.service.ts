import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
@Injectable specifica che AdminService partecipa al sistema di Injection dependency.
La classe AdminService andrà a fornire un servizio injectable e può
anche avere le sue injected dependencies

Il decoratore @Injectable() accetta oggetti metadata per il servizio,
come il decoratore @Component() fa per le classi di tipo component.

Quando si fornisce un servizio a livello root, Angular crea una istanza 
singola e condivisa di AdminService e esegue la Inject in ogni classe che la
richiede. Registrando il fornitore nel @Injectable metadata consente ad Angular
di ottimizzare un app rimuovendo il servizio se questo scade o non viene utilizzato.
*/

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

//  getAdmins(): Observable<Admin> {
    
// }

}
