import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsPositive, IsDate, IsString, IsNumber, Min, IsNotEmpty, IsArray, IsInt, IsUUID, ValidateNested, IsOptional} from 'class-validator';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class UpdateInvoiceDto {
  @ApiProperty({
    description: 'Invoice Date',
  })
  @IsOptional()
  @IsDate()
  date: Date;

  @ApiProperty({
    description: 'Customer Name',
  })
  @IsOptional()
  @IsString()
  @Min(5)
  customerName: string;

  @ApiProperty({
    description: 'Customer Address',
  })
  @IsOptional()
  @IsString()
  @Min(5)
  customerAddress: string;

  @ApiProperty({
    type: InvoiceDetailDto,
    isArray: true,
  })
  @ValidateNested()
  @IsArray()
  @Type(() => InvoiceDetailDto)
  @IsOptional()
  details: InvoiceDetailDto[];
}
