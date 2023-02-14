<p align="center"><a href="https://unigourmet.netlify.app" target="_blank"><img src="https://unigourmet.netlify.app/assets/img/LogoRetangular.png" width="200"></a></p>

## Dependencies

For the project to work correctly, it will be necessary to install some dependencies on your machine.

### GIT:
[WINDOWS](https://git-scm.com/download/win) <br>
[MAC](https://git-scm.com/download/mac) <br>
[LINUX](https://git-scm.com/download/linux)

### Docker:
[WINDOWS](https://docs.docker.com/docker-for-windows/install/) <br>
[MAC](https://docs.docker.com/docker-for-mac/install/) <br>
[LINUX](https://docs.docker.com/engine/install/#server)

### Docker-compose
[Docker Compose](https://docs.docker.com/compose/install/#install-compose)

### MongoDB Graphic Interface
[Mongo Compass](https://www.mongodb.com/try/download/compass)

---
## How to configurate:
With the necessary pre dependencies installed, clone the repository to your machine.
```
git clone https://github.com/Tukozaki-Dev/Unigourmet-backend/

## Install all the dependencies

To install the project's dependencies on your machine, just run the command (for this you need to have yarn installed on your machine):

yarn install
```
After completing the previous step, run the following command to run the application.
```
docker-compose up -d --build
```
The command above will build the images and upload the application's containers.<br>
After the correct build, the application will be running at the address [http://localhost:4000](http://localhost:4000/)

To kill the containers if necessary, run the following command:
```
docker-compose down
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
