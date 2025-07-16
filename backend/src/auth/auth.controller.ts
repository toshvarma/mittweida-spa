import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth') // <-- This groups it under "Auth" in Swagger
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('user/:username')
    @ApiResponse({ status: 200, description: 'Returns user info by username.' })
    getUser(@Param('username') username: string) {
        return this.authService.getUser(username);
    }

    @Post('login')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string', example: 'admin1' },
                password: { type: 'string', example: 'qwerty' },
            },
        },
    })
    @ApiResponse({ status: 201, description: 'Login successful, returns user profile info.' })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    login(@Body() body: { username: string; password: string }) {
        return this.authService.login(body.username, body.password);
    }
}
