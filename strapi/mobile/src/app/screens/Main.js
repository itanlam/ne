import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    List,
    Colors,
    Portal,
    Dialog,
    Paragraph,
    TextInput,
    HelperText,
    Button,
    Checkbox,
} from 'react-native-paper';

export const MainView = props => {
    const {
        title: passedPropsTitle,
        description: passedPropsDesc,
        finished: passedPropsFinished,
        id,
    } = props.item;

    const [passedTitle] = React.useState(passedPropsTitle);
    const [passedDesc] = React.useState(passedPropsDesc);
    const [passedFinished] = React.useState(
        passedPropsFinished,
    );
    const [error, setError] = React.useState('');
    const [title, setTitle] = React.useState(passedTitle);
    const [visible, setVisible] = React.useState(false);
    const [description, setDescription] = React.useState(passedDesc);
    const [finished, setFinished] = React.useState(passedFinished);

    return (
        <>
            <List.Item
                onPress={() => {
                    setVisible(true);
                }}
                title={passedTitle}
                description={passedDesc}
                right={pprops => {
                    if (passedFinished) {
                        return (
                            <List.Icon
                                {...pprops}
                                color={Colors.green300}
                                icon="check-circle"
                            />
                        );
                    }

                    return null;
                }}
            />

            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title>Edit your todo</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                            Editing your todo will also change it in Strapi.
                        </Paragraph>

                        <View style={styles.divider} />

                        <TextInput
                            label="title"
                            placeholder="title"
                            onChangeText={text => {
                                setTitle(text);
                                setError(false);
                            }}>
                            {title}
                        </TextInput>

                        <View style={styles.divider} />

                        <TextInput
                            label="description"
                            placeholder="description"
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => {
                                setDescription(text);
                                setError(false);
                            }}>
                            {description}
                        </TextInput>

                        <HelperText type="error">{error}</HelperText>
                        {error.length > 0 ? <View style={styles.divider} /> : null}

                        <View
                            style={{
                                flexDirection: 'row',
                                alignContent: 'center',
                            }}>
                            <Checkbox
                                status={finished ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setFinished(!finished);
                                }}
                            />
                            <Paragraph style={{ paddingLeft: 16, alignSelf: 'center' }}>
                                Finished
                            </Paragraph>
                        </View>
                    </Dialog.Content>

                    <Dialog.Actions>
                        <Button>delete</Button>
                        <View style={{ flex: 1 }} />
                        <Button
                            onPress={() => {
                                setVisible(false);
                                setError('');
                            }}>
                            Cancel
                        </Button>
                        <Button>Save</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
};

const styles = StyleSheet.create({
    divider: {
        height: 16,
    },
});

export default MainView;