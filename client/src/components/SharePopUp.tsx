import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserGroups } from "../utils/api";
import { Group } from "../types/groupTypes";
import { Community } from "../types/groupTypes";

/* Rectangle 46 */
const Rectangle46 = styled.div`
  position: absolute;
  width: auto;
  height: 350px;
  background: #ffffff;
  border: 2px solid black;
  overflow: scroll;
  top: 120px;
  left: 450px;
`;

/* Friends */

const Friends = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;
  color: #f16a00;
  &:hover {
    color: #f16a00;
  }
`;

const BlackText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

/* Line 2 */

const Line2 = styled.div`
  position: absolute;
  height: 0px;
  margin-top: 40px;
  border: 1px solid #f16a00;
`;

/* Share program to... */

const Shareprogram = styled.div`
  width: 302px;
  height: 39px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: center;

  color: #f16a00;
`;

const ShareButton = styled.button`
  border-radius: 5rem;
  background-color: #f16a00;
  height: 4rem;
  width: 10rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  float: right;
`;

const OrangeText = styled.div`
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  color: #f16a00;
  cursor: pointer;
`;

const SharePopUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [groups, setGroups] = useState([] as Group[]);
  const [communities, setCommunities] = useState([] as Community[]);

  useEffect(() => {
    getUserGroups()
      .then((res) => {
        if (res.data.data) {
          setGroups(res.data.data);
        } else {
          setGroups([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ShareButton onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Share program"}
      </ShareButton>
      {groups.length > 0 ? (
        isVisible ? (
          <Rectangle46>
            <div
              className="row"
              style={{
                position: "sticky",
                top: "10px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Shareprogram
                style={{
                  backgroundColor: "#FFFFFF",
                }}
              >
                Share program to...
              </Shareprogram>
            </div>
            <div className="row row-cols-2 g-3">
              <div
                className="card"
                style={{
                  background: "rgba(241, 106, 0, 0.22)",
                  width: "auto",
                  margin: "20px",
                  overflow: "scroll",
                }}
              >
                <div className="row">
                  <Friends>Friends</Friends>
                  <Line2></Line2>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className="card-title">Groups</h5>
                    {groups.map((group) => (
                      <OrangeText>
                        {group.groupName}
                        {"\n\n"}
                      </OrangeText>
                    ))}
                  </div>
                  <div className="col">
                    <h5 className="card-title">Communities</h5>
                    {communities.map((community) => (
                      <OrangeText>{community.communityName}</OrangeText>
                    ))}
                    <OrangeText>Heisann</OrangeText>
                  </div>
                </div>
              </div>
            </div>
            <ShareButton
              style={{
                position: "sticky",
                bottom: "20px",
                height: "3rem",
              }}
            >
              Share
            </ShareButton>
          </Rectangle46>
        ) : null
      ) : (
        <h2>no groups to share to...</h2>
      )}
    </>
  );
};

export default SharePopUp;
