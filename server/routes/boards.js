const express = require('express')
const { PrismaClient } = require('./../generated/prisma')
const router = express.Router()
const prisma = new PrismaClient();


// DISPLAYING ALL THE BOARDS
router.get('/boards', async (req, res) => {

});

// ADDING A NEW BOARD 
router.post('/boards', async (req, res) => {

});

// UPDATING A SPECFIC BOARD <- UPDATING THE BOARDS CARD
router.put('/boards:id', async (req, res) => {

});

// DELETING A SPECIFIC BOARD
router.delete('/boards:id', async (req, res) => {

});