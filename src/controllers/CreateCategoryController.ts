import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<void> {
    const { name } = request.body;

    const category = await prismaClient.category.create({
      data: {
        name,
      },
    });

    response.json(category);
  }
}
