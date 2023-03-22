import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GroupData, submitGroup } from "../types/groupTypes";
import { Post } from "../types/postTypes";
import { Log, User } from "../types/userType";
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

export const useGetAllGroupsQuery = () => {
  return useQuery(["allgroups"], async () => {
    return await axios
      .get("http://localhost:3001/api/group/all")
      .then((res) => {
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

export const useFetchUser = () =>
  useQuery(["user"], async () => {
    return await axios
      .get("http://localhost:3001/api/user/auth")
      .then((res) => {
        return res.data.data as User;
      });
  });

export const log = async (log: Log) => {
  return await axios.post("http://localhost:3001/api/user/log", log);
};

export const getAllUsers = async () => {
  return await axios.get("http://localhost:3001/api/user/all");
};

export const createGroup = async (group: submitGroup) => {
  return await axios.post("http://localhost:3001/api/group", group);
};

export const joinGroup = async (id: string) => {
  return await axios.post("http://localhost:3001/api/group/join/" + id);
};

export const updateGroup = async (group: GroupData) => {
  return await axios.post(
    "http://localhost:3001/api/group/update/" + group._id,
    group
  );
};

export const useGetGroupQuery = (id: string) => {
  return useQuery(["members"], async () => {
    return await axios
      .get(`http://localhost:3001/api/group/find/${id}`)
      .then((res) => {
        return res.data.data as GroupData;
      });
  });
};

export const useGetGroupPostsQuery = (id: string) => {
  return useQuery(["groupPosts"], async () => {
    return await axios
      .get(`http://localhost:3001/api/group/posts/${id}`)
      .then((res) => {
        return res.data.data as Post[];
      });
  });
};

export const useUpdateGroupQuery = (group: GroupData) => {
  return useQuery(["updateGroup"], async () => {
    return await axios
      .post(`http://localhost:3001/api/group/update/${group._id}`, group)
      .then((res) => {
        console.log(res.data.data.postIds);
        return res.data.data as GroupData;
      });
  });
};

export const useUpdateGroupMutation = (groupId: string) => {
  return useMutation(async (group: GroupData) => {
    await axios.put(`http://localhost:3001/api/group/update/${groupId}`, group);
  });
};

export const useGetGroupPostsQuery = (groupId: string) =>
  useQuery(["groupPosts"], async () => {
    return await axios
      .get(`http://localhost:3001/api/group/posts/${groupId}`)
      .then((res) => {
        return res.data.data as Post[];
      });
  });

export const getUsername = async () => {
  return await axios
    .get("http://localhost:3001/api/user/username")
    .then((res) => res.data.message as string);
};
