import { RolesService } from '../services/roles.service';
import { Role } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: string): Promise<Role | null>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role>;
    remove(id: string): Promise<void>;
    assignRoleToUser(roleId: string, userId: string): Promise<import("../../users/entities/user-role.entity").UserRole>;
    removeRoleFromUser(roleId: string, userId: string): Promise<void>;
    getUserRoles(userId: string): Promise<Role[]>;
}
