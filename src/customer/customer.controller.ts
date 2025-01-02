import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findOne(Number(id));
  }

  @Post()
  create(@Body() customer: Customer): Promise<Customer> {
    return this.customerService.create(customer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.customerService.remove(Number(id));
  }

  @Post('login')
  async login(@Body() loginDto: { company: string; username: string; password: string }) {
    const { company, username, password } = loginDto;
    const result = await this.customerService.login(company, username, password);

    if (!result) {
      return { message: 'Invalid credentials' };  
    }
    
    return { access_token: result.access_token, result };  
  }
}
