import React, {Component} from 'react';

export default class Searchbar extends Component{
    render(){
        return(
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-5 mr-3">
            <div className="input-group">
              <input type="search" placeholder="Search" aria-describedby="button-addon1" className="form-control border-0 bg-light"></input>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        );
    }
}





