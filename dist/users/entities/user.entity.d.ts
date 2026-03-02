import { Role } from '../../roles/entities/role.entity';
import { UserRole } from './user-role.entity';
export declare class User {
    id: number;
    name: any;
    lastName: any;
    docType: any;
    docNumber: any;
    miTest: any;
    miTest2: any;
    monica: any;
    patty: any;
    roles: Role[];
    userRoles: UserRole[];
}
