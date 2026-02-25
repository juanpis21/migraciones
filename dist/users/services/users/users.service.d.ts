import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/user.dto';
export declare class UsersService {
    private userRepo;
    users: User[];
    constructor(userRepo: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(userId: number): Promise<User>;
    createUser(payload: CreateUserDto): Promise<User>;
    updateUser(id: number, payloadUpdated: UpdateUserDto): Promise<void>;
    deleteUser(idUser: number): Promise<import("typeorm").DeleteResult>;
}
