import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Render
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto.js";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return await this.catsService.create();
  }
}
