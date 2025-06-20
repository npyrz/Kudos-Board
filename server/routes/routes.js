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

// GET BOARD INFO PAGE BY ID
router.get('/boards/:id', async (req, res) => {
    const boardId = parseInt(req.params.id)

    try {
        const board = await prisma.boards.findUnique({
            where: {
                id: boardId
            }
        })

        if (board) {
            res.json(board)
        } else {
            res.status(404).send("Board not found")
        }
    } catch (error) {
        console.error("Error fetching board:", error)
        res.status(500).json({error: "Something went wrong while trying to fethch the board"})
    }
});


// UPDATING A SPECFIC BOARD <- UPDATING THE BOARDS CARD
router.put('/boards/:id', async (req, res) => {
    const boardId = parseInt(req.params.id)

    try {
        const board = await prisma.boards.findUnique({
            where: {
                id: boardId
            }
        })

        if (board) {
            res.json(board)
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

router.post('/boards/:id/cards', async (req, res) => {
    const boardId = parseInt(req.params.id);
    const { title, description, img, owner } = req.body;

    try {
    const card = await prisma.cards.create({
    data: {
        title,
        description,
        img,
        owner,
        board_id: boardId
    }
    });
    res.status(201).json(card);
    } catch (error) {
    console.error("Error with making card", error)
    res.status(500).json({ error: "Issue with creating card" })
    }
});

// DISPLAYS ALL THE CARDS IN SPECIFIC BOARD
router.get('/boards/:id/cards', async (req, res) => {
    const boardId = parseInt(req.params.id);
    try {
        const cards = await prisma.cards.findMany({
        where: {
            board_id: boardId
        }
    });
    res.json(cards);
    } catch (err) {
    console.error("Error with fetching cards", err)
    res.status(500).json({ error: "Issue with fetching cards" })
    }
});

router.delete('/cards/:id', async (req, res) => {
    const cardId = parseInt(req.params.id)

    try {
        const card = await prisma.cards.findUnique({
            where: { id: cardId }
        })

        if (!card) {
            return res.status(404).json({ error: "Card not found" })
        }

        await prisma.cards.delete({
            where: { id: cardId }
        })

        res.json({ message: "Card deleted successfully" })
    } catch (error) {
        console.error("Error deleting card:", error)
        res.status(500).json({ error: "Something went wrong while deleting the card." })
    }
})


router.put('/cards/:id/upvote', async (req, res) => {
    const cardId = parseInt(req.params.id);

    try {
        const updateCard = await prisma.cards.update({
            where: {
                id: cardId
            },
            data: {
                upvote: {increment: 1}
            }
        });
        res.join(updateCard);
    }
    catch (error) {
        console.error("Error upvoting the card", error)
        res.status(500).json({error: "issue with incrementing the card"})
    }
})


module.exports = router