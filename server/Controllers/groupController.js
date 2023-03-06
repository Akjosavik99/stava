const group = require("../Models/Group");
const groupService = require("../Services/groupService");

exports.findGroupByUser = async (req, res) => {
  try {
    const userid = req.session.user.userid;
    const groups = await groupService.findGroupByUser(userid);
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
    const { groupname, grouptype } = req.body;
    if (!groupname || !members) {
      return res.status(400).json({ message: "Incomplete post request!" });
    } else if (await groupService.findGroup(groupname)) {
      return res.status(400).json({ message: "groupname is taken." });
    } else {
      const newGroup = await groupService.createGroup(
        new group({
          groupname: groupname,
          members: members,
        })
      );
      res.status(200).json({ data: newGroup, message: "New group created" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
