import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

class FilmItem extends React.Component{
  render(){
    const film = this.props.film

    return(
      <View style={style.container}>
        <View style={style.img} >
          <Image
            style={{width: 130, height: 220}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
        <View style={style.details} >
          <View style={style.header}>
          <Text style={style.title}> {film.title} </Text>
            <Text style={style.vote}> {film.vote_average} </Text>
          </View>
          <View style={style.desc}>
            <Text style={style.desc_text}> {film.overview} </Text>
          </View>
          <View style={style.date}>
            <Text style={style.date_text}> Sorti le {film.release_date} </Text>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container : {
    // flex: 1,
    height: 250,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 5,
  },
  img: {
    backgroundColor: '#ccc',
       },
  details: {
    flex: 2,
    padding: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center'
  },
  title: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 15,
  },
  vote: {
    flex: 0.5,
    fontSize: 18,
    color: '#1a4b08'
  },
  desc: {
    flex: 4,
    paddingLeft: 3,
    paddingRight: 3,
  },
  date: {
    flex: 0.5,
    paddingLeft: 3,
    paddingRight: 3,
  },
  date_text: {
    textAlign: 'right',
  }
})

export default FilmItem
