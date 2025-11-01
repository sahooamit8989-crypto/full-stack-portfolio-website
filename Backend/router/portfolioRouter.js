import express from 'express';
import {   addIntro, getIntro, addAbout, getAbout, deleteAbout, deleteIntro, addProject, getProjects, deleteProject, addExperience, getExperiences, deleteExperience, addTechnology, getTechnologies, deleteTechnology, addCertification, getCertifications, deleteCertification } from '../controller/protfolioController.js';

const protfolioRouter=express.Router();

protfolioRouter.post('/intro',addIntro)
protfolioRouter.get("/intro", getIntro);
protfolioRouter.delete('/intro/:id',deleteIntro)

protfolioRouter.post('/about',addAbout)
protfolioRouter.get('/about',getAbout)
protfolioRouter.delete('/about/:id',deleteAbout)

protfolioRouter.post('/project',addProject)
protfolioRouter.get('/project',getProjects)
protfolioRouter.delete('/project/:id',deleteProject)


protfolioRouter.post('/experience',addExperience)
protfolioRouter.get('/experience',getExperiences)
protfolioRouter.delete('/experience/:id',deleteExperience)


protfolioRouter.post('/certification',addCertification)
protfolioRouter.get('/certification',getCertifications)
protfolioRouter.delete('/certification/:id',deleteCertification)


protfolioRouter.post('/technologie',addTechnology)
protfolioRouter.get('/technologie',getTechnologies)
protfolioRouter.delete('/technologie/:id',deleteTechnology)

export default protfolioRouter

