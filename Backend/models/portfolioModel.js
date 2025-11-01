import mongoose from "mongoose";

// Intro Schema
const introSchema = new mongoose.Schema(
  {
    welcomeText: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    caption: { type: String, required: true },
    description: { type: String, required: true },
  },
);

// About Schema
const aboutSchema = new mongoose.Schema({
  lootteURI: { type: String, required: true },
  description1: { type: String, required: true },
  description2: { type: String, required: true },
  skills: { type: Array, required: true },
});

// Experience Schema
const exprienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  period: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
});

// Projects Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  technologes: { type: Array, required: true },
});


const TechnologiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const CertificationShema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});



// ✅ Export all models (ESM style)
export const Intro = mongoose.model("intros", introSchema);
export const About = mongoose.model("abouts", aboutSchema);
export const Expriance = mongoose.model("experiance", exprienceSchema);
export const Projects = mongoose.model("projects", projectSchema);
export const Technologes = mongoose.model("technologis", TechnologiSchema);
export const Certifications = mongoose.model("certifications", CertificationShema);


