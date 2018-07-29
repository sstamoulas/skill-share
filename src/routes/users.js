//Here is where we declare the modules and shit we will need
const express = require('express')
const cors = require('cors')

//import the controllers and middleware
const { usersController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

const corsOptions = {
  origin: 'https://radiant-dusk-91801.herokuapp.com/',
  optionsSuccessStatus: 200
}

//get all users
router.get('/', cors(corsOptions), catchErrors(usersController.index))

//make a new boy
router.post('/', cors(corsOptions), catchErrors(usersController.store))

//see one boy
router.get('/:id', cors(corsOptions), catchErrors(usersController.show))

//get rid of a boy
router.delete('/:id', cors(corsOptions), catchErrors(usersController.delete))

//update a boy
router.put('/:id', cors(corsOptions), catchErrors(usersController.update))

module.exports = router