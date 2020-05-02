import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { EarthComponent } from './projects-page/earth/earth.component';
import { CubeWaveComponent } from './projects-page/cube-wave/cube-wave.component';
import { BlackHoleComponent } from './projects-page/black-hole/black-hole.component';
import { SolarSystemComponent } from './projects-page/solar-system/solar-system.component';
import { FluidSimulationComponent } from './projects-page/fluid-simulation/fluid-simulation.component';
import { PiVisComponent } from './projects-page/pi-vis/pi-vis.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/earth', component: EarthComponent },
  { path: 'projects/cube-wave', component: CubeWaveComponent },
  { path: 'projects/black-hole', component: BlackHoleComponent },
  { path: 'projects/solar-system', component: SolarSystemComponent },
  { path: 'projects/fluid-simulation', component: FluidSimulationComponent },
  { path: 'projects/pi-vis', component: PiVisComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blog/:id', component: BlogPostComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
