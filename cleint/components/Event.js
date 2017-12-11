import React from 'react';
import './style.css';
// import 'bootstrap';  

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Event = (props) => {
  const { event, actions } = props;
  const organizer = actions.lookupOrganizer(event.organizerId);
  return (
    <div>
      <div className="title">{event.title}</div>
      <div>
        {dateDisplay(event.date)}
      </div>
      <div>
        <a href={organizer.website}>
          {organizer.firstName} {organizer.lastName}
        </a>
      </div>
      <div>{event.body}</div>
    </div>
  );
};

export default Event;