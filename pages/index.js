import React from 'react';
import TerryIpsum from '../index'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      numberOfSentences: 5,
      numberOfParagraphs: 2
    }
  }

  sentenceClick = event => {
    event.preventDefault();
    this.setState({
      text: TerryIpsum.getNewSentence()
    });
  }

  paragraphClick = event => {
    event.preventDefault();
    this.setState({
      text: TerryIpsum.getParagraph(this.state.numberOfSentences)
    })
  }

  handleInputChange = event => {
    const numberOfSentences = event.target.validity.valid ? event.target.value : this.state.numberOfSentences; 
    this.setState({numberOfSentences})
  }

  render(){
    return(
      <div>
        <button onClick={this.sentenceClick}>Generate New Sentence</button>
        <button onClick={this.paragraphClick}>Get paragraphs</button>
        <input name="numberOfSentences" type="text" pattern="[0-9]*" onChange={this.handleInputChange} placeholder="Number of Sentences (default 5)"/>
        <div>
          { this.state.text }
        </div>
      </div>
    )
  }
}

export default App;
