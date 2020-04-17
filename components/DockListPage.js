import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DockPage from './DockPage';

class DockListPage extends Component {
    render() {
        const {dock, navigation} = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                navigation.navigate('DockPage', {dock});
            }}>
                <Text style={styles.title}>{dock.title}</Text>
                <Text style={styles.cards}>{`${dock.questions.length} ${dock.questions.length > 1
                        ? 'cards'
                        : 'card'}`}</Text>
            </TouchableOpacity>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {prop: state.prop}
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 130,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: '#61dafb',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "400",
        color: "darkblue"
    },
    cards: {
        paddingTop: 20,
        fontSize: 20,
        color: 'maroon'
    }
})
export default connect(mapStateToProps)(DockListPage)