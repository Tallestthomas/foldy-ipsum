import React from 'react';
import TerryIpsum from '../index';
import '../styles/style.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: [],
      numberOfSentences: 5,
      numberOfParagraphs: 2
    }
  }

  sentenceClick = event => {
    event.preventDefault();
    const text = [TerryIpsum.getNewSentence()]
    this.setState({
      text
    });
  }

  paragraphClick = event => {
    event.preventDefault();
    const text = [TerryIpsum.getParagraph(this.state.numberOfSentences)];
    this.setState({
      text
    })
  }

  multiParagraphClick = event => {
    event.preventDefault();
    const text = TerryIpsum.getAllParagraphs(this.state.numberOfParagraphs);
    this.setState({text});
  }

  handleInputChange = event => {
    const numberOfSentences = event.target.validity.valid ? event.target.value : this.state.numberOfSentences; 
    this.setState({numberOfSentences})
  }

  handleParagraphChange = event => {
    const numberOfParagraphs = event.target.validity.valid ? event.target.value : this.state.numberOfParagraphs; 
    this.setState({numberOfParagraphs})
  }

  render(){
    return(
      <div>
        <img src="/static/terryfolds.png" alt="Grab my terry fold" />
        <h1 className="header">Foldy Ipsum</h1>
        <p>A random text generator based off of that one song that Morty put on the radio randomly for like 20 seconds. You son of a bitch.</p>
        <section>
          <button onClick={this.sentenceClick}>Generate New Sentence</button>
          <div>
            <input name="numberOfSentences" type="text" pattern="[0-9]*" onChange={this.handleInputChange} placeholder="Number of Sentences "/>
            <button onClick={this.paragraphClick}>Get paragraphs</button>
          </div>
          <div>
            <input name="numberOfParagraphs" type="text" pattern="[0-9]*" onChange={this.handleParagraphChange} placeholder="Number of Sentences "/>
          <button onClick={this.multiParagraphClick}>Get Multiple Paragraphs</button>
        </div>
        </section>
        <div>
          { this.state.text.map( (text, index) => <p key={index}>{text}</p> ) }
        </div>
      </div>
    )
  }
}

export default App;
