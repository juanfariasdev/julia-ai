import { Controller, Get, Query } from '@nestjs/common';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get('generate')
  async generate(
    @Query('input') input: string,
    @Query('provider') provider: string,
  ) {
    return this.providerService.generate(input, provider);
  }
}
