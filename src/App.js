import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from './actions'

let idleTimeout = null;
class App extends Component {
      constructor(props){
            super(props);
            this.state = {
                isInitial: true
            }
      }

      /** On Input Key Up **/
      _onSearchMovie = (e) => {
          let value = e.target.value;
          let self = this;
          if (!!value && value.length >= 3){
              !!idleTimeout && clearTimeout(idleTimeout);
              idleTimeout = setTimeout(() => self.getMovieDataOnSearch(value), 300);
          }
      };

      /** Call api **/
      getMovieDataOnSearch = (val) => {
          const { isInitial } = this.state;
          !!isInitial && this.setState({isInitial:false});
          this.props.dispatch(actions.getMoviesDataList(val));
      };

      /** App render html **/
      render() {
          const { movieData, isLoading, error } = this.props;
          return (
              <div>
                  <div className="container">
                      <div className="row">
                          <input className={'search'} onKeyUp={this._onSearchMovie.bind(this) } placeholder={'Search...'}  />
                      </div>
                      <div className="row">
                          {
                              isLoading ?
                                  <div className={'loading'}> <label>Loading...</label> </div>
                                  :
                                  !!error ? <div className={'loading'}> <label>{ error.message }</label> </div>
                                      :
                                      movieData.length > 0 ?
                                          movieData.map((movie, index)=>{
                                              return (
                                                  <div className="col col--lg--4 col--sm--6" key={index}>
                                                      <div className="card">
                                                          <div className="card-image">
                                                              <img
                                                                  src={movie.Poster}
                                                                  alt="Poster"
                                                                  width="100%" height="290px" className="img-responsive" />
                                                          </div>
                                                          <div className="card-description">
                                                              <h4>{movie.Title}</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                              );
                                          })
                                          :
                                          !this.state.isInitial && <div className={'loading'}> <label>Results not found.</label> </div>


                          }
                      </div>
                  </div>
              </div>
          );
      }
}
export default connect(store=>store)(App);
