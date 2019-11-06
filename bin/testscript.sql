          SELECT restaurants.id, restaurants.name, restaurants.address, restaurants.type, restaurants.image_url, waitlists.id AS waitlist_id, waitlists.wait_time, waitlist_entries.id
          FROM restaurants
          LEFT JOIN waitlists ON restaurants.id=waitlists.restaurant_id
          LEFT JOIN waitlist_entries ON waitlist_entries.waitlist_id=waitlists.id
          LEFT JOIN users ON waitlist_entries.id=users.booking_id
          ORDER BY users.booking_id
          LIMIT 50
