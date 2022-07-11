import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import TaskListModel from 'src/app/models/taskListModel';
import TaskModel from 'src/app/models/taskModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.scss']
})
export class TaskScreenComponent implements OnInit {

  taskLists: TaskListModel[] = [];
  tasks: TaskModel[] = [];

  constructor( 
    private taskService: TaskService,
    private activateRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.taskService.getAllTaskLists()
      .subscribe((allTaskLists: TaskListModel[])=> {
        this.taskLists = allTaskLists 
        //get the 1st Task list id and route to it on page load
        this.router.navigate(['task-list', this.taskLists[0]['_id']]);
      });
          
    this.activateRoute.params.subscribe(
      (params: Params) => {
        const taskListId = params['taskListId'];
        if(taskListId){
          this.taskService.getAllTaskForATaskList(taskListId).subscribe(
            (tasks: TaskModel[]) => this.tasks = tasks
          );
        }
      }
    );
  }

}
