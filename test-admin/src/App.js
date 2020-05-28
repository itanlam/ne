import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate } from './posts.js';

const url = 'http://localhost:1337/auth/local';

function App() {
  return (
    <Admin dataProvider={restProvider(url)}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  );
}

export default App;
