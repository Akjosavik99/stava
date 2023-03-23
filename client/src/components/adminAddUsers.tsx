import React, { useState, useEffect } from "react";
import {
  WhiteSquare,
  OrangeSquare,
  OrangeText,
  CreateButton,
} from "../styles/JoinCommunity";
import { GroupData } from "../types/groupTypes";
import { getAllUsers, addToGroup } from "../utils/api";
import { User } from "../types/userType";

interface AdminViewPostsProps {
  group: GroupData;
  setShowUsers: (params: any) => void;
}

const AdminAddUsers: React.FC<AdminViewPostsProps> = (props) => {
  const { group, setShowUsers } = props;
  const [selectedUser, setSelectedUser] = useState("");
  const [users, setUsers] = useState([] as User[]);

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

  const showUsers = () => {
    return users.map((user) => {
      return (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedUser(user._id);
            }}
            className={selectedUser == user._id ? "btn btn-light" : "btn"}
          >
            {user.username}
          </button>
        </div>
      );
    });
  };

  const addUser = (e: React.MouseEvent) => {
    e.preventDefault();
    addToGroup(group._id, selectedUser)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <WhiteSquare>
        <div className="row">
          <div className="col">
            <OrangeText>Add user</OrangeText>
          </div>
          <div className="col">
            <button
              onClick={() => setShowUsers(false)}
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
                addUser(e), setShowUsers(false);
              }}
            >
              Add user to group
            </CreateButton>
          </div>
          {showUsers()}
        </OrangeSquare>
      </WhiteSquare>
    </>
  );
};
export default AdminAddUsers;
