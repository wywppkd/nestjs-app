import { IsString, IsInt } from "class-validator";

export class CreateCatDto {
  @IsString({ message: "请填写字符串类型" })
  readonly name: string;
  @IsInt()
  readonly age: number;
  @IsString()
  readonly breed: string;
}
