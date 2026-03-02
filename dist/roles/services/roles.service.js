"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../entities/role.entity");
const user_role_entity_1 = require("../../users/entities/user-role.entity");
let RolesService = class RolesService {
    roleRepository;
    userRoleRepository;
    constructor(roleRepository, userRoleRepository) {
        this.roleRepository = roleRepository;
        this.userRoleRepository = userRoleRepository;
    }
    async create(roleData) {
        const role = this.roleRepository.create(roleData);
        return await this.roleRepository.save(role);
    }
    async findAll() {
        return await this.roleRepository.find({ relations: ['users'] });
    }
    async findOne(id) {
        return await this.roleRepository.findOne({
            where: { id },
            relations: ['users']
        });
    }
    async update(id, roleData) {
        await this.roleRepository.update(id, roleData);
        const updatedRole = await this.findOne(id);
        if (!updatedRole) {
            throw new Error(`Role with id ${id} not found`);
        }
        return updatedRole;
    }
    async remove(id) {
        await this.roleRepository.delete(id);
    }
    async assignRoleToUser(userId, roleId) {
        const userRole = this.userRoleRepository.create({ userId, roleId });
        return await this.userRoleRepository.save(userRole);
    }
    async removeRoleFromUser(userId, roleId) {
        await this.userRoleRepository.delete({ userId, roleId });
    }
    async getUserRoles(userId) {
        const userRoles = await this.userRoleRepository.find({
            where: { userId },
            relations: ['role'],
        });
        return userRoles.map(ur => ur.role);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(1, (0, typeorm_1.InjectRepository)(user_role_entity_1.UserRole)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map