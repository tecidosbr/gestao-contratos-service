import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { providers as serviceProviders } from './service';
import { databaseProviders } from './database.providers';
@Module({
  controllers,
  providers: [...serviceProviders, ...databaseProviders],
})
export class AppModule {}
