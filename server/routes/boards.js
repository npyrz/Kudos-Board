const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

// DISPLAYING ALL THE BOARDS | SEARCHING FOR BOARDS | GETTING BOARDS BASED OFF TAGS
router.get('/boards', async (req, res) => {
    const { q, c } = req.query;
    
    try {
        let boards;

        if (c === 'recent') {
            boards = await prisma.boards.findMany({
                orderBy: {
                    id: 'desc'
                },
                take: 6
            });
        } else if (q || c) {
            boards = await prisma.boards.findMany({
                where: {
                    ...(q && {
                        title: {
                        contains: q,
                        mode: 'insensitive'
                        }
                    }),
                    ...(c && {
                        category: c,
                    })
                }
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
    const boardId = parseInt(req.params.id)

    try {
        const board = await prisma.id.findUnique({
            where: {
                id: boardId
            }
        })

        if (board) {
            res.json(pet)
        } else {
            res.status(404).send("Board not found")
        }
    } catch (error) {
        console.error("Error fetching board:", error)
        res.status(500).json({error: "Something went wrong while trying to fethch the board"})
    }
    
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