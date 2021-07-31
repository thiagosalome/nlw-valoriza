import { Request, Response } from 'express'
import { CreateTagService } from "../services/CreateTagService"

export class CreateTagController {

  async handler(request: Request, response: Response) {
    const { name } = request.body
    const createTagService = new CreateTagService()

    const tag = await createTagService.execute(name)

    return response.json(tag)
  }
}