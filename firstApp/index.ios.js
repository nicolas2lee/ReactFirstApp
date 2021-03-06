/*import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class firstApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('firstApp', () => firstApp);*/
import React, {Component} from 'react';
import {AppRegistry, View,Text, StyleSheet, TouchableOpacity} from 'react-native';

class HelloThere extends Component {
  clickMe() {
    alert('Hi!');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clickMe.bind(this)}>
          <View style={styles.box}>
            <Text>Hello {this.props.name}. Please click me.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    borderColor: 'red',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: 100,
    height: 100
  }
});
/*
var MainComponent = function() {
  this.render = function() {
    return <HelloThere name="Component" />;
  }
};*/

class firstApp extends Component{
	render(){
		return (
			<HelloThere name="Component" />
		);
	}
}

AppRegistry.registerComponent('firstApp', () => firstApp);

