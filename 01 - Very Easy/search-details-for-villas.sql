// Airbnb Search Details

select * 
from 
  airbnb_search_details
where
  property_type in ('House', 'Villa')
and
  amenities like '%Wireless Internet%';