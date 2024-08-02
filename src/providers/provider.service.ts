import { Injectable } from '@nestjs/common';
import { GeminiService } from './gemini/gemini.service';
// import { OpenAIService } from './openai/openai.service';

@Injectable()
export class ProviderService {
  constructor(
    private readonly geminiService: GeminiService,
    // private readonly openaiService: OpenAIService,
  ) {}

  public async generate(input: string, providerType: string): Promise<any> {
    if (providerType === 'GEMINI') {
      return this.geminiService.generate(input);
      // } else if (providerType === 'OPENAI') {
      //   return this.openaiService.generate(input);
    } else {
      throw new Error('Unsupported AI provider');
    }
  }
}
