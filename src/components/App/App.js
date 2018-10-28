import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuotesRequest } from '../../actions/Quotes';
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
      this.state = {}
      this.onGetQuote = this.onGetQuote.bind(this)
  }

  onGetQuote(){
    this.props.getQuote()
  }
  componentWillMount(){
    this.setState({
      "quote": "\"At moment not quote avalible click to get one!\""
    })
  }
  render() {
    return (
      <section className="app-wrapper">
        <header className="app-header">
          <label>Get Quote</label>
          <div className="quote-zone">{this.state.quote}</div>
          <div>
            <button onClick={this.onGetQuote}>Get</button>
            <button>Save Quotes</button>
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
    quotes: state.Quotes
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    dispatch,
    getQuote: () => dispatch(getQuotesRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

