import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsModule } from "./cats/cats.module";
import { TasksModule } from "./tasks/tasks.module";
import { Connection } from "typeorm";

// 模块: 使用@Module()装饰的类(appModule)
@Module({
  imports: [
    TypeOrmModule.forRoot(/*这里自动传入ormconfig.json配置*/),
    CatsModule,
    TasksModule
  ], // 导入模块的列表
  controllers: [AppController], // 控制器
  providers: [AppService] // 由 Nest 注入器实例化的provider, 在整个模块中共享
})
export class AppModule {
  constructor(private readonly conection: Connection) {}
}
