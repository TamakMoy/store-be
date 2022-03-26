import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('account')
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    username: string;

    @Column({ type: 'varchar', select: false })
    password: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean;

    @Column({ type: 'boolean', default: true })
    enable: boolean;

    @Column({ type: 'boolean', default: false })
    isActived: boolean;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: Date;
}