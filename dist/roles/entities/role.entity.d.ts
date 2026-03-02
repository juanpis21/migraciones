import { User } from '../../users/entities/user.entity';
import { UserRole } from '../../users/entities/user-role.entity';
export declare class Role {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    users: User[];
    userRoles: UserRole[];
}
