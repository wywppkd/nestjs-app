import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";

// 模块: 使用@Module()装饰的类(appModule)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "oolp_new",
      entities: [__dirname + "/**/*.entity{.js}"],
      synchronize: false
    })
  ], // 导入模块的列表
  controllers: [AppController, CatsController], // 一组控制器
  providers: [AppService, CatsService] // 由 Nest 注入器实例化的provider, 在整个模块中共享
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
