/* eslint-disable import/no-cycle */
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Book } from './Book'; // Import the relevant relationships or other necessary imports
  
  export type UserId = string & { __brand: 'User' };
  
  @Entity('Users')
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UserId;
  
    @Column()
    username: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  }