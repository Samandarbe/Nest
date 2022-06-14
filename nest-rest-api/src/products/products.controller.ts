import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductsService } from './products.service';
import { Product } from './schema/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServises: ProductsService) {}
  @Get()
  get(): Promise<Product[]> {
    return this.productsServises.getAll();
  }
  @Get(':id')
  getById(@Param('id') id: string): Promise<Product> {
    return this.productsServises.getById(id);
  }

  @Post()
  post(@Body() body: CreateProductDto): Promise<Product> {
    return this.productsServises.create(body);
  }
  @Delete(':id')
  postById(@Param('id') id: string): Promise<Product> {
    return this.productsServises.deleteProduct(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: CreateProductDto) {
    return this.productsServises.update(id, body);
  }
}
