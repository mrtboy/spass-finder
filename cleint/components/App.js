import React from 'react';
import DataApi from '../state-api/lib/index';
import EventList from './EventList';
import axios from 'axios';

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
      <div>
        <EventList 
          events={this.state.events}
          eventActions={this.eventActions}
        />
      </div>
    );
  }
}

export default App;
