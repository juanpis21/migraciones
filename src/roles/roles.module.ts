import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { UserRole } from '../users/entities/user-role.entity';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Role, UserRole])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
