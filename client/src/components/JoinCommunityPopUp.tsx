import React, { useEffect, useState } from "react";

import {
  WhiteSquare,
  OrangeSquare,
  OrangeText,
  CreateButton,
} from "../styles/JoinCommunity";

interface JoinCommunity {
  setIsVisible: (params: any) => void;
}

const CreateGroupPopUp: React.FC<JoinCommunity> = (props) => {
  const { setIsVisible } = props;

  return (
    <>
      <WhiteSquare>
        <div className="row">
          <div className="col">
            <OrangeText>Join community</OrangeText>
          </div>
          <div className="col">
            <button
              onClick={() => setIsVisible(false)}
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
            <div
              className="row"
              style={{
                height: "40px",
              }}
            >
              <div className="col"></div>
            </div>
            <div className="row">
              <div className="col">
                <OrangeText
                  style={{
                    fontSize: "30px",
                    float: "left",
                    marginLeft: "30px",
                  }}
                >
                  Add users
                </OrangeText>
              </div>
              <div className="col"></div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <CreateButton>Join community</CreateButton>
              </div>
            </div>
          </OrangeSquare>
        </form>
      </WhiteSquare>
    </>
  );
};

export default CreateGroupPopUp;
