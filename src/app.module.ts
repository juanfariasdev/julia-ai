import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderModule } from './providers/provider.module';

@Module({
  imports: [ProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
