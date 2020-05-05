import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HeaderComponent } from './header/header.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { BlogPostComponent } from './blog-page/blog-post/blog-post.component';
import { EarthComponent } from './projects-page/earth/earth.component';
import { CubeWaveComponent } from './projects-page/cube-wave/cube-wave.component';
import { BlackHoleComponent } from './projects-page/black-hole/black-hole.component';
import { SolarSystemComponent } from './projects-page/solar-system/solar-system.component';
import { FluidSimulationComponent } from './projects-page/fluid-simulation/fluid-simulation.component';
import { PiVisComponent } from './projects-page/pi-vis/pi-vis.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { PostComponent } from './research-page/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsPageComponent,
    CvPageComponent,
    HeaderComponent,
    BlogPageComponent,
    GalleryPageComponent,
    BlogPostComponent,
    EarthComponent,
    CubeWaveComponent,
    BlackHoleComponent,
    SolarSystemComponent,
    FluidSimulationComponent,
    PiVisComponent,
    ResearchPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
