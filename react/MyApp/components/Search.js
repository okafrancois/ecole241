import React from 'react'
import {View, Button, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import FilmItem from './FilmItem'
import {getFilms} from '../API/TMDB'
import films from '../Helpers/filmsData'
class Search extends React.Component {

  constructor(props){
    super(props)
    this.textToSearch = ""
    this.state = { films : [] }
  }
  _searchFilm(){
    if(this.textToSearch.length > 0){
      getFilms(this.textToSearch).then(data => {
        this.setState({films: data.results})
      })
    }

  }
  _changeSearch(text){
    this.textToSearch = text
  }

  render(){
    console.log('render')
    return(
      <View style={style.container}>
        <TextInput
          style = {style.input}
          placeholder = "Nom du film"
          onChangeText = {(text) => this._changeSearch(text)}
          />
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
