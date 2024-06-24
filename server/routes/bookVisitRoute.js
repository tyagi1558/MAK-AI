import express from "express";
import { createBookingVisit,getAllBookVisit,updateBookVisit } from "../controllers/bookVisitCntrl.js";
const router = express.Router();

router.post("/bookVisit", createBookingVisit)
router.post("/allBookings", getAllBookVisit);
router.put("/edit/:id", updateBookVisit)
export {router as bookVisitRoute}