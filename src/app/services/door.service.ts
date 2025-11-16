import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Door {
    id: number;
    dayNumber: number;
    title: string;
    contentUrl: string;
}

@Injectable({ providedIn: 'root' })
export class DoorService {
    private baseUrl = 'http://localhost:8080/api/doors';

    constructor(private http: HttpClient) {}

    getDoors(): Observable<Door[]> {
        return this.http.get<Door[]>(this.baseUrl);
    }
}