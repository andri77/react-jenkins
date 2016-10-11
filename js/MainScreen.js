/* @flow */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import { fetch } from 'fetch';
import axios from 'axios';
import { AIRBNB_API } from './data';
import LikeButton from './LikeButton';

// import type { Listing } from './data';

// #1. Explore and have fun!
// #2. Change text color and make it bigger. Add some margin between text and image.
//     Make the content centered
// #3. Make image tappable (see TouchableOpacity or TouchableHighlight)
// #4. Uncomment the query in `componentDidMount`
// #5. Show number of listings instead of "Hello, fox!"
// #6. Render listing titles. For every record you want to render its own <Text />
// #7. Extract secret view into its own component. Add more info. Make the list scrollable
// #8. Add ability to like listings

class ReactJenkins extends Component {
  state = {fontWeight: 'bold', fontSize: 15, textShadowColor: 'blue', jobs: []};
  componentWillMount() {
    axios.get('http://192.168.57.1:8080/api/json?pretty=true')
        .then(response => this.setState( { jobs: response.data }))
  }
  renderJobs() {
    return this.state.jobs.jobs.map(job => <Text key={job.name}>{job.url}</Text>
    );
  }
  renderJobsColor() {
    return this.state.jobs.jobs.map(job => <Text key={job.name}>{job.color}</Text>
    );
  }
  renderJobsName() {
    return this.state.jobs.jobs.map(job => <Text key={job.name}>{job.name}</Text>
    );
  }
  constructor(props) {
    super(props);
    this.state = {text: 'Jaden'};
  }
  props: {
    isLiked: boolean;
    onLike: Function;
  };

  toggleWeight = () => {
    this.setState({
      fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
    });
  };

  decreaseSize = () => {
    this.setState({
      fontSize: this.state.fontSize - 1
    });
  };

  increaseSize = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    });
  };

  resetSize = () => {
    this.setState({
      fontSize: this.state.fontSize = 15
    });
  };

  render() {
    console.log(this.state);
    const {isLiked, onLike} = this.props;
    var curStyle = {fontWeight: this.state.fontWeight, fontSize: this.state.fontSize};
    return (
        <View style={styles.container}>

          <View>
            <Image style={styles.foxImage} source={require('./img/jenkins.jpeg')}/>
            <View>{this.renderJobsName()}</View>
            <View>{this.renderJobs()}</View>
            <View>{this.renderJobsColor()}</View>
            <Text style={curStyle} >
              <Text> Hello {this.state.text}  </Text>
            </Text>
            <Text>
              <Text>Sister:<Text style={curStyle}>Mikayla cantik</Text></Text>
            </Text>
            <Text>
              <Text onPress={this.toggleWeight}>Toggle Weight</Text>
            </Text>
            <Text onPress={this.decreaseSize} suppressHighlighting={false}>
              Decrease Size
            </Text>
            <Text onPress={this.increaseSize} suppressHighlighting={false}>
              Increase Size
            </Text>
            <Text onPress={this.resetSize} suppressHighlighting={false}>
              Reset Size
            </Text>

          </View>
          <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type your name"
                onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
            <View><LikeButton isLiked={true} onPress={onLike} /></View>
          </View>
        </View>
    );
  }

  // render() {
  //
  //   return (
  //     <View style={styles.container}>
  //       <Image
  //         style={styles.foxImage}
  //         source={require('./img/fox.png')}
  //       />
  //       <View style={{marginTop: 20}}>
  //         <Text style={styles.helloText}>Hello, Jaden!</Text>
  //         <Text style={{marginTop: 5}}
  //               onPress={this.increaseSize}>
  //           This is Mikayla
  //         </Text>
  //         <Text>
  //           <Text onPress={this.toggleWeight}>Toggle Weight</Text>
  //           {' (with highlight onPress)'}
  //         </Text>
  //         <Text onPress={this.increaseSize} suppressHighlighting={true}>
  //           Increase Size (suppressHighlighting true)
  //         </Text>
  //       </View>
  //     </View>
  //   );
  // }

  // componentDidMount() {
  // fetch(AIRBNB_API)
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log('Response from API:', data);
  //   });
  // }
}

var IMAGE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foxImage: {
    borderRadius: IMAGE_SIZE / 2,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  helloText: {
    fontSize: 18,
    backgroundColor: '#F5FCFF',
  },
});



export default ReactJenkins;
