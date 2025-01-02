import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { generateRandomString } from './generateRandomString';

@Module({
  imports: [
    JwtModule.register({
      secret: generateRandomString(10), 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
})
export class AuthModule {}
