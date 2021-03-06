import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from "routing-controllers";

@JsonController("/users")
export default class UserController {
  @Get("/")
  getAll() {
    return "This action returns all users";
  }

  @Get("/:id")
  async getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("/")
  post(@Body() user: any) {
    return user;
  }

  @Put("/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
