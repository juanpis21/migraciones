import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Param, 
    Delete,
    HttpCode,
    HttpStatus,
    ValidationPipe
} from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { Role } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Post()
    create(@Body(ValidationPipe) createRoleDto: CreateRoleDto) {
        return this.rolesService.create(createRoleDto);
    }

    @Get()
    findAll() {
        return this.rolesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.rolesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body(ValidationPipe) updateRoleDto: UpdateRoleDto) {
        return this.rolesService.update(+id, updateRoleDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.rolesService.remove(+id);
    }

    @Post(':roleId/users/:userId')
    assignRoleToUser(@Param('roleId') roleId: string, @Param('userId') userId: string) {
        return this.rolesService.assignRoleToUser(+userId, +roleId);
    }

    @Delete(':roleId/users/:userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    removeRoleFromUser(@Param('roleId') roleId: string, @Param('userId') userId: string) {
        return this.rolesService.removeRoleFromUser(+userId, +roleId);
    }

    @Get('users/:userId')
    getUserRoles(@Param('userId') userId: string) {
        return this.rolesService.getUserRoles(+userId);
    }
}
