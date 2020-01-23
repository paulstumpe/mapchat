import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Photo } from "./entity/Photo";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "test",
  entities: [
    Photo
  ],
  synchronize: true,
  logging: false
}).then(connection => {
  // here you can start to work with your entities
  let photo = new Photo();
  photo.name = "Me and Bears";
  photo.description = "I am near polar bears";
  photo.filename = "photo-with-bears.jpg";
  photo.views = 1;
  photo.isPublished = true;

  return connection.manager
    .save(photo)
    .then(photo => {
      console.log("Photo has been saved. Photo id is", photo.id);
    });
}).catch(error => console.log(error));
