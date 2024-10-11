// DATOS DEL SERVIDOR 
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js";
//ESQUEMAS
import Auto from "../Auto.js";

const autosData = [
    {
      name: "Toyota Corolla",
      modelo: "Sedán",
      year: "2022"
    },
    {
      name: "Honda Civic",
      modelo: "Hatchback",
      year: "2023"
    },
    {
      name: "Ford Mustang",
      modelo: "Coupé",
      year: "2021"
    },
    {
      name: "Chevrolet Camaro",
      modelo: "Convertible",
      year: "2022"
    },
    {
      name: "Volkswagen Golf",
      modelo: "Hatchback",
      year: "2023"
    },
    {
      name: "BMW Serie 3",
      modelo: "Sedán",
      year: "2022"
    },
    {
      name: "Mercedes-Benz Clase C",
      modelo: "Sedán",
      year: "2023"
    },
    {
      name: "Audi A4",
      modelo: "Sedán",
      year: "2021"
    },
    {
      name: "Nissan Altima",
      modelo: "Sedán",
      year: "2022"
    },
    {
      name: "Mazda CX-5",
      modelo: "SUV",
      year: "2023"
    }
  ];
  
  Auto.insertMany(autosData)

