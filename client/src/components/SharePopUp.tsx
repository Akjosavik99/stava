import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../styles/NewProgram";
import { getUserGroups } from "../utils/api";
import { Group } from "../types/groupTypes";

/* Rectangle 46 */
const Rectangle46 = styled.div`
  position: absolute;
  width: 345px;
  height: 259px;
  background: #ffffff;
`;

/* Friends */

const Friends = styled.div`
  position: absolute;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  margin: 10px;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  color: #f16a00;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  width: 295px;
  height: 0px;
  margin-top: 40px;
  border: 1px solid #f16a00;
`;

/* Share program to... */

const Shareprogram = styled.div`
  position: absolute;
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

/* Rectangle 49 */

const Modal = styled.div<{ isVisible: boolean }>`
  width: 345px;
  height: 259px;
  background-color: FFFFFF;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
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
  margin-right: 330px;
`;

const SharePopUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [groups, setGroups] = useState([] as Group[]);

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
          <Rectangle46
            style={{
              background: "rgba(241, 106, 0, 0.22)",
              height: "179px",
            }}
          >
            <div className="row">
              <div className="col">
                {" "}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Groups</h5>
                    {groups.map((group) => (
                      <h1>{group.groupName}</h1>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col">høyre side</div>
            </div>
          </Rectangle46>
        ) : null
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};
export default SharePopUp;
