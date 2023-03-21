import { useNavigate } from "react-router-dom";
import Ad from "./components/ads";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import {
  StyledHeader,
  FeedContainer,
  FeedPost,
  MainContainer,
} from "./styles/Feed";
import { useGetFeedPostsQuery } from "./utils/api";
import CreateGroupPopUp from "./components/CreateGroupPopUp";

const App: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetFeedPostsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <Navbar />
      <MainContainer>
        <Ad />
        <FeedContainer>
          <StyledHeader>Feed</StyledHeader>
          {data != undefined && data?.length > 0 ? (
            data?.map((post) => {
              return (
                <FeedPost
                  onClick={() =>
                    navigate(`/viewworkouts/${post.workoutPlan.workoutPlanID}`)
                  }
                >
                  <p style={{ gridArea: "username", marginLeft: "1rem" }}>
                    <b>Author: </b>
                    {post.author}
                  </p>
                  <h1 style={{ gridArea: "title" }}>{post.title}</h1>
                  <h3 style={{ gridArea: "workoutname", margin: "1rem auto" }}>
                    {post.workoutPlan.workoutPlanName}
                  </h3>
                  <p
                    style={{ gridArea: "text", margin: "auto auto 1rem auto" }}
                  >
                    {post.text}
                  </p>
                </FeedPost>
              );
            })
          ) : (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              No posts yet!
            </p>
          )}
        </FeedContainer>
        <Ad />
      </MainContainer>
    </>
  );
};

export default App;
