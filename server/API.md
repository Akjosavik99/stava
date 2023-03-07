# Api documentation:

## User

### `/api/user`

Methods:

`/auth Method: GET`
Check if user is logged in

`/auth Method: POST`
Login user

`/auth Method: DELETE`
Logout user

`/register Method: POST`
Register user

`/register Method: DELETE`
Delete user

## Workout & WorkoutPlans

### `/api/workout`

Methods:

`/ Method: POST`
Create new workout

`/workouts Method: GET`
Find all workouts where user is owner

`/workout/:id Method: GET`
Find workout by id

`/plan Method: GET`
Finds workout plans where user is owner

`/plan Method: POST`
Create new workout plan

`/plan/:id Method: GET`
Find workout plan by id

## Groups

### `/api/group`

Methods:

`/ Method: GET`
Finds all groups connected to user

`/ Method: POST`
Create new group

`/find/:id Method: GET`
Find group by id

`/update/:id Method: PUT`
Update group
