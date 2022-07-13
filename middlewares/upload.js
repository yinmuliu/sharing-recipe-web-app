// CONFIGURE MULTER AND CLOUDINARY, EXPORT THEM TO OTHER ROUTER/CONTROLLER
require('dotenv').config()

const multer = require('multer')
const cloudinary = require('cloudinary').v2
const CloudiaryStorage = require('multer-storage-cloudinary').CloudinaryStorage

cloudinary.config()

const upload = multer({
    storage: new CloudiaryStorage({
        cloudinary: cloudinary,
        params: async (req, file) => {
            return {
                folder: 'Sharing-Recipe-Web-App'
            }
        }
    })
})

module.exports = upload