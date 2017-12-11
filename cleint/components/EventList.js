import React from 'react';
import Event from './Event';

const EventList = (props) => {
  return (
    <div>
      {Object.values(props.events).map((event) => 
        <Event 
          key={event.id}
          event= {event}
          actions={props.eventActions}
        />
      )}
    </div>
  );
};

export default EventList;