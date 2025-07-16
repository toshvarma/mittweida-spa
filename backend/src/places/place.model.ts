export interface Place {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    extendedDescription: string;
    additionalImages: string[];
    keywords?:string[];
}
