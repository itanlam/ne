JAR_NAME = strapi-0.0.1-SNAPSHOT.jar
APP_PATH = strapi
APP_IMAGE_NAME = strapi
APP_CONTAINER_NAME = strapi
DOCKER_COMPOSE_FILE = docker-compose.yml
DB_DATA_PATH = ~/volumes/data/strapi/db
DB_DOCKER_COMPOSE_FILE = db/docker-compose.yml

.DEFAULT: help
.PHONY : help

help : Makefile
	@sed -n 's/^##//p' $<
 
## make prune             : docker system prune -a --volumes
##                          TAKE CARE WITH PRUNE!
prune: 
	docker system prune -a --volumes

## make ps                : docker ps --all

ps: 
	docker ps --all

## make stats             : docker container stats $(docker container ps --format={{.Names}})
##                          To list all running containers with CPU, Memory, Networking I/O and Block I/O stats.

stats: 
	docker container stats $(docker container ps --format={{.Names}})

## make network           : docker network ls

network:
	docker network ls

## make volumes           : mkdir -p ~/volumes/$(APP_CONTAINER_NAME)/www/html/

volumes: 
	mkdir -p $(DB_DATA_PATH)

## make db-start         : docker-compose -f $(DB_DOCKER_COMPOSE_FILE) up -d 

db-start: 
	docker-compose -f $(DB_DOCKER_COMPOSE_FILE) up -d 

## make db-stop          : docker-compose -f $(DB_DOCKER_COMPOSE_FILE) stop 

db-stop: 
	docker-compose -f $(DB_DOCKER_COMPOSE_FILE) stop

## make app-dev          : cd backend && yarn develop

app-dev: 
	cd backend && yarn develop

## make app-start        : cd backend && yarn start

app-start: 
	cd backend && yarn start

## make app-install      : cd backend && yarn install

app-install: 
	cd backend && yarn install

## End Makefile 