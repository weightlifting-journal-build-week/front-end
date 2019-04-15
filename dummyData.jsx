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
const users = [
  {
    name: 'Clark Kent',
    username: 'Superman',
    email: 'clarkkent@superman.com',
    password: 'password',
    height: 76,
    weight: 225,
  }
]

const workouts = [
  {
    id: 1,
    name: '5x5 A',
    date: '04-15-2019', 
    user_id: 1,
  }
  {
    id: 2,
    name: '5x5 B',
    date: '04-17-2019', 
    user_id: 1,
  }
]

const exercises = [
  {
    id: 1,
    name: 'squat',
    target_area: 'legs/compound',
    workout_id: 1,
  },
  {
    id: 2,
    name: 'squat',
    target_area: 'legs/compound',
    workout_id: 2,
  }
]

const sets = [
  {
    id: 1,
    reps: 5,
    weight: 595,
    exercise_id: 1,
  },
  {
    id: 2,
    reps: 5,
    weight: 595,
    exercise_id: 1,
  },
  {
    id: 3,
    reps: 5,
    weight: 595,
    exercise_id: 1,
  },
  {
    id: 4,
    reps: 5,
    weight: 595,
    excercise_id: 1
  },
  {
    id: 5,
    reps: 5,
    weight: 600,
    excercise_id: 2
  },
  {
    id: 6,
    reps: 5,
    weight: 600,
    excercise_id: 2
  },
  {
    id: 7,
    reps: 5,
    weight: 600,
    excercise_id: 2
  },
  {
    id: 8,
    reps: 5,
    weight: 600,
    excercise_id: 2
  },
  {
    id: 9,
    reps: 5,
    weight: 600,
    excercise_id: 2
  },
  {
    id: 10,
    reps: 5,
    weight: 600,
    excercise_id: 2
  }
]
