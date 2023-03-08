import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { StyledHeader, FeedContainer, FeedPost } from "./styles/Feed";
import { useGetFeedPostsQuery } from "./utils/api";

const App: React.FC = () => {
  const { data, isLoading } = useGetFeedPostsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <FeedContainer>
        <StyledHeader>Feed</StyledHeader>
        {data?.map((post) => {
          return (
            <FeedPost>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </FeedPost>
          );
        })}
      </FeedContainer>
    </>
  );
};

export default App;
