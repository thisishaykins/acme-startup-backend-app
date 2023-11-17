import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsString, IsNumber, Min, IsNotEmpty, IsInt } from 'class-validator';

export class InvoiceDetailDto {
  @ApiProperty({
    description: 'Product Code',
  })
  @IsNotEmpty()
  @IsString()
  productCode: string;

  @ApiProperty({
    description: 'Product Description',
  })
  @IsNotEmpty()
  @IsString()
  productDescription: string;

  @ApiProperty({
    description: 'Product Price Per Unit',
  })
  @IsNotEmpty({ message: 'The product price cannot be empty' })
  @IsNumber(undefined, { message: 'The product price must be of type number' })
  @Min(1)
  productPricePerUnit: number;

  @ApiProperty({
    description: 'Product Quantity',
  })
  @IsNotEmpty({ message: 'The product quantity cannot be empty' })
  @IsInt({ message: 'The product quantity must be of type number' })
  @Min(1)
  productQuantity: number;
}
