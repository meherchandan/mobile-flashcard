import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {addDeck} from './../actions';
import data from './../data/Data.json';
import DockListPage from './DockListPage';
class MainDock extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(addDeck(data));
    }

    render() {
        const {docks} = this.props;
        return (
            <ScrollView >
                {Object
                    .keys(docks)
                    .map(key => (<DockListPage key={key} dock={docks[key]} {...this.props}/>))
}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {docks: state}
}

export default connect(mapStateToProps)(MainDock)