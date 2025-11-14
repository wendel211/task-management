import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * Placeholder authentication middleware.
 * TODO: Replace with proper JWT authentication when integrating with real auth system.
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Placeholder: In production, validate JWT token here
    // For now, just pass through
    next();
  }
}
