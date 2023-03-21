const group = require("../Models/Group");
const groupService = require("../Services/groupService");
const userService = require("../Services/userService");

exports.findGroupByUser = async (req, res) => {
  try {
    const user = await userService.getUserByName(req.session.user.username);
    const groups = await groupService.findGroupByUser(user.username);
    res.json({ data: groups, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findGroupById = async (req, res) => {
  try {
    const id = req.params.id;
    const group = await groupService.findGroupById(id);
    res.json({ data: group, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGroup = async (req, res) => {
  try {
    const { groupName, isPrivate, members } = req.body;
    const { user } = req.session;
    console.log("== Req body : when creating group ==");
    console.log(groupName);
    console.log(isPrivate);
    console.log(members);
    console.log(user.username);
    if (!groupName || !user) {
      console.log("incomplete post");
      return res.status(400).json({ message: "Incomplete post request!" });
    } else if (await groupService.findGroup(groupName)) {
      console.log("groupname taken");
      return res.status(400).json({ message: "groupname is taken." });
    } else {
      let newGroup = new group({
        groupName: groupName,
        isPrivate: isPrivate,
        owners: [
          {
            userName: user.username,
            userID: user._id,
          },
        ],
        members: [{ userName: user.username, userID: user._id }],
      });
      members.forEach((user) => {
        newGroup.members.push({ userName: user.username, userID: user.userID });
      });
      const savedGroup = await groupService.createGroup(newGroup);
      res.status(200).json({ data: savedGroup, message: "New group created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGroup = async (req, res) => {
  try {
    const id = req.params.id;
    const group = req.body;
    if (!group || !id) {
      res.status(500).json({ error: err });
    } else {
      const updatedGroup = await groupService.updateGroup(id, group);
      res.status(200).json({ data: updatedGroup, message: "group updated" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await groupService.allGroups();
    res.status(200).json({ data: groups, message: "All groups returned" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

exports.joinGroup = async (req, res) => {
  const id = req.params.id;
  const user = {
    userName: req.session.user.username,
    userID: req.session.user._id,
  };
  try {
    const group = groupService.joinGroup(id, user);
    res.status(200).json({ data: group, message: "Joined group" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
