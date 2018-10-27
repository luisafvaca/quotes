import React, {Component} from 'react';

import {map} from 'ramda';

import './Quotes.css';
class saveCuotes extends Component{

    createQuotes(allQuotes){
        return map(function(item, i){
            return(
                <div className="card" key={i}>
                    <div className="bookmark"></div>
                    <p>"{item.quote}"</p>
                    <h3>{item.author}</h3>
                </div>
            )
        }, allQuotes)
    }
    render(){
        const quotes = this.createQuotes(this.props.allQuotes);
        return(
            <div className="cards-wrapper">
                 {quotes}
            </div>
           
        )
    }
}

export default saveCuotes;