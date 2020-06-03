import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, TextField, TextInput, DateField, ReferenceField, ReferenceInput, SelectInput, EditButton } from 'react-admin';

export const SonList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="Name" />
            <ReferenceField source="fatherId" reference="fathers">
                <TextField source="Name" />
            </ReferenceField>
            <ReferenceField source="matherId" reference="mathers">
                <TextField source="Name" />
            </ReferenceField>
            <DateField label="Created date" source="created_at" />
            <DateField label="Updated date" source="updated_at" />
            <EditButton basePath="/sons" />
        </Datagrid>
    </List>
);

const SonTitle = ({ record }) => {
    return <span>Son {record ? `"${record.title}"` : ''}</span>;
};

export const SonEdit = (props) => (
    <Edit title={<SonTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="Name" />
            <ReferenceInput source="fatherId" reference="fathers">
                <SelectInput optionText="Name" />
            </ReferenceInput>
            <ReferenceInput source="matherId" reference="mathers">
                <SelectInput optionText="Name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const SonCreate = (props) => (
    <Create title="Create a Son" {...props}>
        <SimpleForm>
            <TextInput source="Name" />
            <ReferenceInput source="fatherId" reference="fathers">
                <SelectInput optionText="Name" />
            </ReferenceInput>
            <ReferenceInput source="matherId" reference="mathers">
                <SelectInput optionText="Name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);