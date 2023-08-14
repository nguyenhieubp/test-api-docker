import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly modelBlog: Model<BlogDocument>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return await this.modelBlog.find().exec();
  }

  async findOne(id: string): Promise<Blog> {
    return await this.modelBlog.findById(id).exec();
  }

  async create(createTodoDto: any): Promise<Blog> {
    return await new this.modelBlog({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: any): Promise<Blog> {
    await this.modelBlog.findByIdAndUpdate(id, updateTodoDto).exec();
    return this.modelBlog.findById(id);
  }

  async delete(id: string): Promise<Blog> {
    return await this.modelBlog.findByIdAndDelete(id).exec();
  }
}
