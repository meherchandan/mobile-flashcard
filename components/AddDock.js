import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import {addDeck} from './../actions';
class AddDock extends Component {

    state = {
        dockname: ''
    }

    onChangeText = (text) => {
        this.setState({dockname: text});
    }
    onSubmit = () => {
        const {dispatch, navigation} = this.props;
        const {dockname} = this.state;
        let data = {};
        data[dockname] = {
            "title": dockname,
            "questions": []
        }
        dispatch(addDeck(data));

        navigation.navigate('MainDockNavigator');
        this.setState({dockname: ''});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the name of your dock?</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    maxLength={120}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.dockname}/>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                    this.onSubmit();
                }}>
                    <Text style={styles.btnText}>Add Dock</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {docks: state}
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: '50%',
        height: 50,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: '#61dafb',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 5
    },
    textInput: {
        height: 70,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        marginTop: 50,
        borderColor: "grey",
        borderWidth: 2,
        fontSize: 25
    },
    title: {
        fontSize: 40,
        fontWeight: "400",
        color: "darkblue"
    },
    btnText: {
        fontSize: 25,
        fontWeight: "400",
        color: "darkblue"
    }
})

export default connect(mapStateToProps)(AddDock)