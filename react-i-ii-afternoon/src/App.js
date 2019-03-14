import React, { Component } from 'react';
import './App.css';
import DataProcess from './DataProcess';
import Deleted from './Deleted';
import data from './data';
// import NewForm from './NewForm';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      index: 0,
      list: data,
      deleted: [],
      name: '',
      city: '',
      country: '',
      employer: '',
      movie1: '',
      movie2: '',
      movie3: ''
    }
    
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.delete = this.delete.bind(this);
    this.newObj = this.newObj.bind(this);
  }
  
  next() {
    if (this.state.index !== this.state.list.length - 1) {
      let index = this.state.index + 1;
      this.setState({index: index});
    }  
  }
  
  previous() {
    if (this.state.index !==0) {
      let index = this.state.index - 1;
      this.setState({index: index});
    }
  }
  
  delete() {
    let list = this.state.list;
    let index = this.state.index;
    let deleted = this.state.deleted;
    let newDeleted = list[index];
    deleted.push(newDeleted);
    this.setState({deleted: deleted});
    list.splice(index, 1);
    if (index !==0) {
      let newIndex = index - 1;
      this.setState({index: newIndex});
    }
    else if (index === 0) {
      let newIndex = index;
      this.setState({index: newIndex});
    }  
  }

  newObj() {
    let obj = { name: this.state.name,
                city: this.state.city,
                country: this.state.country,
                jobTitle: this.state.title,
                employer: this.state.employer,
                favoriteMovie: [this.state.movie1, this.state.movie2, this.state.movie3]            
    };
    let updatedList = [...this.state.list, obj];
    this.setState({list: updatedList});
}
 
  trackName(val) {
    this.setState({name: val});
  };   

  trackCity(val) {
    this.setState({city: val});
  };  

  trackCountry(val) {
    this.setState({country: val});
  }; 

  trackJobTitle(val) {
    this.setState({jobTitle: val});
  }

  trackEmployer(val) {
    this.setState({employer: val});
  }; 

  trackMovie1(val) {
    this.setState({movie1: val});
  };

  trackMovie2(val) {
    this.setState({movie2: val});
  };

  trackMovie3(val) {
    this.setState({movie3: val});
  };
  
  render() {    
    let person_info = this.state.list.map((person, index, arr) => {
      if (index === this.state.index) {
        return <DataProcess
                  key={index}
                  index={index}
                  name={person.name}
                  city={person.city}
                  country={person.country}
                  employer={person.employer}
                  title={person.title}
                  movies={person.favoriteMovies}
                  arr={arr}/>
      }
      });

      let deleted = this.state.deleted.map((person,index,arr) => {
        return <Deleted key={index}
                  index={index}
                  name={person.name}
                  city={person.city}
                  country={person.country}
                  employer={person.employer}
                  title={person.title}
                  movies={person.favoriteMovies}
                  arr={arr}/>
      });
    

    return (
      <div className="App">
        <div className='Nav'>
          <div className='title'>Home</div>
        </div>
        <div className="nav-button-bar">
            <button id="previous" className='nav-button left' onClick={this.previous}>Previous</button>
            <div className="edit-button-bar">
              <button className="edit-button">Edit</button>
              <button className="edit-button" onClick={this.delete}>Delete</button>
              <button className="edit-button">New</button>
            </div>
            <button className='nav-button right' onClick={this.next}>Next</button>
        </div>
        {person_info}
        <div className ="additional">
          <div className="deleted-section">
            <div className="deleted-title">Deleted</div>
            <div className='deleted-field'>
              {deleted}
            </div>
          </div>
          {/* <NewForm /> */}
          <div className="add new">
          <div className="deleted-title">Add a Person</div>
          <form className="new-form">
            <div className="form-field">
                <span>Name: </span>
                <input className="new-input" onChange={ e => this.trackName(e.target.value)}/>
            </div>
            <div className="form-field">
                <span>From: </span>
                <input className="new-input" onChange={ e => this.trackCity(e.target.value)} placeholder="City"/>
                <input className="new-input" onChange={ e => this.trackCountry(e.target.value)} placeholder="Country"/>
            </div>
            <div className="form-field">
                <span>Job Title: </span>
                <input className="new-input" onChange={ e => this.trackJobTitle(e.target.value)}/>
            </div>
            <div className="form-field">
                <span>Employer: </span>
                <input className="new-input" onChange={ e => this.trackEmployer(e.target.value)}/>
            </div>
            <div className="form-field movie">
                <span>Favorite Movies: </span>
                <input className="new-input" onChange={ e => this.trackMovie1(e.target.value)} placeholder="Movie 1"/>
                <input className="new-input" onChange={ e => this.trackMovie2(e.target.value)} placeholder="Movie 2"/>
                <input className="new-input" onChange={ e => this.trackMovie3(e.target.value)} placeholder="Movie 3"/>
            </div>
            <button className="edit-button" onClick={this.newObj}>Add</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
