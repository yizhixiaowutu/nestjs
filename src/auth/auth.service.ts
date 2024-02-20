import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {}

  signUp() {
    return {
      msg: 'I am signed up',
    };
  }

  signIn() {
    return {
      msg: 'I am signed in',
    };
  }
}
