import { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <article
        className="card-misson bg-zinc-950/60
       border-zinc-50
       border-solid
       border rounded-xl min-h-[12rem] max-w-[31.25rem]"
      >
        <abbr className="no-underline" title={ name }>
          <h4 className="mission-name truncate">{name}</h4>
        </abbr>

        <hr />
        <div className="flex text-[1.2rem] justify-between p-2">
          <div>
            <p className="">
              <ion-icon name="calendar-outline" />
              {year}
            </p>
            <p>
              <ion-icon name="location-outline" />
              {country}
            </p>
          </div>
          <p>
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
