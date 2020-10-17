import React, {Component} from 'react';

export default class Sortbar extends Component{

    render(){
    return(
        <div className="row border-bottom">
            <div className='col-auto'><h6 className='mt-2'>Sort By:</h6></div>
            <div className='col-auto'><button className='btn btn-outline-light text-muted'><small>Price : Low to High</small></button></div>
            <div className='col-auto'><button className='btn btn-outline-light text-muted'><small>Price : High to Low</small></button></div>
            <div className='col-auto'><button className='btn btn-outline-light text-muted'><small>Name : A to Z</small></button></div>
            <div className='col-auto'><button className='btn btn-outline-light text-muted'><small>Name : Z to A</small></button></div>
        </div>
    );
    }

}