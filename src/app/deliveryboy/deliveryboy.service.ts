import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deliveryboy } from './deliveryboy';
import { Observable } from 'rxjs';

@Injectable()
export class DeliveryboyService {
    baseUrl = "http://localhost:8080/";

    headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
    constructor(private http: HttpClient) { }

    registrationDetailsOfDeliveryboy(deliveryboy: Deliveryboy): Observable<Deliveryboy> {
        console.log(Deliveryboy);

        return this.http.post<Deliveryboy>(this.baseUrl + "/signUp", deliveryboy, { headers: this.headers });
    }
    logInDetailsOfDeliveryboy(email: string, password: string) {

        return this.http.get<Deliveryboy>(this.baseUrl + "/logindeliveryboy/" + email + "/" + password);
    }
}
