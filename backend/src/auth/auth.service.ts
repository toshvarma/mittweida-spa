import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    private readonly users = {
        admin1: { password: 'qwerty', profileImage: '/mittadmin.png' },
        admin2: { password: 'BREAKFAST', profileImage: '/mittadmin.png' },
        ramenLover2102: { password: 'zzwqICE03qs23#', profileImage: '/mittramen.png' },
    };

    getUser(username: string) {
        const user = this.users[username];
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        return { username, profileImage: user.profileImage };
    }

    login(username: string, password: string) {
        const user = this.users[username];
        if (!user || user.password !== password) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return { username, profileImage: user.profileImage };
    }
}
