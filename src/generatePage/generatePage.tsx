/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet,View, Text, Alert, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button ,Toast} from 'native-base';
import {saveUserDetails, } from './generateAction';


// State Interface
export interface GeneratorState {
    keyGen :{
        blockOne: string,
        blockTwo: string,
        blockThree: string,
        blockFour: string,
        blockFive: string,
    }  
    isSaveButtonDisable: boolean;
    count : number
}

// Props Interface
export interface GeneratorProps {
    saveUserDetails: Function 
}


class KeyGeneratorPage extends Component<GeneratorProps,GeneratorState>{

    // Default state
    state={
        keyGen :{
            blockOne: "",
            blockTwo: "",
            blockThree: "",
            blockFour: "",
            blockFive: "",
        },
        isSaveButtonDisable : true,
        count:0
    }

    // This Methos is used for generate the random 4 digit 
    randomNumber = () =>{
        let numbers = [0,1,2,3,4,5,6,7,8,9];
        for (let i = numbers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
        let fourDigitNumber = numbers.splice(0,4).join("");
        return fourDigitNumber.toString();
    }

    // This Method is used for Generating the keys
    generate =()=>{
        let blockA =  this.randomNumber();
        let blockB = this.randomNumber();
        let blockC =  this.randomNumber();
        let blockD = this.randomNumber();
        let blockE =  this.randomNumber();
        console.log("a",blockA,"b" ,blockB,"c", blockC, "d", blockD, "e", blockE);
        this.setState({
            keyGen:{
                blockOne: blockA,
                blockTwo: blockB,
                blockThree: blockC,
                blockFour: blockD,
                blockFive: blockE,
            },
            isSaveButtonDisable: false
        })
         Toast.show({
             text: 'Key Generated!',
             buttonText: 'Okay',
           })
    }
 
    // This Methos isused for Saving the keys
    saveDetails = () =>{
        let joinPins = Object["values"](this.state.keyGen);
        let fullKey = joinPins.toString();
        this.state.count += 1;
        let userObject = {
            id: this.state.count,
            key: fullKey,
            userName: "infosys"
        }
        this.props.saveUserDetails(userObject);
       this.setState({
        keyGen :{
            blockOne: "",
            blockTwo: "",
            blockThree: "",
            blockFour: "",
            blockFive: "",
        },
        isSaveButtonDisable: true
    })

    }

    render(){
        return(
            <Container>
            <View style={styles.containerStyle}>
                <View style={styles.rowStyle}>
                    <View style={styles.inputStyle}><Text> {this.state.keyGen.blockOne}</Text></View>
                    <View style={styles.inputStyle}><Text> {this.state.keyGen.blockTwo}</Text></View>
                    <View style={styles.inputStyle}><Text> {this.state.keyGen.blockThree}</Text></View>
                    <View style={styles.inputStyle}><Text> {this.state.keyGen.blockFour}</Text></View>
                    <View style={styles.inputStyle}><Text> {this.state.keyGen.blockFive}</Text></View>
                </View>
    
                <View style={styles.rowStyle}>
                    <View style={{flex:0.5 ,padding:10}}>
                    <Button block  onPress={this.generate}>
                        <Text style={styles.textStyle}  >GENERATE</Text>
                    </Button>
    
                    </View>
                    <View style={{flex:0.5, padding:10}}>
                    <Button block onPress={this.saveDetails} disabled={this.state.isSaveButtonDisable} style={this.state.isSaveButtonDisable ? styles.disableButtonStyle : styles.activeButtonStyle}>
                        <Text  style={this.state.isSaveButtonDisable ? styles.disableTextStyle: styles.textStyle} >SAVE</Text>
                    </Button>
                    </View>   
                </View>
            </View>
           </Container>
        )

    }

}

const styles = StyleSheet.create({

    containerStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DCDCDC',
        flex:1
    },
    rowStyle:{
        flexDirection:'row',
        alignContent:'space-between'
    },
    inputStyle:{
        height:40,
        width:60,
        borderColor:'black',
        borderWidth:1,
        margin:5,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        color:'#ffffff'
    },
    disableButtonStyle:{
        backgroundColor:"#f2f2f2",
        color:'black'
    },
    activeButtonStyle:{
        backgroundColor:"#0033cc",
        color:'black'
    },
    disableTextStyle:{
        color:'#DCDCDC'
    }
});


export default connect(null, {saveUserDetails })(KeyGeneratorPage);

