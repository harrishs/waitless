      SELECT waitlists.wait_time,
            restaurants.name,
            restaurants.phone_number,
            restaurants.address,
            waitlist_entries.party_name,
            waitlist_entries.party_size
      FROM restaurants
      JOIN waitlists ON restaurants.id=waitlists.restaurant_id
      JOIN waitlist_entries ON waitlist_entries.waitlist_id = waitlists.id
      JOIN users ON users.booking_id=waitlist_entries.id
      WHERE users.booking_id = 2
