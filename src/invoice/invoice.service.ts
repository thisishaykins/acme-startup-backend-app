import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Invoice } from './entities/invoice.entity';
import { InvoiceDetail } from './entities/invoice-detail.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  async create(invoice: Invoice) {
    return await this.invoiceRepository.save(invoice);
  }

  async findAll() {
    const result = await this.invoiceRepository.find();
    return result;
  }

  async findOne(id: number) {
    return this.invoiceRepository.findOneBy({
      id,
    });
  }

  async update(id: number, invoice: Invoice) {
    const hasInvoice = await this.invoiceRepository.findOneBy({id});
    if (!hasInvoice) throw new Error('Invoice does not exist...');

    await this.invoiceRepository.update(id, invoice);
  }

  async remove(id: number) {
    const hasInvoice = await this.invoiceRepository.findOneBy({ id });
    if (!hasInvoice) throw new Error('Invoice does not exist...');

    await this.invoiceRepository.delete(id);
  }
}
