import express from "express";
const router = express.Router();
import { queries } from "./queries";
const { allMovs, specificMov, specificUser,editOperation,newOperation, calculate, deleteMov, filter } = queries;
router.get("/movements/", allMovs);
router.get("/movement/:id", specificMov);
router.get("/user/", specificUser);
router.get("/calculate/:type", calculate);
router.get("/filter/:type", filter);
router.get('/delete/movement/:id', deleteMov)
router.get("/edit/movement/:title&:concept&:mount&:date&:id", editOperation);
router.get("/new/movement/:title&:concept&:mount&:type&:user&:date", newOperation);

export { router as consults };
