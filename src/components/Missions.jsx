import { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const missionsRender = missions.map(({ name, year, country, destination }) => (
      <Missions
        key={ year }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsRender}
      </div>
    );
  }
}

export default Missions;
