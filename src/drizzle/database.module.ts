import { Module } from '@nestjs/common';
import * as schema from './schema';
import { DrizzleMySqlModule } from '@knaadh/nestjs-drizzle-mysql2';

@Module({
  imports: [
    DrizzleMySqlModule.register({
      tag: 'DB_DEV',
      mysql: {
        connection: 'client',
        config: {
          host: 'localhost',
          user: 'root',
          password:'root',
          database: 'my_schema',
        },
      },
      config: { schema: { ...schema }, mode: 'default' },
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}