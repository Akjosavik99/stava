import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GroupData, submitGroup } from "../types/groupTypes";
import { Post } from "../types/postTypes";
import { Log } from "../types/userType";
import {
  Exercises,
  Workout,
  WorkoutDataNoId,
} from "../types/workoutExerciseTypes";
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
        navigate("/");
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

export const useGetDataQuery = (id: string | undefined) => {
  return useQuery<Exercises>(["exercises", id], async () => {
    return await axios
      .get(`http://localhost:3001/api/workout/workout/${id}`)
      .then((res) => {
        return res.data.data;
      });
  });
};

export const useSaveWorkoutMutation = () => {
  return useMutation(async (currentData: WorkoutDataNoId) => {
    await axios.post("http://localhost:3001/api/workout", currentData);
  });
};

export const useGetGroupsQuery = () => {
  return useQuery(["groups"], async () => {
    return await axios.get("http://localhost:3001/api/group/").then((res) => {
      return res.data.data as GroupData[];
    });
  });
};

export const sendPost = async (post: any) => {
  await axios.post("http://localhost:3001/api/post/submit", post);
};

export const useGetFeedPostsQuery = () =>
  useQuery(["feed"], async () => {
    return await axios
      .get("http://localhost:3001/api/user/feed")
      .then((res) => {
        return res.data.data as Post[];
      });
  });

export const getUserGroups = async () => {
  return await axios.get("http://localhost:3001/api/group");
};

export const fetchUser = async () => {
  return await axios.get("http://localhost:3001/api/user/auth");
};

export const log = async (log: Log) => {
  return await axios.post("http://localhost:3001/api/user/log", log);
};

export const getAllUsers = async () => {
  return await axios.get("http://localhost:3001/api/user/all");
};

export const createGroup = async (group: submitGroup) => {
  return await axios.post("http://localhost:3001/api/group", group);
};
