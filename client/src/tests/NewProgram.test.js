
const axios = require('axios')


const BASE_URL = 'http://localhost:3001/api/workout-plan';

describe('createWorkoutPlan', () => {
  it('should create a new workout plan', async () => {
    // Create a new workout plan object
    const workoutPlan = {
      id: '',
      owner: 'testuser',
      workoutPlanName: 'Test Workout Plan',
      date: new Date(),
      followers: [],
      workoutSchedule: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
      },
    };

    // Make a POST request to create the workout plan
    const response = await axios.post(`${BASE_URL}/create`, workoutPlan);

    // Check the response status code
    expect(response.status).toBe(201);

    // Check the response data
    expect(response.data).toEqual(expect.objectContaining({
      id: expect.any(String),
      owner: workoutPlan.owner,
      workoutPlanName: workoutPlan.workoutPlanName,
      date: expect.any(String),
      followers: [],
      workoutSchedule: {
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: [],
      },
    }));

    // Set the workout plan ID to the newly created ID
    workoutPlan.id = response.data.id;
  });
});
