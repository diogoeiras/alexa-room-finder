/**
 * @file Contains all strings used by index.js
 */

const languageStrings = {
  'en-GB': {
    translation: {
      SKILL_NAME: "Room Finder",
      BUSINESS_NAME: "the Turing",
      WELCOME_MESSAGE: "Would you like to book a meeting room at %s?",
      WELCOME_REPROMPT: "I'm %s. My job is to book meeting rooms! If you need further instructions, just ask me for help.",
      HELP_MESSAGE: "I hunt through all the meeting rooms here, see if one is available for a specified length of time, then I book it for you! Would you like me to book you a meeting?",
      HELP_REPROMPT: "Would you like me to book a meeting for you?",
      UNHANDLED_MESSAGE: "Sorry, I didn't get that. Would you like me to book a meeting room?",
      UNHANDLED_REPROMPT: "Say something like 'book me a meeting' or 'yes' if you'd like to book a meeting.",
      ROOM_AVAILABLE_MESSAGE: "%s is available. Would you like me to book it for you?",
      ROOM_AVAILABLE_REPROMPT: "Would you like me to book %s for you?",
      ROOM_BOOKED: "Great. I've booked %s for %s minutes.",
      CARD_ROOM_BOOKED_TITLE: "%s booked.",
      CARD_ROOM_BOOKED_CONTENT: "I've booked %s for %s minutes.",
      BOOKING_HELP_MESSAGE: "I checked all the meeting rooms for you, and %s is available. Do you want me to book it for you?",
      BOOKING_HELP_REPROMPT: "Say 'yes', or something like 'book it' if you want to book %s, or say 'no' or 'cancel' if you don't.",
      BOOKING_UNHANDLED_MESSAGE: "Sorry, I didn't get that. Do you want to book that meeting?",
      BOOKING_UNHANDLED_REPROMPT: "Please confirm whether you want to book the meeting room I found.",
      TIME_UNHANDLED_MESSAGE: "Sorry, I didn't get that. How long do you want the meeting to be?",
      TIME_UNHANDLED_REPROMPT: "How long do you want the meeting room for?",
      TIME_HELP_MESSAGE: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours, but you can say any duration under that.",
      TIME_HELP_REPROMPT: "Please tell me how long you'd like the meeting to be, or just say 'cancel' or 'stop' to quit.",
      TIME_DURATION_MESSAGE: "How long would you like the meeting to be?",
      TIME_DURATION_REPROMPT: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours.",
      TIME_UNAVAILABLE_MESSAGE: "Sorry, no rooms were available for a %s minute meeting. Maybe give a shorter time, or say 'cancel' if you're done.",
      TIME_UNAVAILABLE_REPROMPT: "No rooms were available for a %s minute meeting. You can give a shorter time, or say 'cancel' if you're done.",
      TIME_TOO_LONG_MESSAGE: "Sorry, I can only book meetings for up to 2 hours. Please give a shorter time.",
      TIME_TOO_LONG_REPROMPT: "Please give me a time shorter than 2 hours, and I'll try to book you a meeting.",
      ERROR: "There was an error. Tom - the intern who made this - has been notified.",
      ERROR_CARD_TITLE: "Error occurred",
      STOP_MESSAGE: "Alright. Goodbye!"
    },
  },
  'en-US': {
    translation: {
      SKILL_NAME: "Room Finder",
      BUSINESS_NAME: "the Turing",
      WELCOME_MESSAGE: "Would you like to book a meeting room at %s?",
      WELCOME_REPROMPT: "I'm %s. My job is to book meeting rooms! If you need further instructions, just ask me for help.",
      HELP_MESSAGE: "I hunt through all the meeting rooms here, see if one is available for a specified length of time, then I book it for you! Would you like me to book you a meeting?",
      HELP_REPROMPT: "Would you like me to book a meeting for you?",
      UNHANDLED_MESSAGE: "Sorry, I didn't get that. Would you like me to book a meeting room?",
      UNHANDLED_REPROMPT: "Say something like 'book me a meeting' or 'yes' if you'd like to book a meeting.",
      ROOM_AVAILABLE_MESSAGE: "%s is available. Would you like me to book it for you?",
      ROOM_AVAILABLE_REPROMPT: "Would you like me to book %s for you?",
      ROOM_BOOKED: "Great. I've booked %s for %s minutes.",
      CARD_ROOM_BOOKED_TITLE: "%s booked.",
      CARD_ROOM_BOOKED_CONTENT: "I've booked %s for %s minutes.",
      BOOKING_HELP_MESSAGE: "I checked all the meeting rooms for you, and %s is available. Do you want me to book it for you?",
      BOOKING_HELP_REPROMPT: "Say 'yes', or something like 'book it' if you want to book %s, or say 'no' or 'cancel' if you don't.",
      BOOKING_UNHANDLED_MESSAGE: "Sorry, I didn't get that. Do you want to book that meeting?",
      BOOKING_UNHANDLED_REPROMPT: "Please confirm whether you want to book the meeting room I found.",
      TIME_UNHANDLED_MESSAGE: "Sorry, I didn't get that. How long do you want the meeting to be?",
      TIME_UNHANDLED_REPROMPT: "How long do you want the meeting room for?",
      TIME_HELP_MESSAGE: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours, but you can say any duration under that.",
      TIME_HELP_REPROMPT: "Please tell me how long you'd like the meeting to be, or just say 'cancel' or 'stop' to quit.",
      TIME_DURATION_MESSAGE: "How long would you like the meeting to be?",
      TIME_DURATION_REPROMPT: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours.",
      TIME_UNAVAILABLE_MESSAGE: "Sorry, no rooms were available for a %s minute meeting. Maybe give a shorter time, or say 'cancel' if you're done.",
      TIME_UNAVAILABLE_REPROMPT: "No rooms were available for a %s minute meeting. You can give a shorter time, or say 'cancel' if you're done.",
      TIME_TOO_LONG_MESSAGE: "Sorry, I can only book meetings for up to 2 hours. Please give a shorter time.",
      TIME_TOO_LONG_REPROMPT: "Please give me a time shorter than 2 hours, and I'll try to book you a meeting.",
      ERROR: "There was an error. Tom - the intern who made this - has been notified.",
      ERROR_CARD_TITLE: "Error occurred",
      STOP_MESSAGE: "Alright. Goodbye!"
    },
  }
};

module.exports.languageStrings = languageStrings;
