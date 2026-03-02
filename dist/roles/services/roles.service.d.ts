import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { UserRole } from '../../users/entities/user-role.entity';
export declare class RolesService {
    private readonly roleRepository;
    private readonly userRoleRepository;
    constructor(roleRepository: Repository<Role>, userRoleRepository: Repository<UserRole>);
    create(roleData: Partial<Role>): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role | null>;
    update(id: number, roleData: Partial<Role>): Promise<Role>;
    remove(id: number): Promise<void>;
    assignRoleToUser(userId: number, roleId: number): Promise<UserRole>;
    removeRoleFromUser(userId: number, roleId: number): Promise<void>;
    getUserRoles(userId: number): Promise<Role[]>;
}
