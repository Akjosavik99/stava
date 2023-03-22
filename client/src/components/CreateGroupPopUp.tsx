import React, { useEffect, useState } from "react";

import {
  WhiteSquare,
  OrangeSquare,
  OrangeText,
  SmallSquare,
  InputField,
  CreateButton,
} from "../styles/CreateGroup";

import { User } from "../types/userType";
import { getAllUsers, createGroup } from "../utils/api";

interface CGPUprops {
  setIsVisible: (params: any) => void;
}

type submitUser = {
  username: string;
  userID: string;
};

const CreateGroupPopUp: React.FC<CGPUprops> = (props) => {
  const { setIsVisible } = props;
  const [users, setUsers] = useState([] as User[]);
  const [selectedUsers, setSelectedUsers] = useState([] as submitUser[]);
  const [groupName, setGroupName] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);

  useEffect(() => {
    console.log(selectedUsers);
  }, [selectedUsers]);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
        } else {
          setUsers([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const addUserToSelectedUsers = (user: User) => {
    const su = { username: user.username, userID: user._id } as submitUser;
    if (
      selectedUsers.filter((user) => user.username == su.username).length > 0
    ) {
      setSelectedUsers(
        selectedUsers.filter((user) => user.username !== su.username)
      );
    } else {
      setSelectedUsers([...selectedUsers, su]);
    }
  };

  const submitGroupFunc = (e: React.MouseEvent) => {
    e.preventDefault();
    const su = {
      groupName: groupName,
      isPrivate: isPrivate,
      members: selectedUsers,
    };
    console.log(su);
    if (su) {
      createGroup(su).then((res) => {
        console.log(res.data);
        window.location.reload();
      });
    }
  };

  const showUsers = () => {
    return users.map((user) => {
      return (
        <div>
          <div className="form-check-align-middle">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={() => addUserToSelectedUsers(user)}
              style={{
                margin: "20px",
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {user.username}
            </label>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <WhiteSquare>
        <div className="row">
          <div className="col">
            <OrangeText>Create Group</OrangeText>
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
              <div className="col">
                <OrangeText
                  style={{
                    fontSize: "35px",
                    float: "right",
                  }}
                >
                  Group name:
                </OrangeText>
              </div>
              <div className="col">
                <InputField
                  onChange={(e) => {
                    setGroupName(e.target.value);
                  }}
                  style={{
                    margin: "auto",
                  }}
                ></InputField>
              </div>
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
              <div className="col">
                {users.length > 0 ? (
                  <SmallSquare
                    style={{
                      overflow: "scroll",
                    }}
                  >
                    <OrangeText
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {showUsers()}
                    </OrangeText>
                  </SmallSquare>
                ) : (
                  <SmallSquare>No users to add</SmallSquare>
                )}
              </div>
              <div className="col">
                <SmallSquare>
                  <OrangeText
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    Group type:
                  </OrangeText>
                  <div
                    className="form-check"
                    style={{
                      marginLeft: "20px",
                    }}
                  >
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      name="optradio"
                      value="closedgroup"
                      checked
                      onChange={() => setIsPrivate(true)}
                    />
                    Closed Group
                    <label
                      className="form-check-label"
                      htmlFor="closedgroup"
                    ></label>
                  </div>
                  <div
                    className="form-check"
                    style={{
                      margin: "20px",
                    }}
                  >
                    <input
                      type="radio"
                      className="form-check-input"
                      id="community"
                      name="optradio"
                      value="option2"
                      onChange={() => setIsPrivate(false)}
                    />
                    Community
                    <label
                      className="form-check-label"
                      htmlFor="community"
                    ></label>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-right">
                      <CreateButton
                        onClick={(e) => submitGroupFunc(e)}
                        style={{
                          float: "right",
                        }}
                      >
                        Create group
                      </CreateButton>
                    </div>
                  </div>
                </SmallSquare>
              </div>
            </div>
          </OrangeSquare>
        </form>
      </WhiteSquare>
    </>
  );
};

export default CreateGroupPopUp;
