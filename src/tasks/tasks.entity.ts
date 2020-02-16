import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("task_list")
export class Tasks {
  @PrimaryGeneratedColumn() id: number;
  @Column() user_id: number;
  @Column() task_id: number;
  @Column() task_code: string;
  @Column() task_name: string;
  @Column("datetime") dev_start;
  @Column("datetime") dev_end;
  @Column("datetime") debug_start;
  @Column("datetime") debug_end;
  @Column("datetime") test_start;
  @Column("datetime") test_end;
  @Column("timestamp") create_at;
  @Column("timestamp") update_at;
}
