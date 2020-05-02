import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiVisComponent } from './pi-vis.component';

describe('PiVisComponent', () => {
  let component: PiVisComponent;
  let fixture: ComponentFixture<PiVisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiVisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
