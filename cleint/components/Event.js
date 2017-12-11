import React from 'react';
import styleable from 'react-styleable';
import css from './Event.css';
 

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Event = (props) => {
  const { event, actions } = props;
  const organizer = actions.lookupOrganizer(event.organizerId);
  return (
    <div className={props.css.event}>
      <div className={props.css.title}>{event.title}</div>
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

export default styleable(css)(Event);