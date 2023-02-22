import React, {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow'
//import $ from 'jquery'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {}
    // console.log("This is my initializer")


    // const movies = [
    //   {id: 0,poster_src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9j4SOVkEBri66nXPBre4n3n0tJ8Pun1mo8yEtIN_&s", title:"Wonder Woman", overview: " The film received positive reviews, with praise for its direction, acting, visuals, action sequences and musical score"},
    //   {id: 1,poster_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezupKdtrv2AP_wa8qJuUXVgwzvvK4lTaDb1dv3eY&s", title:"Black Panther:Wakanda forever", overview: "Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger (Jordan), who plans to abandon the country's isolationist policies and begin a global revolution.This is my second overview"},
    // ]

    // this.state ={rows: [
    //   <p key="1">This is my row</p>,
    //   <p key="1">This is my row</p>,
    //   <p key="1">This is my row</p>
    // ]}

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow  movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows : movieRows}
    this.performSearch("avengers")
  }
  performSearch(searchTerm){
    console.log("perform search using moviedb")
    const apiUrl ="https://api.themoviedb.org/3/search/movie?&api_key=b47656eb5312780ee7fdd1d7342a58f1&query=" + searchTerm
  //   $.ajax({
  //     url:urlString,
  //     success:(searchResults) => {
  //       console.log("fetched data successfully")
  //       //console.log(searchResults)

  //       const results = searchResults.results
  //       //console.log(results[0])

  //       var movieRows =[]

  //       results.forEach((movie) => {
  //         movie.poster_src = "https://image.tmd.org/t/p/w185" + movie.poster_path
  //         console.log(movie.poster_path)
  //         const movieRow = <MovieRow key ={movie.id} movie ={movie}/>
  //         movieRows.push(movieRow)
  //       })

  //       this.setState({rows: movieRows})
  //     },
  //     error: ( xhr, status, err) => {
  //       console.error("failed to fetch data")
  //     }
  //   })
  // }
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log("fetched data successfully");
    const results = data.results;
    console.log(results[0]);
    const movieRows = results.map(movie => (
      <MovieRow key={movie.id} movie={movie} />
    ));
    this.setState({ rows: movieRows });
  })
  .catch(error => {
    console.error("failed to fetch data", error);
  });
}

searchChangeHandler(event){
  console.log(event.target.value)
  const boundObject =this
  const searchTerm =event.target.value
  boundObject.performSearch(searchTerm)
}

  
  render(){
    return(
      <div>
      
      <table  className='titleBar'>
        <tbody>
          <tr>
            <td>
              <h1>MoviesDb Search </h1></td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 24,
        display:  "block",
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder='Enter search term'/>


       {this.state.rows}
    </div>
    )
  }
}
export default App;
