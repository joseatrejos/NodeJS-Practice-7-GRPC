const grpc = require('@grpc/grpc-js');
const loader = require('@grpc/proto-loader');

const pkg_definition = loader.loadSync(_dirname + "/receta.proto");
const receta = grpc.loadPackageDefinition(pkg_definition).receta;
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 4000;
const server = new grpc.Server();

server.addService(receta.ServicioReceta.service, {
    obtenerMetaData: (call, cb) => {
        cb(null, {
            pid: process.pid
        });
    },
    obtenerReceta: (call, cb) => {
        cb(null, {
            pid: process.pid
        });
    }
});
