/*
  Workout
  ----------
    id
    name (string)
    days (array)

  Day
  ----
    id
    workout_id
    exercises (array)

  Exercise
  ----------
    id
    day_id
    name (string)
    sets (array)

  Set
  ----
    exercise_id
    reps (number)
    weight (number)
*/

//EXAMPLE
const fiveByFive = {
  name: '5x5',
  days: [
    {
      name: 'A'
      exercises: [
        {
          name: 'deadlift',
          sets: [
            {reps: 5, weight: 275},
            {reps: 5, weight: 275},
            {reps: 5, weight: 275},
            {reps: 5, weight: 275},
            {reps: 5, weight: 275}
          ]
        },
        {
          name: 'squat',
          sets: [
            {reps: 5, weight: 275},
            {reps: 5, weight: 275},
            {reps: 5, weight: 275},
            {reps: 5, weight: 275},
            {reps: 5, weight: 275}
          ]
        },
        {
          name: 'overhead press',
          sets: [
            {reps: 5, weight: 125},
            {reps: 5, weight: 125},
            {reps: 5, weight: 125},
            {reps: 5, weight: 125},
            {reps: 5, weight: 125}
          ]//End of sets
        }//End of exercise
      ]//End of exercises  
    },
    {
      name: 'B',
      exercises: [
        {
          name: 'bench press',
          sets: [
            {reps: 5, weight: 165},
            {reps: 5, weight: 165},
            {reps: 5, weight: 165},
            {reps: 5, weight: 165},
            {reps: 5, weight: 165}
          ]
        },
        {
          name: 'squat',
          sets: [
            {reps: 5, weight: 280},
            {reps: 5, weight: 280},
            {reps: 5, weight: 280},
            {reps: 5, weight: 280},
            {reps: 5, weight: 280}
          ]
        },
        {
          name: 'bent over row',
          sets: [
            {reps: 5, weight: 125},
            {reps: 5, weight: 125},
            {reps: 5, weight: 125},
            {reps: 5, weight: 125},
            {reps: 5, weight: 125}
          ]//End of sets
        }//End of exercise
      ]//End of exercises
    }//End of day
  ]//End of days
}
