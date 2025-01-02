import { Controller, Get, Post, Body, Param, Delete, Logger } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  private readonly logger = new Logger(CustomerController.name);

  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    this.logger.log('Fetching all customers');
    return this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer> {
    this.logger.log(`Fetching customer with id: ${id}`);
    return await this.customerService.findOne(Number(id));
  }

  @Post()
  async create(@Body() customer: Customer): Promise<Customer> {
    this.logger.log('Creating new customer');
    return await this.customerService.create(customer);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.logger.log(`Deleting customer with id: ${id}`);
    return await this.customerService.remove(Number(id));
  }

  @Post('login')
  async login(@Body() loginDto: { company: string; username: string; password: string }) {
    const { company, username, password } = loginDto;
    this.logger.log(`Login attempt with company: ${company}, username: ${username}`);
    const result = await this.customerService.login(company, username, password);

    if (!result) {
      this.logger.warn(`Invalid credentials for company: ${company}, username: ${username}`);
      return { message: 'Invalid credentials' };  
    }

    this.logger.log(`Login successful for company: ${company}, username: ${username}`);
    return { access_token: result.access_token, result };  
  }
}
