import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { UserRole } from './user-role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name;

    @Column({ type: 'varchar', length: 255 })
    lastName;

    @Column({ type: 'varchar', length: 255 })
    docType;

    @Column({ type: 'varchar', length: 255 })
    docNumber;

    @Column({ type: 'varchar', length: 55 })
    miTest;

    @Column({ type: 'varchar', length: 255 })

    //hola sapos//
    miTest2;

    @Column({ type: 'varchar', length: 255 })
    monica;

    //comentario de shari
    @Column({ type: 'varchar', length: 55 })
    patty;

    @ManyToMany(() => Role, role => role.users)
    @JoinTable({
        name: 'user_roles',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }
    })
    roles: Role[];

    @ManyToMany(() => UserRole, userRole => userRole.user)
    userRoles: UserRole[];
}
