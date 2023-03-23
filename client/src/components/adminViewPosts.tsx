import React, { useState } from "react";
import {
  WhiteSquare,
  OrangeSquare,
  OrangeText,
  CreateButton,
} from "../styles/JoinCommunity";
import { GroupData } from "../types/groupTypes";
import { useGetGroupPostsQuery, updateGroup } from "../utils/api";

interface AdminViewPostsProps {
  group: GroupData;
  setShowPosts: (params: any) => void;
}

const AdminViewPosts: React.FC<AdminViewPostsProps> = (props) => {
  const { group, setShowPosts } = props;
  const { data, isLoading, isError } = useGetGroupPostsQuery(group._id);
  const [selectedPost, setSelectedPost] = useState("");

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const showPosts = () => {
    return data.map((post) => {
      return (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedPost(post._id);
            }}
            className={selectedPost == post._id ? "btn btn-light" : "btn"}
          >
            {post.title}
          </button>
        </div>
      );
    });
  };

  const deletePost = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("delete post");
    group.postIDs = group.postIDs.filter((id) => id != selectedPost);
    console.log(group);
    updateGroup(group).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  };

  return (
    <>
      <WhiteSquare>
        <div className="row">
          <div className="col">
            <OrangeText>Delete post</OrangeText>
          </div>
          <div className="col">
            <button
              onClick={() => setShowPosts(false)}
              type="button"
              className="btn-close"
              aria-label="Close"
              style={{
                float: "right",
                margin: "10px",
              }}
            ></button>
          </div>
        </div>
        <OrangeSquare>
          <div className="col">
            <CreateButton
              onClick={(e) => {
                deletePost(e), setShowPosts(false);
              }}
            >
              Delete
            </CreateButton>
          </div>
          {showPosts()}
        </OrangeSquare>
      </WhiteSquare>
    </>
  );
};
export default AdminViewPosts;
