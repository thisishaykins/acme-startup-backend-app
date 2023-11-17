import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsPositive,
  IsDate,
  IsString,
  IsNumber,
  Min,
  IsNotEmpty,
  IsArray,
  IsInt,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { InvoiceDetailDto } from './invoice-detail.dto';


export class CreateInvoiceDto {
  @ApiProperty({
    description: 'Invoice Date',
  })
  @IsNotEmpty({ message: 'The field name cannot be empty' })
  @IsDate()
  date: Date;

  @ApiProperty({
    description: 'Customer Name',
  })
  @IsNotEmpty()
  @IsString()
  @Min(5)
  customerName: string;

  @ApiProperty({
    description: 'Customer Address',
  })
  @IsNotEmpty()
  @IsString()
  @Min(5)
  customerAddress: string;

    @ApiProperty({
        type: InvoiceDetailDto,
        isArray: true,
    })
  //   details: InvoiceDetailDto[];
  @ValidateNested()
  @IsArray()
  @Type(() => InvoiceDetailDto)
  details: InvoiceDetailDto[];
}