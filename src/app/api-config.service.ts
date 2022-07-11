import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TaskListModel from './models/taskListModel';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL = 'http://localhost:3000';
  constructor(private HttpClient: HttpClient) { }

  //API call to Backend
  get(url : string){
    return this.HttpClient.get<TaskListModel[]>(`${this.API_BASE_URL}/${url}`); //http://localhost:3000/tasklists
  }

  post(url : string, data: Object){
    return this.HttpClient.post(`${this.API_BASE_URL}/${url}`, data); //http://localhost:3000/tasklists
  }
  
  put(url : string, data: Object){
    return this.HttpClient.put(`${this.API_BASE_URL}/${url}`, data);
  }

  patch(url : string, data: Object){
    return this.HttpClient.patch(`${this.API_BASE_URL}/${url}`, data);
  }

  delete(url : string){
    return this.HttpClient.delete(`${this.API_BASE_URL}/${url}`);
  }

}
