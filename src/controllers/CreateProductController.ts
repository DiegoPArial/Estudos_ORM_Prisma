import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
  async handle(request: Request, response: Response): Promise<void> {
    const { name, bar_code, price } = request.body;

    const product = await prismaClient.product.create({
      data: {
        bar_code,
        name,
        price,
      },
    });

    response.json(product);
  }
}
