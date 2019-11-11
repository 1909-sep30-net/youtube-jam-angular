import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { UserService } from '../../services/user.service';
import { ToastsService } from '../../services/toasts.service';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from '@angular/forms';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  const authSpy = jasmine.createSpyObj('AuthService',
      ['']);
  const userSpy = jasmine.createSpyObj('UserService',
      ['getUser']);
  const toastSpy = jasmine.createSpyObj('ToastsService',
      ['show']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports:[FormsModule],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: UserService, useValue: userSpy },
        { provide: ToastsService, useValue: toastSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
