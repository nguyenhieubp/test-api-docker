import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async index() {
    return await this.blogService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.blogService.findOne(id);
  }

  @Post()
  async create(@Body() createTodoDto: any) {
    return await this.blogService.create(createTodoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: any) {
    return await this.blogService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.blogService.delete(id);
  }
}
