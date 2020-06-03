import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, TextInput, DateField, EditButton } from 'react-admin';

export const MatherList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <DateField label="Created date" source="created_at" />
            <DateField label="Updated date" source="updated_at" />
            <EditButton basePath="/mathers" />
        </Datagrid>
    </List>
);

const MatherTitle = ({ record }) => {
    return <span>Mather {record ? `"${record.title}"` : ''}</span>;
};

export const MatherEdit = (props) => (
    <Edit title={<MatherTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="Name" />
        </SimpleForm>
    </Edit>
);

export const MatherCreate = (props) => (
    <Create title="Create a Mather" {...props}>
        <SimpleForm>
            <TextInput source="Name" />
        </SimpleForm>
    </Create>
);