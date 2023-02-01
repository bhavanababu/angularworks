import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSubComponent } from './smart-sub.component';

describe('SmartSubComponent', () => {
  let component: SmartSubComponent;
  let fixture: ComponentFixture<SmartSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
