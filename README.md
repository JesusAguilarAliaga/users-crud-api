# User CRUD API
Este proyecto es una API CRUD (Crear, Leer, Actualizar, Eliminar) que gestiona usuarios. Permite realizar operaciones básicas sobre entidades de usuario, como agregar un nuevo usuario, obtener la información de un usuario existente, actualizar los detalles de un usuario y eliminar un usuario.

## Requisitos:
Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde nodejs.org.

## Instalación:
1. Clona este repositorio en tu máquina local:
`git clone https://github.com/tu-usuario/user-crud-api.git`

2. Navega al directorio del proyecto:
`cd user-crud-api`

3. Instala las dependencias del proyecto:
`npm install`

4. env:
`BASE_URL=http://localhost:3000`

## Uso
Inicia el servidor:
`npm run dev`

- El servidor estará disponible en http://localhost:3000 (o en el puerto que hayas configurado).

- Utiliza una herramienta como Postman o curl para interactuar con la API.

### Endpoints
- GET /users: Obtiene la lista de todos los usuarios.
- GET /users/:userId: Obtiene los detalles de un usuario específico.
- POST /users: Crea un nuevo usuario.
- PUT /users/:userId: Actualiza los detalles de un usuario existente.
- DELETE /users/:userId: Elimina un usuario.
- Ejemplo de solicitud (Postman)
- GET /users: Obtiene la lista de usuarios.


## Contribuciones
Si encuentras algún error o tienes sugerencias para mejorar la API, por favor, abre un issue o envía una pull request.

## Licencia
Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.