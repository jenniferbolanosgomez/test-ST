import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animals } from '../models/animal';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AnimalService {
    myAppUrl = 'https://localhost:44337/';
    myApiUrl = 'api/Animal/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'

        })

    }

    constructor(private http: HttpClient) { }


    getListAnimals(): Observable<Animals[]> {

        return this.http.get<Animals[]>(this.myAppUrl + this.myApiUrl);
    }

    showAnimal(id: number): Observable<Animals> {
        return this.http.get<Animals>(this.myAppUrl + this.myApiUrl + id, this.httpOptions);
    }

    addAnimal(producto: Animals): Observable<Animals> {
        debugger
        return this.http.post<Animals>(this.myAppUrl + this.myApiUrl, producto, this.httpOptions);

    }

    updateAnimal(id: number, producto: Animals): Observable<Animals> {
        return this.http.put<Animals>(this.myAppUrl + this.myApiUrl + id, producto, this.httpOptions);
    }

    deleteAnimal(id: number): Observable<Animals> {
        return this.http.delete<Animals>(this.myAppUrl + this.myApiUrl + id);
    }
}

