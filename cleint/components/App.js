import React from 'react';
import DataApi from '../state-api/lib/index';
import EventList from './EventList';
import axios from 'axios';
import Frame from './Frame';

class App extends React.Component {

  state = {
    events: {},
    organizer: {}
  }

  async componentDidMount() {
    const resp = await axios.get('./data');
    const api = new DataApi(resp.data);

    this.setState(() => {
      return {
        organizer: api.getOrganizers(),
        events: api.getEvents()
      };
    });
  }

  eventActions = {
    lookupOrganizer: (organizerId) => this.state.organizer[organizerId],
  };
  
  render() {
    return (
      <Frame>
        <EventList 
          events={this.state.events}
          eventActions={this.eventActions}
        />
      </Frame>
    );
  }
}

export default App;
