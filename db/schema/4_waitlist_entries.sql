DROP TABLE IF EXISTS waitlist_entries CASCADE;

CREATE TABLE waitlist_entries (
  id SERIAL PRIMARY KEY,
  waitlist_id INTEGER NOT NULL REFERENCES waitlists(id),
  user_id INTEGER REFERENCES users(id),
  booked_at BIGINT NOT NULL,
  -- limited to 1-6 since they will be directed to call the restaurant otherwise
  party_size INTEGER NOT NULL
);
