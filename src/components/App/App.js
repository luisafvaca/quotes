import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuotesRequest, quoteSaving } from '../../actions/Quotes';
import Quotes from '../Quotes/Quotes';

import './App.css';

const testQuoteSaved = [
  {
    quote: "I don't have anything to say about other people's art and their work.",
    author: "Dolly Parton",
    cat: "art"
  },
  {
    "quote": "The world is really figuring BSE out, and that's positive.",
    "author": "Mike Johanns",
    "cat": "positive"
  },
  {
    quote: "Because of indifference, one dies before one actually dies.",
    author: "Elie Wiesel",
    cat: "death",
  },
  {
    quote: "My girlfriend bought me a down jacket, she said it fit my personality.",
    author: "Jay London",
    cat: "dating",
  },
  {
    quote: "For a while I was on the cover of every Sports Illustrated swimsuit issue, which was regarded as the pinnacle of success in America.",
    author: "Elle Macpherson",
    cat: "sports",
  },
  {
    quote: "I'm equally guilty of using technology - I Twitter, I text people, I chat. But I think there's something strangely insidious about it that it makes us think we're closer when in fact we're not seeing each other, we're not connecting.",
    author: "Jason Reitman",
    cat: "technology",
  }
]

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        saved: []
      }
      this.onGetQuote = this.onGetQuote.bind(this);
      this.avalibleQuote = this.avalibleQuote.bind(this);
      this.onSaveQuote = this.onSaveQuote.bind(this)
  }

  componentWillMount(){
    this.props.getQuote();
  }

  onGetQuote(e){
    e.preventDefault();
    e.isPropagationStopped();
    this.props.getQuote()
  }

  onSaveQuote(e,param){
    e.preventDefault();
    e.isPropagationStopped();
    this.setState({
      saved: this.state.saved.push(param)
    })
    this.props.quoteSaving(param);
  }

  avalibleQuote(quoteParam){   
    console.log(quoteParam, 'teste') 
    let content = <div>${"\"At moment not quote avalible click to get one!\""}</div>;
    if(quoteParam){
      content = (
        <div className="quote-zone">
          <p>{quoteParam.quote}</p>
          <h3>{quoteParam.author}</h3>
        </div> 
      )
    }
    
    return content
  }

  render() { 
    const currenQuote = this.props.quotes;
    const currenQuoteFormat = this.avalibleQuote(currenQuote);

    return (
      <section className="app-wrapper">
        <header className="app-header">
          <label>Get Quote</label>
          <div>
            <div>
              <button onClick={this.onGetQuote}>Get</button>
              <button onClick={(e) => this.onSaveQuote(e,currenQuote)}>Save Quotes</button>
            </div>
          </div>
        </header>
        <main>
          <Quotes allQuotes={testQuoteSaved}></Quotes>
        </main>
      </section>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    quotes: state.quotes
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    dispatch,
    getQuote: () => dispatch(getQuotesRequest()),
    quoteSaving: (param) => dispatch(quoteSaving(param))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

