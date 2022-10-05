const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Temple API'
  },
  host: 'project-1-x86b-wcm0.onrender.com',
  schemes: ['https']
};

const outputFile = './routes/swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
