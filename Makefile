#  && sudo chmod 777 node_modules
install:
	docker-compose run --rm --no-deps -w ${PWD} web yarn

test:
	docker-compose run --rm --no-deps -w ${PWD} web yarn test

test-w:
	docker-compose run --rm --no-deps -w ${PWD} web yarn test --no-coverage --watch

lint:
	docker-compose run --rm --no-deps -w ${PWD} web yarn lint

compile:
	docker-compose up -d compile

clean: | install-clean coverage-clean compile-clean

install-clean:
	docker-compose run --rm --no-deps -w ${PWD} web rm -rf node_modules

coverage-clean:
	docker-compose run --rm --no-deps -w ${PWD} web rm -rf coverage

compile-clean:
	docker-compose run --rm compile rm -rf dist

up:
	docker-compose up -d web

down:
	docker-compose kill
	docker-compose rm -f

logs:
	docker-compose logs -f web

compile-logs:
	docker-compose logs -f compile