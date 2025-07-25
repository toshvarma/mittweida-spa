import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [AuthModule, PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
