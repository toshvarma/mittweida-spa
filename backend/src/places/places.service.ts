import { Injectable, NotFoundException } from '@nestjs/common';
import { Place } from './place.model';

@Injectable()
export class PlacesService {
    private readonly places: Place[] = [
        {
            id: '1',
            title: "Gasthaus 'Mittweida's Stube'",
            description: 'A cosy, well‑reviewed local pub offering hearty German dishes, outdoor seating, brunch, and event catering.',
            imageUrl: '/public/german_hero.jpg',
            extendedDescription: 'Located at Chemnitzer Straße  41, this family‑run establishment seats around 74 guests and features a beer garden. Popular for traditional dishes, including fish and regional specialties, it’s open Wednesday–Sunday (early evening through late night), and offers brunch every second Sunday. It’s highly praised for its friendly service, generous portions, wheelchair accessibility, and comfortable atmosphere .',
            additionalImages: ['/public/german_ei1.jpg', '/public/german_ei2.jpg'],
            keywords: ['bar', 'beer','adults only', 'pub', 'traditional', 'brunch', 'food'],
        },
        {
            id: '2',
            title: 'Pizzeria Dolomiti',
            description: 'A family-run Italian pizzeria in Mittweida serving authentic wood-fired pizzas, pasta, antipasti, and espresso.',
            imageUrl: '/public/pizza_hero.jpg',
            extendedDescription: 'Situated in central Mittweida, Pizzeria Dolomiti delights guests with traditional Italian dishes prepared from scratch, including wood-fired pizzas and fresh pasta. With a warm, welcoming atmosphere and terrace seating during warmer months, it’s a favorite for both casual meals and family dinners.',
            additionalImages: ['/public/pizza_ei1.webp', '/public/pizza_ei2.jpg'],
            keywords: ['pizza', 'italian', 'restaurant', 'eating', 'food'],
        },
        {
            id: '3',
            title: 'Stadtkirche "Unser Lieben Frauen"',
            description: 'A late‑Gothic hall church with a landmark 60 m tower, richly decorated and central to Mittweida’s medieval skyline.',
            imageUrl: '/public/church_hero.jpg',
            extendedDescription: 'Dating back to its first mention in 1303, the church was rebuilt after a fire in 1450 and features a stunning multi‑vaulted nave, elaborate stone tracery windows, a carved pulpit (1667), and a rare sacrament house from around 1450. Major restorations occurred in 1886–87 and throughout the 20th century, preserving its Gothic heritage.',
            additionalImages: ['/public/church_ei1.jpg', '/public/church_ei2.jpg'],
            keywords: ['church', 'pray', 'quiet', 'history', 'gothic'],
        },
        {
            id: '4',
            title: 'Hochschule Mittweida (HSMW)',
            description: ' Founded in 1867, this university of applied sciences is one of the largest in the region. With international students from over 50 countries, HSMW offers various degrees with ECTS accreditation and emphasizes strong practical orientation.',
            imageUrl: '/public/HM_HERO.jpg',
            extendedDescription: ' Founded in 1867, this university of applied sciences is one of the largest in the region. With international students from over 50 countries, HSMW offers various degrees with ECTS accreditation and emphasizes strong practical orientation. Hochschule Mittweida balances its rich historical roots in engineering with a modern, applied-science focus. With strong industry ties, practical learning, active research in key technology areas, and a tight-knit, international campus community, it offers a compelling experience—especially for students drawn to hands-on, interdisciplinary education in a charming, cost-effective town. ',
            additionalImages: ['/public/HM_EI1.jpg', '/public/HM_EI2.jpg'],
            keywords: ['school', 'education', 'international'],
        },
        {
            id: '5',
            title: 'Kriebstein Reservoir (Talsperre Kriebstein)',
            description: 'A scenic reservoir formed by the damming of the Zschopau River in the 1920s, surrounded by forests and walking trails.',
            imageUrl: '/public/dam_hero.jpg',
            extendedDescription: 'Just a short trip outside Mittweida, the Kriebstein Reservoir offers hiking and cycling paths along wooded valleys, boat rentals, and charming waterside restaurants in Lauenhain. Ideal for outdoor recreation, nature watching, and enjoying the peaceful water views.',
            additionalImages: ['/public/dam_ei1.jpg', '/public/dam_ei2.webp'],
            keywords: ['hiking', 'nature', 'river', 'water', 'family friendly'],
        },
        {
            id: '6',
            title: 'Bürgerwald & Neudörfchen Area',
            description: 'A wooded area within Mittweida featuring trails around the former upper reservoir of a historic power station—now a technical heritage site.',
            imageUrl: '/public/wald_hero.jpg',
            extendedDescription: 'This leafy forest area includes pathways through tranquil woodland and by the old reservoir basin, evoking a sense of quiet retreat. Great for hiking, seasonal birdwatching, and exploring local industrial‑heritage landmarks, all within the town’s borders.',
            additionalImages: ['/public/wald_ei1.jpg', '/public/wald_ei2.webp'],
            keywords: ['family friendly', 'hiking','nature','water'],
        },
    ];

    private savedPlacesByUser: Record<string, string[]> = {}; // username -> placeId[]

    getAll(): Place[] {
        return this.places;
    }

    getOne(id: string): Place {
        const place = this.places.find(p => p.id === id);
        if (!place) throw new NotFoundException('Place not found');
        return place;
    }

    savePlaceForUser(username: string, placeId: string) {
        const exists = this.places.some(p => p.id === placeId);
        if (!exists) throw new NotFoundException('Place not found');

        if (!this.savedPlacesByUser[username]) {
            this.savedPlacesByUser[username] = [];
        }

        if (!this.savedPlacesByUser[username].includes(placeId)) {
            this.savedPlacesByUser[username].push(placeId);
        }

        return { message: 'Saved' };
    }

    removePlaceForUser(username: string, placeId: string) {
        this.savedPlacesByUser[username] = (this.savedPlacesByUser[username] || []).filter(id => id !== placeId);
        return { message: 'Removed' };
    }

    getSavedPlacesForUser(username: string): Place[] {
        const savedIds = this.savedPlacesByUser[username] || [];
        return this.places.filter(p => savedIds.includes(p.id));
    }
}
