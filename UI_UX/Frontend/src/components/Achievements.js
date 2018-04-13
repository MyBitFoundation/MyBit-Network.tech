import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Achievements.css';

export class Achievements extends Component {
  render() {
    return (
      <ol className="Achievements">
        {this.props.achievements.map(milestone => (
          <li key={milestone.endpoint}>
            <div>
              <b>{milestone.title}</b>
              <span>{milestone.description}</span>
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
