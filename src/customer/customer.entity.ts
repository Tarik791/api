import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login2')  // Updated table name to 'login2'
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  initial: string;

  @Column({ type: 'int', nullable: true })
  template: number;

  @Column({ type: 'int', nullable: true })
  priv1: number;

  @Column({ type: 'int', nullable: true })
  priv2: number;

  @Column({ type: 'int', nullable: true })
  priv3: number;

  @Column({ type: 'int', nullable: true })
  priv4: number;

  @Column({ type: 'int', nullable: true })
  priv5: number;

  @Column({ type: 'int', nullable: true })
  priv6: number;

  @Column({ type: 'int', nullable: true })
  priv7: number;

  @Column({ type: 'int', nullable: true })
  priv8: number;

  @Column({ type: 'int', nullable: true })
  priv9: number;

  @Column({ type: 'int', nullable: true })
  priv10: number;

  @Column({ type: 'int', nullable: true })
  priv11: number;

  @Column({ type: 'int', nullable: true })
  priv12: number;

  @Column({ type: 'int', nullable: true })
  priv13: number;

  @Column({ type: 'int', nullable: true })
  priv14: number;

  @Column({ type: 'int', nullable: true })
  priv15: number;

  @Column({ type: 'int', nullable: true })
  priv16: number;

  @Column({ type: 'int', nullable: true })
  priv17: number;

  @Column({ type: 'int', nullable: true })
  priv18: number;

  @Column({ type: 'int', nullable: true })
  priv19: number;

  @Column({ type: 'int', nullable: true })
  priv20: number;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  dateadded: string;

  @Column({ nullable: true })
  uniqueid: string;
}
