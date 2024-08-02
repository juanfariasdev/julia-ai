import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { GeminiService } from './gemini/gemini.service';

@Module({
  controllers: [ProviderController],
  providers: [ProviderService, GeminiService],
  exports: [ProviderService],
})
export class ProviderModule {}
