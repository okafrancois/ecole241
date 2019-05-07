import React from 'react'
import {View, Button, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import FilmItem from './FilmItem'
import {getFilms} from '../API/TMDB'
import films from '../Helpers/filmsData'
class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = { films : [] }
  }
  _searchFilm(){
    getFilms('dance').then(data => console.log(data));

  }
  render(){
    return(
      <View style={style.container}>
        <TextInput style={style.input} placeholder="Nom du film" />
        <Button style={style.button} title="Rechercher un film" onPress={() => this._searchFilm()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>   <FilmItem film={item}/>}
        />
      </View>
    )
  }
}
const style = StyleSheet.create({
    container: {
      paddingTop: 30,
      padding: 5,
      flex: 1,
      flexDirection: 'column',
    },
    input: {
      borderWidth: 1,
      backgroundColor: '#fff',
    },
    button: {

    }
  })

export default Search
