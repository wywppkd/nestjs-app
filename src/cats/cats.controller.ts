import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post('info')
  async create(@Body() createCatDto: CreateCatDto): Promise<object> {
    console.log("TCL: CatsController -> createCatDto", createCatDto); // 请求体参数
    return createCatDto
  }

  @Get('info')
  async query(@Query() query: CreateCatDto): Promise<object> {
    console.log("TCL: CatsController -> query", query); // GET请求参数
    return query
  }
}