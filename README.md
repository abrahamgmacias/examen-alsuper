# Examen Técnico Alsuper

El servidor de una aplicación que simula una librería para propósitos de evaluación técnica.

## Requistos previos

Para correr la API se necesitas:
- Node.js (Version 16 recommended)
- npm (Version 8 recommended)
- Una instancia de MySQL

## Instalación

### Instalar librerías

Primero, instala las librerías para el proyecto. Puedes hacer esto con el comando `npm install`.

### Variables de entorno

Las credenciales necesarias para los servicios se encuentran en .env. Sin embargo, cambia la dirección y datos de autorización de tu base de datos en src/database/config/config.json.

### Correr el servidor

Una vez conectada la base de datos y las variables de entorno listas, puedes iniciar la API con los siguiente comandos:

```
npm run build
npm run start
```

### Testear la aplicación

Descarga los tests en JSON e importalos a Postman. Con ellos podrás probar cada una de las funcionalidades. Ojo, algunas de ellas requieren de iniciar sesión así que usa primeramente 'Login éxitoso' de la colección Login para guardar el token de sesión.

## Autores

- **Abraham González** - [abrahamgmacias](https://github.com/abrahamgmacias)

## Hecho con

- [express](https://expressjs.com)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Sequelize](https://sequelize.org)
- [OpenAPI](https://www.openapis.org)
