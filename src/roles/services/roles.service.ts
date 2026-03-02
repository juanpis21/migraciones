import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { UserRole } from '../../users/entities/user-role.entity';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}

  async create(roleData: Partial<Role>): Promise<Role> {
    const role = this.roleRepository.create(roleData);
    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find({ relations: ['users'] });
  }

  async findOne(id: number): Promise<Role | null> {
    return await this.roleRepository.findOne({ 
      where: { id }, 
      relations: ['users'] 
    });
  }

  async update(id: number, roleData: Partial<Role>): Promise<Role> {
    await this.roleRepository.update(id, roleData);
    const updatedRole = await this.findOne(id);
    if (!updatedRole) {
      throw new Error(`Role with id ${id} not found`);
    }
    return updatedRole;
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }

  async assignRoleToUser(userId: number, roleId: number): Promise<UserRole> {
    const userRole = this.userRoleRepository.create({ userId, roleId });
    return await this.userRoleRepository.save(userRole);
  }

  async removeRoleFromUser(userId: number, roleId: number): Promise<void> {
    await this.userRoleRepository.delete({ userId, roleId });
  }

  async getUserRoles(userId: number): Promise<Role[]> {
    const userRoles = await this.userRoleRepository.find({
      where: { userId },
      relations: ['role'],
    });
    return userRoles.map(ur => ur.role);
  }
}
