// Latest Login Date

select 
  player_id,
  max(login_date)
from 
  players_logins
group by
  player_id;