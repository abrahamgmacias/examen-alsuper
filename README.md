# Examen Técnico Alsuper

El servidor de una aplicación que simula una librería.

## Requistos previos

Para correr la API se necesita:
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

## Authors

- **Abraham González** - [abrahamgmacias](https://github.com/abrahamgmacias)

## License

This project is licensed under the [MIT License](https://github.com/CanteraTalentoChihuahua/payroll-mind-backend/blob/main/LICENSE).

## Made with

- [express](https://expressjs.com)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Sequelize](https://sequelize.org)
- [OpenAPI](https://www.openapis.org)
