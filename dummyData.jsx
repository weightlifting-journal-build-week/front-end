/*
  Workout
  ----------
    id
    name (string)
    date (string)

  Exercise
  ----------
    id
    workout_id
    name (string)
    target_area(string)

  Set
  ----
    id
    exercise_id
    reps (number)
    weight (number)
*/

//example
const = {
  username: 'Clark Kent',
  email: 'clarkkent@notsuperman.com',
  password: 'password',
  height: 76,
  weight: 225,
}
const fiveByFiveA = {
  id: 1,
  name: '5x5 A',
  date: '04-15-2019', 
  user_id: 1,
}

const exercise = {
  id: 1,
  name: 'squat',
  target_area: 'legs/compound',
  workout_id: 1,
}

const sets = [
  {
    id: 1,
    reps: 5,
    weight: 595,
    exercise_id: 1,
  }
  {
    id: 2,
    reps: 5,
    weight: 595,
    exercise_id: 1,
  }
  {
    id: 3,
    reps: 5,
    weight: 595,
    exercise_id: 1,
  }
  {
    id: 4,
    reps: 5,
    weight: 595,
    excercise_id: 1
  }
  {
    id: 5,
    reps: 5,
    weight: 595,
    excercise_id: 1
  }
]
