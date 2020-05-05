import { Injectable } from '@angular/core';
import { Project } from 'src/app/Models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {  }

  getProjects(): Project[] {
    const bh = {id: 1, title: 'Black Hole', path: '/projects/black-hole'} as Project;
    const cw = {id: 2, title: 'Cube Wave', path: '/projects/cube-wave'} as Project;
    const e = {id: 3, title: 'Earth', path: '/projects/earth'} as Project;
    const fs = {id: 4, title: 'Fluid Simulation', path: '/projects/fluid-simulation'} as Project;
    const pv = {id: 5, title: 'Pi Visualisation', path: '/projects/pi-vis'} as Project;
    const ss = {id: 6, title: 'Solar System', path: '/projects/solar-system'} as Project;
    return [bh, cw, e, fs, pv, ss];
  }
}
