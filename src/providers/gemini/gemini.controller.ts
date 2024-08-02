import { Controller, Get, Query } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Get('generate')
  async generate(@Query('input') input: string) {
    return this.geminiService.generate(input);
  }
}
