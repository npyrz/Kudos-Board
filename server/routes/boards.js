const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


// DISPLAYING ALL THE BOARDS
router.get('/boards', async (req, res) => {
    const { q } = req.query;
    
    try {
        let boards;
        if (q != '') {
            boards = await prisma.boards.findMany({
                where: {
                    title: {
                        contains: q,
                    },
                },
            });
        } else {
            boards = await prisma.boards.findMany()
        }
        res.json(boards)
    } catch (error) {
        console.error("Error fetching boards:", error)
        res.status(500).json({ error: "Something went wrong while fetching boards." })
    }
})

// ADDING A NEW BOARD 
router.post('/boards', async (req, res) => {
    const { title, category, author } = req.body;
    try {
        const newBoard = await prisma.boards.create({
            data: {
                title,
                category, 
                author
            }
        })
        res.status(201).json(newBoard)
    } catch (error) {
        console.error("Error creating board:", error)
        res.status(500).json({ error: "Something went wrong while creating the board." })
    }
});

// UPDATING A SPECFIC BOARD <- UPDATING THE BOARDS CARD
router.put('/boards:id', async (req, res) => {
});


// DELETING A SPECIFIC BOARD
router.delete('/boards/:id', async (req, res) => {
    const boardId = parseInt(req.params.id)

    try {
        const board = await prisma.boards.findUnique({
            where: { id: boardId }
        })

        if (!board) {
            return res.status(404).json({ error: "Board not found" })
        }

        await prisma.boards.delete({
            where: { id: boardId }
        })

        res.json({ message: "Board deleted successfully" })
    } catch (error) {
        console.error("Error deleting board:", error)
        res.status(500).json({ error: "Something went wrong while deleting the board." })
    }
})


module.exports = router