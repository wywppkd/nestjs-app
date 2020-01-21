import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 配置静态资源目录(使用了Express)
  app.useStaticAssets(join(__dirname, "..", "public"));
  
  // 设置模板引擎ejs
  app.setBaseViewsDir(join(__dirname, "..", "views")); // 放视图的文件
  app.setViewEngine("ejs");

  await app.listen(3000);
  console.log(`Nest Server is runing at http://127.0.0.1:3000`)
}
bootstrap();
