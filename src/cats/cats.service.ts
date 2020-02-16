import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CatsService {
  // 增
  async create() {}

  // 删
  async remove() {}

  // 改
  async update() {}

  // 查

  // 查询(所有)
  async find() {}

  // 查询(一条)
  async findOne() {}

  // 条件查询(一条)
  async findOneWithCondition() {}

  // 条件查询(所有)
  async findWithCondition() {}

  // 查询(所有&总条数)
  async findAndCount() {}
}
