import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class TestService {

    // C'est une autre forme d'observable

    dataEmitter: Subject<string> = new Subject();

    sendData(data: string) {
        // envoyer des données 
        this.dataEmitter.next(data);
    }
}