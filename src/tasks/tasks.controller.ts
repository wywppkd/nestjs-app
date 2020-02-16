import { Controller, Get, Post, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async find() {
    return await this.tasksService.find();
  }

  @Post()
  async create(@Body() createTask: CreateTaskDto) {
    return await this.tasksService.create(createTask);
  }
}
