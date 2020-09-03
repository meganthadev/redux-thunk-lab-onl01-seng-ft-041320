import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }
  
  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

