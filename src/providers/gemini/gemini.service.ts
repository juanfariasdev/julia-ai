import { Injectable } from '@nestjs/common';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private model: GenerativeModel;

  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  public async generate(prompt: string): Promise<any> {
    console.log(process.env.GEMINI_API_KEY);
    const { response } = await this.model.generateContent([prompt]);
    return response.text();
  }
}
