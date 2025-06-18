const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

// ADDING A NEW CARD IN A BOARD -> GIVES IT A SPECIFIC ID
router.post('/boards/:id/cards', async (req, res) => {
    
});

// DELETING A SPECIFIC CARD IN A BOARD
router.delete('/boards/:id/cards/:id', async (req, res) => {

});

// DISPLAYS ALL THE CARDS IN SPECIFIC BOARD
router.get('/boards:id/cards/:id', async (req, res) => {

});

// UPDATING A SPECIFIC CARD IN A BOARD
router.put('/boards:id/cards/:id', async (req, res) => {

});