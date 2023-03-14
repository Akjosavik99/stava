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
    const { groupName, isPrivate } = req.body;
    const { user } = req.session;
    if (!groupName || !isPrivate || !user) {
      return res.status(400).json({ message: "Incomplete post request!" });
    } else if (await groupService.findGroup(groupName)) {
      return res.status(400).json({ message: "groupname is taken." });
    } else {
      const newGroup = await groupService.createGroup(
        new group({
          groupName: groupName,
          isPrivate: isPrivate,
          owners: [
            {
              userName: user.username,
              userID: user._id,
            },
          ],
          members: [
            {
              userName: user.username,
              userID: user._id,
            },
          ],
        })
      );
      res.status(200).json({ data: newGroup, message: "New group created" });
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
