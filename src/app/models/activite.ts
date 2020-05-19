import { TypeActivite } from './typeActivite';

export class Activite {
    id: number;
    type?: TypeActivite;
    lieu?: string;
    date?: Date;
    heure?: number;
    titre?: string;
    auteur?: string;
    description?: string;

    
}
