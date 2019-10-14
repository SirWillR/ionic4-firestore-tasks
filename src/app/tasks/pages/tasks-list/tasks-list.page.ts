import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss']
})
export class TasksListPage {
  tasks$: Observable<Task[]>;

  constructor(
    private navCtrl: NavController,
    private tasksService: TasksService,
    private overlayService: OverlayService
  ) {}

  ionViewDidEnter(): void {
    this.loadTasks();
  }

  private async loadTasks() {
    const loading = await this.overlayService.loading();
    this.tasks$ = this.tasksService.getAll();
    loading.dismiss();
  }

  onUpdate(task: Task): void {
    this.navCtrl.navigateForward(['tasks', 'edit', task.id]);
  }
}
