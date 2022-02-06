import express from 'express'
import GameListingModel from '../models/gameListing'

const gameListingsRouter = express.Router();

gameListingsRouter.get('/', async (_, res) => {
  try {
    const gameListings = await GameListingModel.find()
    res.send({listings: gameListings})
  } catch(err) {
    console.log(`Error occurred while retrieving game listings: ${err}`)
    res.sendStatus(500)
  }
})

gameListingsRouter.post('/', async (req, res) => {
  try {
    const gameListing = new GameListingModel(req.body)
    await gameListing.save()

    res.sendStatus(201)
  } catch(err: any) {
    if (err.name === "ValidationError") {
      res.status(400).send(err)
    } else {
      console.log(`Error occurred while creating game listings: ${err}`)
      res.sendStatus(500)
    }

  }
})

export default gameListingsRouter