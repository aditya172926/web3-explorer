import { Test, TestingModule } from '@nestjs/testing';
import { BalanceService } from './balance.service';

describe('Balance', () => {
  let provider: BalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceService],
    }).compile();

    provider = module.get<BalanceService>(BalanceService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
