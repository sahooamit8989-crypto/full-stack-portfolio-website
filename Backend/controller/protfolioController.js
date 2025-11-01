import { Intro } from "../models/portfolioModel.js";
import { About,Projects } from "../models/portfolioModel.js";
import { Expriance } from "../models/portfolioModel.js";
import { Technologes } from "../models/portfolioModel.js";
import { Certifications } from "../models/portfolioModel.js";



// POST /api/portfolio/intro → Add intro data
export const addIntro = async (req, res) => {
  try {
    const { welcomeText, firstName, lastName, caption, description } = req.body;

    if (!welcomeText || !firstName || !lastName || !caption || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIntro = new Intro({
      welcomeText,
      firstName,
      lastName,
      caption,
      description,
    });

    await newIntro.save();
    res.status(201).json({
      success: true,
      message: "Intro added successfully",
      data: newIntro,
    });
  } catch (error) {
    console.error("Error adding intro:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// GET /api/portfolio/intro → Fetch all intro data
export const getIntro = async (req, res) => {
  try {
    const intros = await Intro.find();
    res.status(200).json({
      success: true,
      data: intros,
    });
  } catch (error) {
    console.error("Error fetching intros:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// DELETE /api/portfolio/intro/:id → Delete intro data by ID
export const deleteIntro = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedIntro = await Intro.findByIdAndDelete(id);

    if (!deletedIntro) {
      return res.status(404).json({
        success: false,
        message: "Intro not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Intro deleted successfully",
      data: deletedIntro,
    });
  } catch (error) {
    console.error("Error deleting intro:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};






// 📤 Add About data
export const addAbout = async (req, res) => {
  try {
    const { lootteURI, description1, description2, skills } = req.body;

    if (!lootteURI || !description1 || !description2 || !skills) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAbout = new About({
      lootteURI,
      description1,
      description2,
      skills,
    });

    await newAbout.save();

    res.status(201).json({
      success: true,
      message: "About data added successfully",
      data: newAbout,
    });
  } catch (error) {
    console.error("Error adding about:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// 📥 Get all About data
export const getAbout = async (req, res) => {
  try {
    const aboutData = await About.find();
    res.status(200).json({
      success: true,
      data: aboutData,
    });
  } catch (error) {
    console.error("Error fetching about data:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// 🗑️ Delete About data by ID
export const deleteAbout = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await About.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "About data not found" });
    }

    res.status(200).json({
      success: true,
      message: "About data deleted successfully",
      data: deleted,
    });
  } catch (error) {
    console.error("Error deleting about data:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};




// 📤 Add Project
export const addProject = async (req, res) => {
  try {
    const { title, description, image, link, technologes } = req.body;

    // Basic validation
    if (!title || !description || !image || !link || !technologes) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProject = new Projects({
      title,
      description,
      image,
      link,
      technologes,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: newProject,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// 📥 Get all Projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ❌ Delete Project by ID
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProject = await Projects.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: deletedProject,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};




// 📤 Add Experience
export const addExperience = async (req, res) => {
  try {
    const { title, period, company, description } = req.body;

    // Validation
    if (!title || !period || !company || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExperience = new Expriance({
      title,
      period,
      company,
      description,
    });

    await newExperience.save();

    res.status(201).json({
      success: true,
      message: "Experience added successfully",
      data: newExperience,
    });
  } catch (error) {
    console.error("Error adding experience:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// 📥 Get all Experiences
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Expriance.find();
    res.status(200).json({
      success: true,
      data: experiences,
    });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ❌ Delete Experience by ID
export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExperience = await Expriance.findByIdAndDelete(id);

    if (!deletedExperience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
      data: deletedExperience,
    });
  } catch (error) {
    console.error("Error deleting experience:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};






// 📤 Add Technology
export const addTechnology = async (req, res) => {
  try {
    const { title, description, image, link } = req.body;

    // Basic validation
    if (!title || !description || !image || !link) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTechnology = new Technologes({
      title,
      description,
      image,
      link,
    });

    await newTechnology.save();

    res.status(201).json({
      success: true,
      message: "Technology added successfully",
      data: newTechnology,
    });
  } catch (error) {
    console.error("Error adding technology:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// 📥 Get all Technologies
export const getTechnologies = async (req, res) => {
  try {
    const technologies = await Technologes.find();
    res.status(200).json({
      success: true,
      data: technologies,
    });
  } catch (error) {
    console.error("Error fetching technologies:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ❌ Delete Technology by ID
export const deleteTechnology = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTechnology = await Technologes.findByIdAndDelete(id);

    if (!deletedTechnology) {
      return res.status(404).json({
        success: false,
        message: "Technology not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Technology deleted successfully",
      data: deletedTechnology,
    });
  } catch (error) {
    console.error("Error deleting technology:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};






// 📤 Add Certification
export const addCertification = async (req, res) => {
  try {
    const { title, description, image, link } = req.body;

    // Basic validation
    if (!title || !description || !image || !link) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCertification = new Certifications({
      title,
      description,
      image,
      link,
    });

    await newCertification.save();

    res.status(201).json({
      success: true,
      message: "Certification added successfully",
      data: newCertification,
    });
  } catch (error) {
    console.error("Error adding certification:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// 📥 Get all Certifications
export const getCertifications = async (req, res) => {
  try {
    const certifications = await Certifications.find();
    res.status(200).json({
      success: true,
      data: certifications,
    });
  } catch (error) {
    console.error("Error fetching certifications:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// ❌ Delete Certification by ID
export const deleteCertification = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCertification = await Certifications.findByIdAndDelete(id);

    if (!deletedCertification) {
      return res.status(404).json({
        success: false,
        message: "Certification not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Certification deleted successfully",
      data: deletedCertification,
    });
  } catch (error) {
    console.error("Error deleting certification:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};





