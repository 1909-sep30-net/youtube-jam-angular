import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toasts.component';
import { ToastsService } from '../../services/toasts.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
describe('ToastsComponent', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;
  const toastSpy = jasmine.createSpyObj('ToastsService',
  ['show']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastsComponent ],
      imports:[NgbModule],
      providers:[{ provide: ToastsService, useValue: toastSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
