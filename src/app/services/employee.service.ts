import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { EmployeePost, EmployeeGet, Update_Employee } from '../login';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class EmployeeService {
  private projectId = new BehaviorSubject('');
  currentMessage = this.projectId.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: any) {
    this.projectId.next(message)
  }

  EmployeePost(customer: EmployeePost): Observable<EmployeePost> {  
    return this.http.post<EmployeePost>(`http://localhost:3000/api/employee`, customer)  
  };

  EmployeeGet(id): Observable<EmployeeGet> { 
   return this.http.get<EmployeeGet>(`http://localhost:3000/api/employee?id=${id}`,{responseType:"json"})  
    };
   
  Employeeupdate(customer): Observable<any> {
    console.log(customer)
      return this.http.put<EmployeePost>(`http://localhost:3000/api/update_employee/?id=${customer.id}`,customer);
    }

    Employeedelete(customer): Observable<any> {
      console.log(customer._id)
        return this.http.delete<EmployeePost>(`http://localhost:3000/api/Delete_employee/?id=${customer._id}`,customer);
      }
}
