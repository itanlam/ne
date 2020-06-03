import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, TextInput, DateField, EditButton } from 'react-admin';

export const FatherList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <DateField label="Created date" source="created_at" />
            <DateField label="Updated date" source="updated_at" />
            <EditButton basePath="/fathers" />
        </Datagrid>
    </List>
);

const FatherTitle = ({ record }) => {
    return <span>Father {record ? `"${record.title}"` : ''}</span>;
};

export const FatherEdit = (props) => (
    <Edit title={<FatherTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="Name" />
        </SimpleForm>
    </Edit>
);

export const FatherCreate = (props) => (
    <Create title="Create a Father" {...props}>
        <SimpleForm>
            <TextInput source="Name" />
        </SimpleForm>
    </Create>
);