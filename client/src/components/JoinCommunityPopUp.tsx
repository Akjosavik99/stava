import { useEffect, useState } from "react";

import {
  WhiteSquare,
  OrangeSquare,
  OrangeText,
  CreateButton,
} from "../styles/JoinCommunity";
import { useGetAllGroupsQuery, joinGroup } from "../utils/api";
import Loading from "./Loading";
import { Group } from "../types/groupTypes";

interface JCPUprops {
  setIsVisible2: (params: any) => void;
}

const JoinCommunityPopUp: React.FC<JCPUprops> = (props) => {
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const { setIsVisible2 } = props;
  const { data, isLoading, isError } = useGetAllGroupsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const JoinCommunity = (e: React.MouseEvent) => {
    e.preventDefault();
    joinGroup(selectedCommunity).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
  };

  const showCommunities = () => {
    return data
      .filter((group) => !group.isPrivate)
      .map((group) => {
        return (
          <div>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedCommunity(group._id);
              }}
              className={
                selectedCommunity == group._id ? "btn btn-light" : "btn"
              }
            >
              <OrangeText
              style = {{
                fontSize : "25px"
              }}>{group.groupName}</OrangeText>
              
            </button>
          </div>
        );
      });
  };

  return (
    <>
      <WhiteSquare>
        <div className="row">
          <div className="col">
            <OrangeText>Join community</OrangeText>
          </div>
          <div className="col">
            <button
              onClick={() => setIsVisible2(false)}
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
        <form>
          <OrangeSquare>
            <div className="col">
              <CreateButton
                onClick={(e) => {
                  JoinCommunity(e), setIsVisible2(false);
                }}
              >
                Join
              </CreateButton>
              <OrangeText
                style={{
                  fontSize: "30px",
                  margin: "10px",
                }}
              >
                {showCommunities()}
              </OrangeText>
            </div>
          </OrangeSquare>
        </form>
      </WhiteSquare>
    </>
  );
};
export default JoinCommunityPopUp;
