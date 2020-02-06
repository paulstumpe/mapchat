// import "reflect-metadata";
// import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm";
// import { Locations } from "./Locations";
// import { Comments } from "./Comments";
// import { Users } from "./Users";
// import { Likes } from "./Likes";


// @Entity()
// export class Friends {

//   @PrimaryGeneratedColumn()
//   id: number;


//   @CreateDateColumn()
//   time_created: Date;

//   @UpdateDateColumn()
//   updated_at: Date;

//   @OneToOne(type => Users, (primaryUser: Users) => primaryUser, {
//     // eager: true
//   })
//   primaryUser: Users;

//   @ManyToOne(type => Users, (friends: Users) => friends, {
//     eager: true
//   })
//   friends: Users [];
// }


// @Entity()
// export class Service extends BaseEntity {

//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   @Index({ unique: true })
//   title: string;

//   @ManyToOne(type => Service, service => service.children)
//   parent: Service;

//   @OneToMany(type => Service, service => service.parent)
//   children: Service[];
// }

// let allServices = await this.repository.createQueryBuilder('category')
//   .andWhere('category.price IS NULL')
//   .innerJoinAndSelect('category.children', 'product')
//   .leftJoinAndSelect('product.children', 'addon')
//   .getMany();
