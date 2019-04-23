import React from 'react'
import {View, Button, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import Films from 'Films'
class Search extends React.Component
{
  render(){
    return(
      <View style={style.container}>
        <TextInput style={style.input} placeholder="Nom du film" />
        <Button style={style.button} title="Rechercher" onPress={() => alert("Click sur le bouton")}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Films film={item} />}
          />
      </View>
    )
  }
}
const style = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: '#077e7b',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 5,
    },
    button: {

    }
  })

export default Search
