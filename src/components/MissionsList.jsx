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
      <div
        className="conteiner-missions mb-2 flex
      flex-col justify-center items-center gap-6"
        data-testid="missions"
      >
        <Title headline="Missões" />
        <div className="grid grid-cols-2 gap-[2rem]">{missionsRender}</div>
      </div>
    );
  }
}

export default Missions;
