import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuotesRequest, quoteSaving, isCounter } from '../../actions/Quotes';
import Quotes from '../Quotes/Quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faSave} from '@fortawesome/free-solid-svg-icons'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        saved: []
      }
      this.onGetQuote = this.onGetQuote.bind(this);
      this.avalibleQuote = this.avalibleQuote.bind(this);
      this.onSaveQuote = this.onSaveQuote.bind(this);
      this.counter = this.counter.bind(this);
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
    this.props.quoteSaving(param);
  }

  avalibleQuote(quoteParam, onRequest){
    console.log(onRequest, 'onRequest', quoteParam)
    if(onRequest){
      return(<div className="quote-zone">
        <p>Pending...</p>
      </div>
    )
    }else if(onRequest === false && quoteParam ){
      return (
        <div className="quote-zone">
        <p>{quoteParam.quote}</p>
        <h3>{quoteParam.author}</h3>
      </div> 
      )
    }
  }

  counter(){
    console.log(this.props);
    this.props.counterFromMap()
  }

  render() { 
    const currenQuote = this.props.quotes;
    const onRequest = this.props.onRequest;
    const savedQuotes = this.props.savedQuotes;
    const currenQuoteFormat = this.avalibleQuote(currenQuote, onRequest);

    return (
      <section className="app-wrapper">
        <header className="app-header">
          <label>Get Quote</label>
          {currenQuoteFormat}
          <div>
            <div>
              <button onClick={this.onGetQuote}>
                <FontAwesomeIcon icon={faRedoAlt}></FontAwesomeIcon>
              </button>
              <button onClick={(e) => this.onSaveQuote(e,currenQuote)}>
                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </header>
        <main>
          <button onClick={this.counter}>Counter</button>
          <Quotes allQuotes={savedQuotes}></Quotes>
        </main>
      </section>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    quotes: state.quotes.quote, 
    savedQuotes: state.quotes.savedQuotes,
    onRequest: state.quotes.onRequest
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    dispatch,
    getQuote: () => dispatch(getQuotesRequest()),
    quoteSaving: (param) => dispatch(quoteSaving(param)),
    counterFromMap: () => dispatch(isCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

