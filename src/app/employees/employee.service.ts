import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../model/employee.model";
@Injectable()
export class EmployeeService {
    API_URL = 'http://localhost';
    constructor(private httpClient: HttpClient) { }
    getEmployees() {
        return this.httpClient.get(`${this.API_URL}/api_php/product/read.php`);
    }
    getCategory() {
        return this.httpClient.get(`${this.API_URL}/api_php/product/cat.php`);
    }

     insertPro(user: User) {
        return this.httpClient.post(`${this.API_URL}/api_php/product/create.php`, user);
    }
   createUser(user: User) {
    return this.httpClient.post(`${this.API_URL}/api_php/product/create.php`, user);
  }
}	