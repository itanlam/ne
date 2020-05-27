# [NE] Strapi application using Postgres

The project [Strapi NE](https://github.com/itanlam/ne/projects/1)

## DB

[Postgres](./db/README.md)

## APP

[Backend](./backend/README.md)

## Rest client

```javascript
POST http://localhost:1337/auth/local HTTP/1.1
User-Agent: rest-client
Accept-Language: en-GB,en-US;q=0.8,en;q=0.6,zh-CN;q=0.4
Content-Type: application/json

{
  "identifier": "guest@gmail.com",
  "password": "123456"
}
```

[Rest.client file](./Rest.client)

# References

- [Github.com strapi-docker](https://github.com/strapi/strapi-docker)
- [Visualstudio Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
