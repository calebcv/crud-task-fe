import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import TaskListModel from './models/taskListModel';
import TaskModel from './models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private apiConfigServices: ApiConfigService) { }

  //to fetch all task lists
  getAllTaskLists(): Observable<TaskListModel[]> { 
    return this.apiConfigServices.getTaskLists('tasklists');
  }

  //to fetch all tasks
  getAllTasks(taskListId: string): Observable<TaskModel[]> { 
    return this.apiConfigServices.getTasks(`tasklists/${taskListId}`);
  }

  //create a task list bucket
  CreateTaskList(title: string): Observable<TaskListModel>{
    let data = { 'title': title };
    return this.apiConfigServices.post('tasklists',data);
  }
  
  //To fetch al task inside a task list object
  //http://localhost:3000/tasklists/62c5049e60cb1f9ef7043d9a/tasks
  getAllTaskForATaskList(taskListId: string){
    return this.apiConfigServices.getTasks(`tasklists/${taskListId}/tasks`);
  }

  //Create a task inside a particular task List object
  createTaskInsideATaskList(taskListId: string, title: string){    
    return this.apiConfigServices.post(`tasklists/${taskListId}/tasks`,{ title });
  }

  //delete a task list
  deleteTaskList(taskListId: string): Observable<TaskListModel>{
    return this.apiConfigServices.deleteTaskList(`tasklists/${taskListId}`);
  }

  //delete a Task inside a particular TaskList
  //http://localhost:3000/tasklists/62c365e3de38d1db2a0d32c3/tasks/62c4f34e95c2c2287abdd71d
  deleteTaskInsideTaskList(taskListId: string, taskId: string): Observable<TaskModel>{
    return this.apiConfigServices.deleteTask(`tasklists/${taskListId}/tasks/${taskId}`);
  }


  //update the status of a task whether its completed or not
  updateTaskStatus(taskListId: string, taskObject: TaskModel): Observable<TaskModel>{
    let updateData = { 'completed': !taskObject.completed }; //toggle the database value
    return this.apiConfigServices.patch(`tasklists/${taskListId}/tasks/${taskObject._id}`,updateData);
  }
}
