import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, TextInput, DateField, EditButton } from 'react-admin';

export const TestList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <DateField label="Created date" source="created_at" />
            <DateField label="Updated date" source="updated_at" />
            <EditButton basePath="/tests" />
        </Datagrid>
    </List>
);

const TestTitle = ({ record }) => {
    return <span>Test {record ? `"${record.title}"` : ''}</span>;
};

export const TestEdit = (props) => (
    <Edit title={<TestTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="Name" />
        </SimpleForm>
    </Edit>
);

export const TestCreate = (props) => (
    <Create title="Create a Test" {...props}>
        <SimpleForm>
            <TextInput source="Name" />
        </SimpleForm>
    </Create>
);