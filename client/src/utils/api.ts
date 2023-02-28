import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Workout } from "../types/workoutExerciseTypes";
import { WorkoutPlan } from "../types/workoutExerciseTypes";

type LoginFormData = {
  username: string;
  password: string;
};

type SignUpFormData = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const getWorkoutPlan = async (id: string) => {
  await axios
    .get("/api/workout/plan/" + id)
    .then((res) => {
      return res.data as WorkoutPlan;
    })
    .catch((err) => {
      console.log(err);
    });
  return null;
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (formData: LoginFormData) => {
      await axios.post("http://localhost:3001/api/user/auth", formData);
    },
    {
      onSuccess: () => {
        console.log("Success");
        navigate("/programs");
      },
      onError: () => {
        console.log("Wrong username/password");
      },
    }
  );
};

export const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (formData: SignUpFormData) => {
      await axios.post("http://localhost:3001/api/user/register", formData);
    },
    {
      onSuccess: () => {
        console.log("Success");
        navigate("/login");
      },
      onError: () => {
        console.log("Error occurred");
      },
    }
  );
};

export const useFetchWorkouts = () =>
  useQuery<Workout[]>(["workouts"], async () => {
    {
      return await axios
        .get("http://localhost:3001/api/workout/workouts")
        .then((res) => {
          return res.data.data;
        });
    }
  });

export const useFetchWorkoutPlansQuery = () =>
  useQuery<WorkoutPlan[]>(["workoutPlans"], async () => {
    return await axios
      .get("http://localhost:3001/api/workout/plan")
      .then((res) => {
        return res.data.data;
      });
  });

export const useGetWorkoutDataQuery = (id: string) =>
  useQuery<WorkoutPlan>(["workoutPlan", id], async () => {
    return await axios
      .get(`http://localhost:3001/api/workout/plan/${id}`)
      .then((res) => {
        return res.data.data;
      });
  });

export const useCreateWorkoutPlanMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (workoutPlan: WorkoutPlan) => {
      await axios.post("http://localhost:3001/api/workout/plan", workoutPlan);
    },
    {
      onSuccess: () => {
        console.log("Success");
        navigate("/programs");
      },
      onError: () => {
        console.log("Error occurred");
      },
    }
  );
};
