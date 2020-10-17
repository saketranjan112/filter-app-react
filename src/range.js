import React, {Component} from 'react';

export default class Rangebar extends Component{
    render(){
        return(
            <div  className='mt-5 mb-5'>
                <h6>Select Price Range</h6>
                <input className='col-10' type='range'></input>
            </div>
        );
    }
}





