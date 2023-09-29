import { NextFunction, Request, Response } from "express";

const firebase = require("../db.ts");
const Game = require("../models/games.ts");
const { getFirestore } = firebase.firestore()

const addGame = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = req.body;
    await getFirestore.collection("games").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error:any) {
    res.status(400).send(error.message);
  }
};

module.exports = {addGame};
