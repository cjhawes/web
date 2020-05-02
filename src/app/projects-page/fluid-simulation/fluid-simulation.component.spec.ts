import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidSimulationComponent } from './fluid-simulation.component';

describe('FluidSimulationComponent', () => {
  let component: FluidSimulationComponent;
  let fixture: ComponentFixture<FluidSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
