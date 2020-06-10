'use strict';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {AppRegistry ,  Image} from 'react-native';
import {SocialIcon} from 'react-native-elements';


// react native elements and vector -icons


/*
export default class App extends Component{

    render(){

        return(

            <ScrollView>

                      <Text style={{ fontSize: 20, margin : 20, textAlign: 'center' }}>
                    	Beautiful Social Icons and Social Buttons from React Native Elements
                      </Text>

                    	<View style={{ flex: 1, flexDirection: 'row' , margin : 20}}>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="facebook"
                    		  onPress={() => {
                    			alert('facebook');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Facebook</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="github"
                    		  onPress={() => {
                    			alert('github');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>GitHub</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="gitlab"
                    		  onPress={() => {
                    			alert('gitlab');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Gitlab</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="github-alt"
                    		  onPress={() => {
                    			alert('github');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>GitHub-alt</Text>
                    	  </View>

                    	</View>

                    	<View style={{ flex: 1, flexDirection: 'row', margin : 20 }}>

                    	<View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="instagram"
                    		  onPress={() => {
                    			alert('instagram');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Instagram</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="linkedin"
                    		  onPress={() => {
                    			alert('linkedin');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Linkedin</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="pinterest"
                    		  onPress={() => {
                    			alert('pinterest');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Pinterest</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="reddit-alien"
                    		  onPress={() => {
                    			alert('reddit');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Reddit-Alien</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="youtube"
                    		  onPress={() => {
                    			alert('youtube');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Youtube</Text>
                    	  </View>

                    	</View>

                    	<View style={{ flex: 1, flexDirection: 'row' , margin:20}}>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="twitter"
                    		  onPress={() => {
                    			alert('twitter');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Twitter</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="vimeo"
                    		  onPress={() => {
                    			alert('vimeo');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}>Vimeo</Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column' }}>
                    		<SocialIcon
                    		  type="wordpress"
                    		  onPress={() => {
                    			alert('wordpress');
                    		  }}
                    		/>
                    		<Text>wordpress</Text>
                    	  </View>

                    	</View>

                    	<View style={{ flex: 1, flexDirection: 'row' , margin:20 }}>

                    	  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    		<SocialIcon
                    		  type="stack-overflow"
                    		  onPress={() => {
                    			alert('stack-overflow');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}> StackOverflow </Text>
                    	  </View>

                    	  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    		<SocialIcon
                    		  type="google-plus-official"
                    		  onPress={() => {
                    			alert('google-plus-official');
                    		  }}
                    		/>
                    		<Text style={{ textAlign: 'center' }}> Google Plus </Text>
                    	  </View>

                    	</View>


            </ScrollView>

        )
    }

}


const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/



/* to show image from url */
export default class Myproject extends Component
{

render() {

let image_url = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};


return ( <Image source = {image_url} style = {{height: 200, resizeMode : 'stretch', margin: 5 }}

/>

  //return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
);
}
}

AppRegistry.registerComponent('Myproject', () => Myproject);

/* to show image from url */





