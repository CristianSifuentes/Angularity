import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowArt } from './flow-art';

describe('FlowArt', () => {
  let component: FlowArt;
  let fixture: ComponentFixture<FlowArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowArt],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowArt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
