import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() dto: AuthDto) {
    console.log('dto', { dto });
    return this.authService.signUp();
  }

  @Post('signIn')
  signIn() {
    return this.authService.signIn();
  }
}
