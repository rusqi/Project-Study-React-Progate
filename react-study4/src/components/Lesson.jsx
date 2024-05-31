import React from 'react';
import PropTypes from 'prop-types';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              Tutup
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => this.handleClickLesson()}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} alt={this.props.name} />
        </div>
        {modal}
      </div>
    );
  }
}

Lesson.propTypes = {
  name: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Lesson;
