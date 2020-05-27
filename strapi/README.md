Thanks https://shields.io !

# [NE] Strapi using Postgres

The project [Strapi NE](https://github.com/itanlam/ne/projects/1)

## To Install

First things first. Creating an new app for using Postgres as database from docker container.

yarn create strapi-app backend --dbclient=postgres --dbhost=localhost --dbport=5432 --dbname=strapi --dbusername=strapi --dbpassword=strapi

**see: [Strapi Dockerfile](db/docker-compose.yml)**

**Starting Postgres**

```shell
$> make app-dev
```

**Stoping Postgres**

```shell
$> make app-start
```
