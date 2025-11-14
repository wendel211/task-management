import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthMiddleware } from './common/middleware/auth.middleware';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(AuthMiddleware).forRoutes('tasks');
  }
}
