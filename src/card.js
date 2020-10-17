import React, {Component} from 'react';

export default class Card extends Component{
    render(){
        return(
        <div className="card pb-2" style={{height: '100%'}}>
            <div className='border-bottom' style={{height: '60%'}}>
                <img className="card-img-top" src={this.props.pic} alt='' style={{height: '100%'},{width: '100%'}}></img>
            </div>
            <div className="card-body" style={{height: '20%'}}>
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.price}</p>
            </div>
        </div>);
    }
}