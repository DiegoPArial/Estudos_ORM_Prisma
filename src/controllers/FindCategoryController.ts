import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindCategoryController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const category = await prismaClient.category.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true,
      },
    });

    response.json(category);
  }
}
