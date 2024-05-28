import React from 'react';
import PropTypes from 'prop-types';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        <div className='language-name'>{this.props.name}</div>
        <img 
          className='language-image' 
          src={this.props.image} 
        />
      </div>
    );
  }
}

Language.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Language;
