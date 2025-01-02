import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { JwtService } from '@nestjs/jwt';  // Importovanje JwtService-a

@Injectable()
export class CustomerService {
  private readonly logger = new Logger(CustomerService.name);

  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private jwtService: JwtService,  // Injektovanje JwtService-a
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<Customer> {
    return this.customerRepository.findOne({ where: { id } });
  }

  async create(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }

  async login(company: string, username: string, password: string): Promise<{ access_token: string } | null> {
    const user = await this.customerRepository.findOne({ where: { company, username } });

    if (!user) {
      return null;  
    }

    const payload = { username: user.username, company: user.company };  
    const access_token = this.jwtService.sign(payload);

    return { access_token };  
  }
}
