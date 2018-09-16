import { SupplierinfoModule } from './supplierinfo.module';

describe('SupplierinfoModule', () => {
  let supplierinfoModule: SupplierinfoModule;

  beforeEach(() => {
    supplierinfoModule = new SupplierinfoModule();
  });

  it('should create an instance', () => {
    expect(supplierinfoModule).toBeTruthy();
  });
});
