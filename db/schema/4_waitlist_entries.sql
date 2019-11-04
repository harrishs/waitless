DROP TABLE IF EXISTS waitlist_entries CASCADE;
-- A waitlist entry belongs to a waitlist
CREATE TABLE waitlist_entries (
  -- When a waitlist entry is created by a user,
  -- the user.booking_id will also be updated
  -- with the waitlist_entries.id -- TO DO
  id SERIAL PRIMARY KEY,
  -- references the waitlist that the restaurant has
  waitlist_id INTEGER NOT NULL REFERENCES waitlists(id) ON DELETE CASCADE,
  -- initial time of booking
  booked_at BIGINT NOT NULL,
  -- limited to 1-6 since they will be directed to call the restaurant otherwise
  party_size INTEGER NOT NULL,
  party_name VARCHAR(255) NOT NULL,
  table_ready_at BIGINT DEFAULT NULL,
  texted BOOLEAN DEFAULT FALSE
);
