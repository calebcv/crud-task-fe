import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private apiConfigServices: ApiConfigService) { }

  //to fetch all task lists
  getAllTaskLists(){
    this.apiConfigServices.get('tasklists');
  }

  //create a task list bucket
  CreateTaskList(title: string){
    let data = { 'title': title };
    return this.apiConfigServices.post('tasklists',data);
  }
  
  //To fetch al task inside a task list object
  //http://localhost:3000/tasklists/62c5049e60cb1f9ef7043d9a/tasks
  getAllTaskForATaskList(taskListId: string){
    return this.apiConfigServices.get(`tasklists/${taskListId}/tasks`);
  }

  //Create a task inside a particular task List object
  //http://localhost:3000/tasklists/62c5049e60cb1f9ef7043d9a/tasks
  createTaskInsideATaskList(taskListId: string, title: string){    
    return this.apiConfigServices.post(`tasklists/${taskListId}/tasks`,{ title });
  }
}
