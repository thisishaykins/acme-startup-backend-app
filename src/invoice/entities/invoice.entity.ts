import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Exclude, Transform, Type } from 'class-transformer';

import { InvoiceDetail } from './invoice-detail.entity';

@Entity({ name: 'invoices' })
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @Column({
    generated: 'increment',
    name: 'sequence_number',
    nullable: false,
  })
  sequenceNumber: number;

  @Column({ name: 'invoice_date', nullable: false, type: 'date' })
  date: Date;

  @Column({ name: 'customer_name', length: 100, nullable: false })
  customerName: string;

  @Column({ name: 'customer_address', length: 255, nullable: false })
  customerAddress: string;

  @OneToMany(() => InvoiceDetail, (detail) => detail.invoice, {
    cascade: true,
    eager: true,
  })
  details: InvoiceDetail[];

  // Add other properties as needed
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
