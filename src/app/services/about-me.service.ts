import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor() { }

  getAboutMe(): string {
    return 'I am currently a Graduate Software Developer working for telent in Warwick. I have a 1st Class Honours Degree in Computer Information Systems from Bangor University in North Wales. My dissertation project was "Data Extraction and Display of Energy Metrics". Currently I am working on developing my software skills in order to progress in my career as a Software Developer.';
  }
}
