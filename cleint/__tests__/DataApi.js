import DataApi from '../state-api/lib/index';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  
  it('exposes Events as an object', () => {
    const events = api.getEvents();
    const eventId = data.events[0].id;
    const eventTitle = data.events[0].title;
  
    expect(events).toHaveProperty(eventId);
    expect(events[eventId].title).toBe(eventTitle);
  });
  
  it('exposes organizers as an object', () => {
    const organizers = api.getOrganizers();
    const organizerId = data.organizers[0].id;
    const organizerFirstName = data.organizers[0].firstName;

    expect(organizers).toHaveProperty(organizerId);
    expect(organizers[organizerId].firstName).toBe(organizerFirstName);
  });
  
});