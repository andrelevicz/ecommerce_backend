// src/modules/products/products.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../../common/dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
    console.log('ProductsController initialized'); // Adicione esta linha
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    const newProduct = this.productsService.createProduct(createProductDto);
    return newProduct;
  }
}
