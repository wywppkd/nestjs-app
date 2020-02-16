import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tasks } from "./tasks.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly tasksRepository: Repository<Tasks>
  ) {}

  // 查询所有
  async find() {
    return await this.tasksRepository.find();
  }

  // 创建
  async create(createTask: CreateTaskDto) {
    let dataToSave = new Tasks();
    dataToSave.user_id = createTask.user_id;
    dataToSave.task_code = createTask.task_code;
    dataToSave.task_name = createTask.task_name;
    dataToSave.dev_start = createTask.dev_start;
    dataToSave.dev_end = createTask.dev_end;
    dataToSave.debug_start = createTask.debug_start;
    dataToSave.debug_end = createTask.debug_end;
    dataToSave.test_start = createTask.test_start;
    dataToSave.test_end = createTask.test_end;
    return await this.tasksRepository.save(dataToSave);
  }
}
