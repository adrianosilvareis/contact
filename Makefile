#  && sudo chmod 777 node_modules
install:
	docker-compose run --rm --no-deps -w ${PWD} web yarn

install-clean:
	docker-compose run --rm --no-deps -w ${PWD} web rm -rf node_modules && rm -rf coverage

test:
	docker-compose run --rm --no-deps -w ${PWD} web yarn test

test-w:
	docker-compose run --rm --no-deps -w ${PWD} web yarn test --no-coverage --watch