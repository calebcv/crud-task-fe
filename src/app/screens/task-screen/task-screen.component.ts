import { Component, OnInit } from '@angular/core';
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

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTaskLists()
      .subscribe((allTaskLists: TaskListModel[])=> this.taskLists = allTaskLists );
  }

}
