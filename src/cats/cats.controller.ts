import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findall(@Req() request: Request): string {
    return 'this return all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `this return cats ${id}`;
  }
  @Post()
  create(): string {
    return 'this actions add new cat';
  }

}
