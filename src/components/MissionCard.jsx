import { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <article className="card-misson" data-testid="mission-card">
        <h4 className="mission-name" data-testid="mission-name">{name}</h4>
        <hr />
        <div>
          <div>
            <p data-testid="mission-year">
              <ion-icon name="calendar-outline" />
              {year}
            </p>
            <p data-testid="mission-country">
              <ion-icon name="location-outline" />
              {country}
            </p>
          </div>
          <p data-testid="mission-destination">
            <ion-icon name="flag-outline" />
            {destination}
          </p>
        </div>

      </article>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
