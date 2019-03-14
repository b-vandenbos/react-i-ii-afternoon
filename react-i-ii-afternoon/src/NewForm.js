
import React, {Component} from 'react';
import data from './data.js';
import Deleted from "./Deleted.js"


export default class NewForm extends Component {
    constructor() {
        super();

        this.state = {
            list: data,
            name: '',
            city: '',
            country: '',
            employer: '',
            movie1: '',
            movie2: '',
            movie3: ''
        };

        this.newObj = this.newObj.bind(this);
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
        
        return (
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
            <button onClick={this.newObj}>Add</button>
          </form>
        </div>
        )
    }



}


