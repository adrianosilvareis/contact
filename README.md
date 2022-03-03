# Contact Backend

This project is the back-end for the Contact front-end (web & mobile).

<!-- # Docs -->

<!-- - [Contributing guide](./docs/contributing.md)
- [CHANGELOG](./docs/changelog.md)
- [UPGRADE GUIDE](./docs/upgrade-guide.md)
- [Environment variables guide](./docs/envs.md) -->

## Setup

### Requirements

- Install [docker](https://docs.docker.com/install/) (version 18.09+)
- Install [docker-compose](https://docs.docker.com/compose/install/)

### Prepare your development environment

Create a copy `.env` file from `.env.example` and populate the variables.

Build and install the dependencies:

```
make install
```

<!-- Run migrations:

```
make migrate-up migrate-admin migrate-dynamodb
``` -->

<!-- For more informations about enviroment variables, please see [envs](docs/envs.md).
If is neccessary to create another variable please don't forget to add on documentation. -->

### Running the TypeScript compiler

Start the TypeScript compiler and wait until the compiler finishes.

```
make compile compile-logs
...
> compile_1 | Found 0 errors. Watching for file changes.
```

The compiler will run in watch mode. Keep the compiler running to automatically update the compiled JS code.

### Running the application

**After starting the TypeScript compiler** ([see](#running-the-typescript-compiler)), start the app:

```
make up logs
```

The app should boot at: http://api.banking.localtest.me

To shutdown the application:

```
make down
```

## Debug your application

Open the Google Chrome browser and access: [chrome://inspect](chrome://inspect)

Click on configure and define your targets

- localhost:4001

Click on Open dedicated DevTools for Node

You are ready for debugging.

## Accessing the database

### For default database:

Run the application:

```
make up
```

Open [adminer](http://db.contact.localtest.me/) on your browser.

Configure the form with the following data:

```
System: PostgreSQL
Server: db
Username: postgres
Password: postgres
Database: contact
```

Check **Permanent login** and click on **Login**.

## Testing

#### Running tests:

```
make test
```

#### Running tests watch mode:

```
make test-w
```

## "Make" Commands

```
make install                    # Build docker containers and install node modules
make compile                    # Start the TypeScript compiler (in watch-mode)
make compile-logs               # Get logs from TypeScript compiler
make up                         # Start the application
make down                       # Stop the application
make logs                       # Get logs from application
make lint                       # Run linter
make test                       # Run tests
make test-w                     # Run tests with "watch" mode in v1 folder
```
### Commit messages

Use the format {type}({scope}): {message}. Eg:
feat(login): added remember me

## Knowing issues

If you face an issue while configuring your environment, you can refer this section to search for knowing issues.

### Running `nginx-proxy` container

When running the `nginx-proxy` container you may get an error similar to this:

```sh
(HTTP code 500) server error - driver failed programming external connectivity on endpoint nginx-proxy (d73292fccfa882bbcca7bbdb11ddaf2b76fef6aac614b48b5a1b6326cb8c7191): Error starting userland proxy: listen tcp4 0.0.0.0:80: bind: address already in use
```

For some Linux distros you may have `apache2` or something else running on port 80. To fix that, you can run the following commands on your terminal (example for `apache2`):

1. `$ systemctl status apache2`. This shows if `apache2` is running;
2. And to stop the service you can do `$ systemctl stop apache2`; and
3. Optionally, if you want to avoid the service to start with the operational system, you can run: `$ systemctl disable apache2` to disable it.

You should be able to run `nginx-proxy` now.

### Running `make install` command

When running the `make install` command you may get an error similar to this:

```sh
docker-compose run --rm --no-deps -w /home/xavier/projetos/vizir/banking/banking-backend/v1 app yarn
Creating banking-backend_app_run ... done
yarn install v1.22.17
error An unexpected error occurred: "EISDIR: illegal operation on a directory, read".
```
