import { IsInt, IsString, IsDateString, IsNotEmpty } from "class-validator";

export class CreateTaskDto {
  @IsInt()
  readonly user_id: number;

  @IsString()
  readonly task_code: string;

  @IsString({ message: "不能为空" })
  @IsNotEmpty()
  readonly task_name: string;

  @IsDateString()
  readonly dev_start: string;

  @IsDateString()
  readonly dev_end: string;

  @IsDateString()
  readonly debug_start: string;

  @IsDateString()
  readonly debug_end: string;

  @IsDateString()
  readonly test_start: string;

  @IsDateString()
  readonly test_end: string;
}
