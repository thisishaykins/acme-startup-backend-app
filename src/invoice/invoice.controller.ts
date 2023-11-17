import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, HttpException, NotFoundException, } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { InvoiceService } from './invoice.service';
import { Invoice } from './entities/invoice.entity';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('api/invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @ApiOperation({ summary: 'create a invoice request' })
  @ApiResponse({ description: 'Endpoint to create a invoice request' })
  @ApiBody({ type: CreateInvoiceDto }) // Specify the body parameter type for Swagger documentation
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    const invoice = new Invoice();
    Object.assign(invoice, createInvoiceDto);

    try {
      await this.invoiceService.create(invoice);

      return {
        status: true,
        message: 'Invoice successfully created',
        invoice: invoice,
      };
    } catch (error) {
      throw new HttpException(`Error: ${error}`, 500);
    }
  }

  @Get()
  @ApiOperation({ summary: 'get all invoice requests' })
  @ApiResponse({ description: 'Endpoint to get all invoice requests' })
  async findAll() {

    try {
      const invoices = await this.invoiceService.findAll();

      return {
        status: true,
        message: 'Invoices successfully retrieved',
        invoices: invoices,
      };
    } catch (error) {
      throw new HttpException(`Error: ${error}`, 500);
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a invoice request' })
  @ApiResponse({ description: 'Endpoint to get a invoice request' })
  @ApiParam({ name: 'id', type: String })
  async findOne(@Param('id') id: string) {

    try {
      const invoice = await this.invoiceService.findOne(+id);

      return {
        status: true,
        message: 'Invoice successfully retrieved',
        invoice: invoice,
      };
    } catch (error) {
      throw new HttpException(
        `Error: ${error}`,
        500,
      );
    }
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'create a invoice request' })
  @ApiResponse({ description: 'Endpoint to create a invoice request' })
  @ApiBody({ type: UpdateInvoiceDto })
  @ApiParam({ name: 'id', type: String })
  async update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ) {
    const invoice = new Invoice();
    Object.assign(invoice, updateInvoiceDto);

    try {
      await this.invoiceService.update(+id, invoice);

      return {
        status: true,
        message: 'Invoice has been successfully updated',
        invoice: invoice,
      };
    } catch (error) {
      throw new HttpException(
        `Error updating invoice record: ${id}. Error: ${error}`,
        500,
      );
    }

  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a invoice request' })
  @ApiResponse({ description: 'Endpoint to delete a invoice request' })
  @ApiParam({ name: 'id', type: String })
  async remove(@Param('id') id: string) {
    try {
      return await this.invoiceService.remove(+id);
    } catch (error) {
      throw new NotFoundException(`Invoice with ID ${id} not found. Error: ${error}`);
    }
  }
}
