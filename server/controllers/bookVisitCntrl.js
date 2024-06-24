import asyncHandler from "express-async-handler";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";
import { prisma } from "../config/prismaConfig.js";

export const createBookingVisit = asyncHandler(async (req, res) => {
  try {
    const lead = await prisma.makData.create({
      data: req.body,
    });
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  });
  

  // function to get all the documents/residencies
// Function to get all booking visits with property names
export const getAllBookVisit = asyncHandler(async (req, res) => {
  try {
    const leads = await prisma.makData.findMany();
    res.status(200).json(leads);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


  // Function to edit a booking visit
  export const updateBookVisit = async (req, res) => {
    try {
      const { id } = req.params;
      const editedValues = req.body;
  
console.log("edit dats ->>>>>>>>>>>>>>>>>>>>>>>", editedValues)

      // Exclude id from the data object
      const { id: _, ...dataWithoutId } = editedValues;
  
      const updatedVisit = await prisma.makData.update({
        where: { id },
        data: dataWithoutId,
      });
  
      res.json(updatedVisit);
    } catch (error) {
      console.error(error);
      console.log(error.stack)
      res.status(500).json({ error: 'An error occurred while updating the visit.' });
    }
  };
