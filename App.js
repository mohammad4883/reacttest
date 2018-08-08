import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    Text,
    View,
    StyleSheet,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ActionButton from 'react-native-circular-action-menu';


export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Edit this text!'};
    }

    static navigationOptions = {
        title: 'Home',


    };


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.View1}>
                    <Text style={styles.TextStyle}>Home Screen</Text>


                    <TextInput
                        style={styles.InputTextStyle}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>

                <View style={styles.View2}>

                    <ActionButton buttonColor="#fff" buttonTextColor='#ffe0b2' position='right'
                                  onPress={() => alert('You tapped the Decrypt button!')}>
                    </ActionButton>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: this.state.text,
                        });
                    }}>
                        <Text style={styles.ButtonStyle}>Let`s go</Text>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View  style={styles.container}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />

                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
            </View>
        );
    }
}


const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'rgba(255,183,77 ,.9)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <View style={{flexDirection: 'row'}}>
                    <Text style={{margin: 16, color: "#fff", fontSize: 16, fontWeight: 'bold'}}
                          onPress={() => alert('This is a button!')}>info</Text>
                    <Text style={{margin: 16, color: "#fff", fontSize: 16, fontWeight: 'bold'}}
                          onPress={() => alert('This is a button22!')}>info2</Text>
                </View>


            ),
        },
    }
);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    View1: {
        alignItems: 'center',
        backgroundColor: '#fff3e0',
        color: 'black',
        flex: 2,
        width: '100%',
        height: '100%',
    },
    View2: {
        backgroundColor: '#ffe0b2',
        color: 'black',
        flex: 1,
        width: '100%',
        height: '100%',


    },
    ButtonStyle: {
        textAlign:'center',
        margin: 16,
        backgroundColor: '#fff',
        borderRadius: 30,
        color: 'orange',
        fontSize: 20,
        padding: 10,
    },
    TextStyle: {
        alignContent: 'center',
        color: '#787878',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        flex:1
        // borderColor: '#b7b7b7'
        // borderWidth:1
    },
    InputTextStyle: {
        textAlign:'center',
        margin: 16,
        backgroundColor: '#fff',
        borderRadius: 30,
        color: 'orange',
        fontSize: 20,
        padding: 10,
        // borderColor: '#b7b7b7',
        //  borderWidth: 1
    }

});