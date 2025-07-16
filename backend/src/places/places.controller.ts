import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get()
    getAll() {
        return this.placesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.placesService.getOne(id);
    }

    @Post('save')
    save(@Body() body: { username: string; placeId: string }) {
        return this.placesService.savePlaceForUser(body.username, body.placeId);
    }

    @Post('unsave')
    unsave(@Body() body: { username: string; placeId: string }) {
        return this.placesService.removePlaceForUser(body.username, body.placeId);
    }

    @Get('saved/:username')
    getSaved(@Param('username') username: string) {
        return this.placesService.getSavedPlacesForUser(username);
    }
}
