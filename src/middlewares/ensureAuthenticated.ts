import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Receber o token
  const authToken = request.headers.authorization

  // Validar se token preenchido
  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(' ')

  // Validar se token é válido
  try {
    const { sub } =  verify(token, '6425ddbf9cd648e1e4d33c4340d3373d') as IPayload
    
    // Recuperar informações do usuário
    request.user_id = sub

    return next()
  } catch (error) {
    return response.status(401).end()
  }
}