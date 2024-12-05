// Calculate Average Score

select 
  project_id,
  AVG(score)
from 
  project_data
group by 
  project_id
having
    COUNT(DISTINCT team_member_id) > 1;