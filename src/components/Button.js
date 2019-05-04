import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.getLanguage(value)}
        </LanguageContext.Consumer> 
      </button> 
    )
  }

  getLanguage(language) {
     return language === 'english' ? 'Submit' : 'Wyslij';
  }

  render() {
    //const text = this.context === 'english' ? 'Submit' : 'Wyslij';
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;