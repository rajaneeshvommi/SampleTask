/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text, Keyboard , TouchableOpacity, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { Container,Content } from 'native-base';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {deleteUserData, updateUserData} from '../generatePage/generateAction';



  // This Method is used for Creating Card
  // const  Item = (userDetails )=> {
  //   console.log("Saved Details", userDetails)
  //   return (
      
  //   );
  // }

  // State Interface
  export interface StateFromProps  {
    list:{};
    deleteUserData: Function;
    updateUserData: Function;
  }

  // Props Interface
  export interface DispatchFromProps  { 
    // updateUserDetails: Function 
  }

class SavedPage extends Component <StateFromProps, DispatchFromProps>{

  constructor(props: StateFromProps){
    super(props);
    this.state ={
      textInputs: []
    }
  }

  deleteItemById = (id) => {
    debugger;
    console.log(id)
    let userList = this.props.list.usersList;
    this.props.deleteUserData(userList,id);
    this.setState({
      textInputs: []
    })
  }
  
  onSubmit = (text,id) =>{
    this.props.updateUserData(text,id)
  }



  

  render(){
    let { textInputs } = this.state;
    return(
      <Container style={styles.containerStyle}>
        <Content>
        <View >
          {
             this.props.list.usersList.length > 0 ? 
            <FlatList
            data={  this.props.list.usersList }
            renderItem={({ item ,index }) => 
           <View style={styles.item}>
             <View style={{flex:0.4}}>
                 <TextInput style={styles.inputStyle} placeholder={"Name"} 
                  value={this.state.textInputs[index] }
                  defaultValue ={item.userName}
                  onChangeText={text => {
                  textInputs[index] = text;
                  this.setState({
                    textInputs,
                  });
                  console.log(this.state.textInputs);
                }}
                onSubmitEditing={(event) => {
                  let editedText= event.nativeEvent.text;
                  console.log("editedText", editedText)
                  let id = item.id;
                  this.onSubmit(editedText,id)
                }
                }
                />
             </View>
             <View style={{flex:0.1}}>
             </View>
             <View style={{flex:0.6}}>
                 <View style={styles.inputStyle}>
                   <Text>{item.key}</Text>
                 </View>
             </View>
             <View style={{flex:0.2, justifyContent:'center',alignItems:'center'}}>
                 <AntDesign name="delete" size={25} color="red" onPress={ ()=> this.deleteItemById(item.id)}/>
             </View>
           </View>
           }
          />
          : <View style={styles.recordsText}>
                <Text>{"No Records"}</Text>
            </View>
          }
        </View>
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'#DCDCDC',
        flex:1
    },
    inputStyle:{
        height:40,
        width:"100%",
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        flex:1,
       alignItems:'center'
      },
    recordsText :{
      justifyContent:'center',
        alignItems:'center',
    
    }
     
});

function mapStateToProps(state) {
  return {
      list: state.user,
  }
}

export default connect (mapStateToProps,{deleteUserData , updateUserData })(SavedPage)
