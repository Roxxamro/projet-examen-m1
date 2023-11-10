/* eslint-disable import/no-cycle */
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  export type UserId = string & { __brand: 'User' };
  
  @Entity('Users')
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UserId;
  
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
  }