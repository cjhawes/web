import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeWaveComponent } from './cube-wave.component';

describe('CubeWaveComponent', () => {
  let component: CubeWaveComponent;
  let fixture: ComponentFixture<CubeWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
