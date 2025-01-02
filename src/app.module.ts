import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UpdateController } from './update/update.controller';
import { UpdateService } from './update/update.service';
import { Customer } from './customer/customer.entity';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { JwtModule } from '@nestjs/jwt';
import { generateRandomString } from './auth/generateRandomString';

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ws7.win.arvixe.com',
      port: 3306,
      username: 'infoo_customer4',
      password: 'Wr%fe3247',
      database: 'infoonth_iotwdb',
      entities: [Customer],
    }),
    JwtModule.register({
      secret: generateRandomString(10), 
      signOptions: { expiresIn: '1h' }, 
    }),    
    TypeOrmModule.forFeature([Customer]),
  ],
  controllers: [AppController, UpdateController, CustomerController],
  providers: [AppService, UpdateService, CustomerService],
})
export class AppModule {}
