var event = {
  'summary': 'INPUT: Квиток в IT',
  'location': 'TBA',
  'description': 'Конференція для людей, які хочуть спробувати себе в IT',
  'start': {
    'dateTime': '2019-05-28T09:00:00-07:00',
    'timeZone': 'Ukraine/Kyiv'
  },
  'end': {
    'dateTime': '2019-05-28T17:00:00-07:00',
    'timeZone': 'Ukraine/Kyiv'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=3'
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': event
});

request.execute(function(event) {
  appendPre('Event created: ' + event.htmlLink);
});

var clk = document.querySelector('#calendar');
clk.addEventListener('click', request, false);
