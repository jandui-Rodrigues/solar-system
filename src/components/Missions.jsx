import { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionsRender = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ year }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div className="conteiner-missions" data-testid="missions">
        <Title headline="Missões" />
        <div>{missionsRender}</div>
      </div>
    );
  }
}

export default Missions;
