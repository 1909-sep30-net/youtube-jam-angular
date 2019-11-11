import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from 'src/models/user';
import { CommentsSentimentAnalysis } from 'src/models/comments-sentiment-analysis';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
  it('get user should get something', () => {
    const service: UserService = TestBed.get(UserService);
    let result = service.getUser('mtnolasco@up.edu.ph');
    expect(result).toBeTruthy();
  });
  it('update user should update something', () => {
    const service: UserService = TestBed.get(UserService);
    let inputUser:User = new User('Marielle', 'Nolasco', 'mtnolasco@up.edu.ph', 'Mathemars');
    let result = service.updateUser(inputUser);
    expect(result).toBeTruthy();
  });
 
});
