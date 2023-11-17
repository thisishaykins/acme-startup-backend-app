import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Invoice } from './invoice.entity';

@Entity({ name: 'invoices_details' })
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @Column({ name: 'product_code', length: 100, nullable: false })
  productCode: string;

  @Column({ name: 'product_description', length: 255, nullable: false })
  productDescription: string;

  @Column({ name: 'product_price', type: 'decimal', nullable: false })
  productPricePerUnit: number;

  @Column({ name: 'product_quantity', nullable: false })
  productQuantity: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.details, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  invoice: Invoice;

  // Add other properties as needed
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
