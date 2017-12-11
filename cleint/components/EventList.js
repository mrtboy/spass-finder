import React from 'react';
import Event from './Event';
import styleable from 'react-styleable';

import css from './EventList';

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

export default styleable(css)(EventList);