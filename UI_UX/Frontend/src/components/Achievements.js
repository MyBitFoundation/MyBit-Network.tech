import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Achievements.css';

export class Achievements extends Component {
  render() {
    return (
      <ol className="Achievements">
        {this.props.achievements.map(milestone => (
          <li key={milestone.endpoint} className="Achievements__list-item">
            <div className="Achievements__list-item__wrapper">
              <b className="Achievements__list-item__wrapper--title">
                {milestone.title}
              </b>
              <span className="Achievements__list-item__wrapper--description">
                {milestone.description}
              </span>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

Achievements.propTypes = {
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};
