import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesPageComponent } from './updates-page.component';

describe('UpdatesPageComponent', () => {
  let component: UpdatesPageComponent;
  let fixture: ComponentFixture<UpdatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
