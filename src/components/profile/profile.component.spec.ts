import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/services/auth.service';
import { ProfileComponent } from './profile.component';
import { UserService } from '../../services/user.service';
import { ToastsService } from '../../services/toasts.service';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { EMPTY } from 'rxjs/internal/observable/empty';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  const authSpy = jasmine.createSpyObj('AuthService',
  ['login']);
  authSpy.userProfile$ = EMPTY;
  const userSpy = jasmine.createSpyObj('UserService',
      ['getUser']);
  const toastSpy = jasmine.createSpyObj('ToastsService',
      ['show']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: UserService, useValue: userSpy },
        { provide: ToastsService, useValue: toastSpy },
        { provide: AuthService, useValue: authSpy }
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
