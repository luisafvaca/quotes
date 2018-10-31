import React, {Component} from 'react';

import {map} from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

import './Quotes.css';
class saveCuotes extends Component{

    createQuotes(allQuotes){
        return map(function(item, i){
            return(
                <div className="card" key={i}>
                    <FontAwesomeIcon icon={faBookmark} className="bookmark"></FontAwesomeIcon>
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