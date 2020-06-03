import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from './ra-strapi-rest';
import authProvider from './authProvider'
import Cookies from './helpers/Cookies';

import { TestList, TestEdit, TestCreate } from './tests';
import { FatherList, FatherEdit, FatherCreate } from './fathers';
import { MatherList, MatherEdit, MatherCreate } from './mathers';
import { SonList, SonEdit, SonCreate } from './sons';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = Cookies.getCookie('token')
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:1337', httpClient);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="tests" list={TestList} edit={TestEdit} create={TestCreate} />
    <Resource name="fathers" list={FatherList} edit={FatherEdit} create={FatherCreate} />
    <Resource name="mathers" list={MatherList} edit={MatherEdit} create={MatherCreate} />
    <Resource name="sons" list={SonList} edit={SonEdit} create={SonCreate} />
  </Admin>
);

export default App;