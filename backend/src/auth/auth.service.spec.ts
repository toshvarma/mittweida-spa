import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should return admin1 password', () => {
    expect(service.getUser('admin1')).toEqual({
      username: 'admin1',
      password: 'qwerty',
    });
  });

  it('should throw for unknown user', () => {
    expect(() => service.getUser('unknown')).toThrow();
  });
});
