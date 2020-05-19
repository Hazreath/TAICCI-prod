import { UtilisateurRole } from './utilisateurRole';

export class Utilisateur {
    id: number;
    name: string;
    password: string;
    email: string;
    utilisateurRoles: UtilisateurRole[];
}
