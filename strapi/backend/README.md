# [NE] Strapi application using Postgres

## To Install

First things first! Creating an new app for using Postgres as database from docker container.

At **parent** directory (cd ..), I'v runned:

```shell
$> yarn create strapi-app backend --dbclient=postgres --dbhost=localhost --dbport=5432 --dbname=strapi --dbusername=strapi --dbpassword=strapi
```

**Starting Postgres**

```shell
$> cd .. && make db-start
```

**see: [Strapi Dockerfile](../db/docker-compose.yml)**

**Starting the Strapi application**

```shell
$> cd .. && app-dev
```
