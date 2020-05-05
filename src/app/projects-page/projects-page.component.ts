import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import { Project } from '../Models/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  public projects: Project[];

  constructor(
    private projectsService: ProjectsService,
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }
}
