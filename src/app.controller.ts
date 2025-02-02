import { Controller, Get, Query } from '@nestjs/common';
import { ProviderService } from './providers/provider.service';

@Controller()
export class AppController {
  constructor(private readonly providerService: ProviderService) {}

  @Get('generate')
  async generate(
    @Query('input') input: string,
    @Query('provider') provider: string,
  ) {
    return this.providerService.generate(input, provider);
  }
}
