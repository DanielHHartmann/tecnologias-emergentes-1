import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config(); 
const PORT = process.env.PORT || 4040;
const doc = {
  info: {
    version: "1.0.0",
    title: "Tecnologias Emergentes",
    description: "Documentação da API criada em sala",
  },
  servers: [
    {
      url: "http://localhost:" + PORT,
    }
  ],
  components: {
    schemas: {
      InternalServerError: {
        code: "",
        message: "",
      },
      User: {
        name: "",
        email: "",
        password: "",
      },
      Task: {
        description: "",
      },
      Product: {
        name: "",
        description: "",
        price: 0,
        category: "",
        brand: ""
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer"
      }
    }
  },
};

const outputFile = "./config/swagger.json";
const endpointsFiles = ["./routes.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc)
  .then(async () => {
    await import("./server.js");
  });
