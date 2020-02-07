import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
  create() {
    return { code: 200, msg: "ok" };
  }
}
