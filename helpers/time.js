// Returns the time differential between the current time and
// the timestamp provided, which will usually be a booked_at value
// from a waitlist entry.
const calculateTimeDifference = timestamp => {
  return Date.now() - timestamp;
}

// Calculates the initial wait time which will be set as the
// maxAge for the cookie. This will give the user their initial time.
// We have to get the previous entry from the
const calculateInitialWaitTime = timestamp => {
  // 5 minutes or 300000 ms is currently the default.
  return timestamp + 300000;
}
