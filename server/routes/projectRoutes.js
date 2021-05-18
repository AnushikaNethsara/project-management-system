const router = require("express").Router();
const Project = require("../models/project.model");
const ProjectSkill=require("../models/projectSkill.model")
//*** add project ****//
router.post("/add", async (req, res) => {
  try {
    let { seller_id, buyer_id,price, title, description } = req.body;
    const newProject = new Project({
      seller_id,
      buyer_id,
      title,
      description,
      price,
    });

    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//**** update project details ****//
router.post("/update/:id", async (req, res) => {
  try {
    await Project.findById(req.params.id).then((project) => {
      project.seller_id = req.body.seller_id;
      project.buyer_id = req.body.buyer_id;
      project.title = req.body.title;
      project.price = req.body.price;
      project.description = req.body.description;
      project
        .save()
        .then(() =>
          res.status(200).json({ msg: "You've Updated the project!" })
        )
        .catch((err) => res.status(400).json({ error: err.message }));
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//*** delete project***//
router.route("/delete/:id").delete(async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id)
      .then(() => res.json({ msg: "Project Deleted Successfully!" }))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//*** get project details by id ***//
router.get("/get-details/:id", async (req, res) => {
  try {
    let projectId = req.params.id;
    //with one populate this didn't work
    await Project.find({ _id: projectId }).populate("seller_id").populate("buyer_id").exec().
      then((detail) => {
        res.json(detail);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//** get all projects to display**//
router.get("/", async (req, res) => {
  try {
    //with one populate this didn't work
    await Project.find().populate("seller_id").populate("buyer_id").exec()
      .then((project) => {
        res.json(project);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
