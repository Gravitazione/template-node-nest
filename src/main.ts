import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  console.log(`Server listening on http://localhost:${port}`)
}

bootstrap(3000)
