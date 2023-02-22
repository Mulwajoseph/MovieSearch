import React from "react";

class MovieRow extends React.Component {

    viewMovie(){
        // console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        const url ="https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href= url
    }
  render() {
    const posterPath = this.props.movie.poster_path;
    const posterSrc = posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : '';
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="100" src={posterSrc} />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovie.bind(this)} value="view" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
