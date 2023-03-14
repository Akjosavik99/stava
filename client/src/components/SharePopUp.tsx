import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserGroups } from "../utils/api";
import { Group } from "../types/groupTypes";

/* Rectangle 46 */
const Rectangle46 = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  max-height: 500px;
  background: #ffffff;
  border: 2px solid black;
  overflow: scroll;
  top: 120px;
  left: 450px;
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
  float: right;
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
  const [privateGroups, setPrivateGroups] = useState([] as Group[]);
  const [publicGroups, setPublicGroups] = useState([] as Group[]);
  const [active, setActive] = useState({} as Group);

  useEffect(() => {
    getUserGroups()
      .then((res) => {
        if (res.data.data) {
          setGroups(res.data.data);
          setPrivateGroups(
            res.data.data.filter((group: Group) => group.isPrivate)
          );
          setPublicGroups(
            res.data.data.filter((group: Group) => !group.isPrivate)
          );
        } else {
          setGroups([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const shareWorkout = (group: Group) => {
    //TODO
    //waiting for backend implementation for sharing a workout in a group as post
    console.log(group);
  };

  return (
    <>
      <ShareButton onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Share program"}
      </ShareButton>
      {groups.length > 0 ? (
        isVisible ? (
          <Rectangle46>
            <div
              className="row sticky-top bg-white"
              style={{
                position: "sticky",
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
                  <div className="col">
                    <h5 className="card-title">Groups</h5>
                    {privateGroups.map((group) => (
                      <OrangeText>
                        <a
                          onClick={() => {
                            setActive(group);
                          }}
                        >
                          {group.groupName}
                        </a>
                        {"\n\n"}
                      </OrangeText>
                    ))}
                  </div>
                  <div className="col">
                    <h5 className="card-title">Communities</h5>
                    {publicGroups.map((group) => (
                      <OrangeText>
                        <a
                          onClick={() => {
                            setActive(group);
                          }}
                        >
                          {group.groupName}
                        </a>
                        {"\n\n"}
                      </OrangeText>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row sticky-bottom bg-white">
              <div className="col">
                <ShareButton
                  onClick={() => shareWorkout(active)}
                  style={{
                    position: "sticky",
                    height: "3rem",
                    margin: "13px",
                  }}
                >
                  Share
                </ShareButton>
              </div>
              <div className="col">
                <h5>{active.groupName ? "Sharing to..." : "Choose a group"}</h5>
                <p>{active.groupName ? active.groupName : null}</p>
              </div>
            </div>
          </Rectangle46>
        ) : null
      ) : isVisible ? (
        <Rectangle46>
          <OrangeText
          style = {{
            margin: "20px"
          }}>no groups to share to...</OrangeText>
        </Rectangle46>
      ) : null}
    </>
  );
};

export default SharePopUp;
