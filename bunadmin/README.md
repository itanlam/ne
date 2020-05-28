# BunAdmin

A simple graphql admin dashboard(Front-End Only). Easy to expand with the flexible plugin. Graphql first, also supports api. Based on React, Next.js, Material-UI, Realtime RxDB, Formik, I18N. Free and Open Source for personal and commercial purposes.

## Feature

* ✅ Plugins / One-click Update Plugins *
* ✅️ Multi-user *
* ✅️ Multi-language
* ✅ Data migration *
* ✅ Log / message *
* ✅ Common Components
* ✅ MDX Documentation
* ✅ Dockerfile & Deploy Shell

## Demo
[Online Demo](https://strapi-demo.bunadmin.com/)

[Documentation](https://strapi-demo.bunadmin.com/doc/components/table)

Username / password: `bunadmin_test`

See more on [bunadmin-example-strapi](https://github.com/bunred/bunadmin-example-strapi)

## Screenshot
Sign in
![Sign in](https://gblobscdn.gitbook.com/assets%2F-M1ZbjnBaWO_NJOdj8_A%2F-M6mhhE1-tUO_GCYLgQI%2F-M6miE4Tjmp-npJcYvYz%2Fsign-in.png)

Data Migration
![Data Migration](https://gblobscdn.gitbook.com/assets%2F-M1ZbjnBaWO_NJOdj8_A%2F-M6mrbAysZsBxMpDj2In%2F-M6mj7lcCEI3UeWeLkip%2Fcore-migration.png)

[More screenshots](https://chris533.gitbook.io/bunadmin/screenshot)


## How to use
Download the code [or clone the repo](https://github.com/bunred/bunadmin):

```
git clone https://github.com/bunred/bunadmin.git
cd bunadmin
```

Install packages: (You can [install the Yarn v1.2.0+ package here](https://yarnpkg.com/))

```
yarn
cp env-example.js env.js
yarn run dev
```
Install plugins  and run
```
cp plugins-info-example.json plugins-info.json
node plugins-update.js
```
Open [http://localhost:1911/](http://localhost:1911/)

## Plugin

#### One-click install / update plugins
```
cp plugins-info-example.json plugins-info.json
node plugins-update.js
```
You can contribute your open plugin to [bunadmin plugins public library](https://github.com/bunred/bunadmin-plugins)

You can also create your own [private plugin](https://github.com/bunred/bunadmin/blob/master/plugins-info-example.json#L41)

---

**Required plugin**

[User Auth](https://github.com/bunred/bunadmin-plugin-buncms-user): api example

Example plugin

[Strapi User](https://github.com/bunred/bunadmin-plugin-buncms-strapi-user): api example

[File Explore](https://github.com/bunred/bunadmin-plugin-buncms-file): graphql example

[Data Source Strapi](https://github.com/bunred/bunadmin-plugin-data-source-strapi): data source api example

[Strapi Blog](https://github.com/bunred/bunadmin-plugin-strapi-blog-example): api example

*You should clone to build your own plugin*

---

#### Plugin structure

- /plugins/[team]-[group]
    - /[name]
        - index.tsx
        - column.tsx
        - /utils
            - initData.tsx
    - /[name]
        - index.tsx
    - package.json

Example:
- /plugins/bunadmin-blog
    - /post
        - index.tsx
        - column.tsx
        - /utils
            - initData.tsx
    - /category
        - index.tsx
    - package.json
    
## Develop

#### intData

Used to generate schema and menus data. [example code](https://github.com/bunred/bunadmin-plugin-strapi-blog-example/blob/master/utils/initData.tsx)

#### Column
Column define how your data looks. [example code](https://github.com/bunred/bunadmin-plugin-buncms-user/blob/master/list/columns.tsx) | [read more](https://material-table.com/#/docs/get-started)

#### Theme

There is only one theme for now which refers to [ngx-admin](https://github.com/akveo/ngx-admin).

#### Deployment
```
cp deploy-example.sh deploy.sh
./deploy.sh
```
AliCloud:

*Append the following content to* `deploy.sh`
```
docker tag ${container} registry.cn-shenzhen.aliyuncs.com/bunlu/${container}:1.0.1
docker push registry.cn-shenzhen.aliyuncs.com/bunlu/${container}:1.0.1
```

Heroku:
*Checkout the branch* `delpoy_heroku_example`
*Replace the following content to* `deploy.sh`
```
heroku container:push web
heroku container:release web
```

#### Backup private files
Usually you need to manually backup the following files

* env.js
* deploy.sh
* plugins-info.json
* yarn.lock

#### Create your own document
*Use mdx to combine your own components.*

Add these two plugins to `plugin-info.json`
[doc](https://github.com/bunred/bunadmin-plugins/blob/master/navigation/documentation/bunred/bunadmin-plugin-doc.json) [file](https://github.com/bunred/bunadmin-plugins/blob/master/navigation/file-upload/bunred/bunadmin-plugin-buncms-file.json)

Refer to [bunadmin-plugin-doc](https://github.com/bunred/bunadmin-plugin-doc.git) to make your document

#### Thanks

[material-ui](https://github.com/mui-org/material-ui)
[material-table](https://github.com/mbrn/material-table)
[next.js](https://github.com/zeit/next.js)
[rxdb](https://github.com/pubkey/rxdb)
[formik](https://github.com/jaredpalmer/formik)
[ngx-admin](https://github.com/akveo/ngx-admin)
[ant-design-pro](https://github.com/ant-design/ant-design-pro)
[react-admin](https://github.com/marmelab/react-admin)
...

❤️🎉
