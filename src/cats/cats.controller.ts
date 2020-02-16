import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Render,
  Delete,
  Put
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto.js";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Delete()
  async remove() {
    return await this.catsService.remove();
  }

  @Post()
  async create() {
    return await this.catsService.create();
  }

  @Put()
  async update() {
    return await this.catsService.update();
  }

  @Get()
  async find() {
    return await this.catsService.find();
  }

  @Get("one")
  async findOne() {
    return await this.catsService.findOne();
  }

  @Get("condition")
  async findWithCondition() {
    return await this.catsService.findOneWithCondition();
  }
}
