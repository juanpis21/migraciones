import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("../../entities/user.entity").User[]>;
    getOne(userId: number): Promise<import("../../entities/user.entity").User>;
    createUser(payload: CreateUserDto): Promise<import("../../entities/user.entity").User>;
    updateUser(userId: number, payloadUpdated: UpdateUserDto): Promise<void>;
    deleteUser(userId: number): void;
}
