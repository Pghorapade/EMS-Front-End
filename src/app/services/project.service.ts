import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aproject, projectGet } from '../login';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  projectPost(customer: Aproject): Observable<Aproject> {  
    return this.http.post<Aproject>('http://localhost:3000/api/project', customer)  
  };

  projectGet(): Observable<projectGet> {  
    return this.http.get<projectGet>('http://localhost:3000/api/project',{responseType:"json"})  
  };

  projectupdate(customer): Observable<any> {
      return this.http.put<Aproject>(`http://localhost:3000/api/project/?id=${customer.id}`,customer);
    }

    projectdelete(customer): Observable<any> {
        return this.http.delete<Aproject>(`http://localhost:3000/api/project/?id=${customer._id}`,customer);
      }

}
