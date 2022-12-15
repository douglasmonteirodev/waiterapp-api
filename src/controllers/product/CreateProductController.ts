import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, category_id } = req.body;

    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { filename: banner } = req.file;

      const product = await createProductService.execute({
        name,
        description,
        banner,
        price,
        category_id,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };