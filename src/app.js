import React, { Component } from 'react';
import Card from './card';
import Navbar from './navbar';
import Searchbar from './searchbar';
import Optionbar from './select';
import Sortbar from './sortbar';
import Rangebar from './range';

export default class App extends Component {

    render() {
        return (
        <div> 
            <Navbar/>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-2 border-right ml-5 mr-5'>
                        <Searchbar/>
                        <Optionbar/>
                        <Rangebar/>
                    </div>
                    <div className='col-8'>
                        <Sortbar/>
                        <div className='row mt-5'>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Redmi Note 9 Pro' price='&#x20B9; 16,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Redmi Note 8 Pro' price='&#x20B9; 14,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Realme 7 Pro' price='&#x20B9; 17,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Realme X' price='&#x20B9; 14,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Nokia 9 PureView' price='&#x20B9; 49,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Nokia 8.3 5G' price='&#x20B9; 34,999'/></div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Moto Razr' price='&#x20B9; 55,999' /></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Motorola Edge Plus' price='&#x20B9; 70,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Samsung Galaxy Z Fold' price='&#x20B9; 89,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='Samsung Galaxy Note 20 Ultra' price='&#x20B9; 1,10,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='OnePlus 8T' price='&#x20B9; 55,999'/></div>
                            <div className='col'><Card pic='https://assets.hongkiat.com/uploads/minimalist-mobile-wallpapers/05.jpg' title='OnePlus Nord' price='&#x20B9; 25,999'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
        };
}