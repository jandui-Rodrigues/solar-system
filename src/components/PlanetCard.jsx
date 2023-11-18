import { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetNotacent = planetName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return (
      <div className="card-planet" data-testid="planet-card">
        <div className="card-img-planet">
          <img
            className={ planetNotacent }
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </div>
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
