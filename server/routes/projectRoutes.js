const router = require("express").Router();
const Project = require("../models/project.model");
const ProjectSkill=require("../models/projectSkill.model")
//*** add project ****//
router.post("/add", async (req, res) => {
  try {
    let { price, title, description } = req.body;
    const newProject = new Project({
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
    // const projectId = req.params.id;
    // await ProjectSkill.find({ project_id: projectId })
    //   .populate("project_id")
    //   .exec()
    //   .then((projectDetails) => {
    //     if (projectDetails) {
    //       res.status(200).json(projectDetails);
    //     } else {
    //       res.status(404).json({ message: "not found" });
    //     }
    //   })
    //   .catch((err) => {
    //     res.status(500).json(err);
    //   });
    let projectId = req.params.id;
    await Project.find({ _id: projectId })
      .then((detail) => {
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
    await Project.find()
      .then((project) => {
        res.json(project);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
