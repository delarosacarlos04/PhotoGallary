const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/' );
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);

  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

let Image = require('../models/image.model');





router.route('/').get((req, res) => {
  Image.find()
    .then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post( upload.single('imagePhoto') ,(req, res) => {
  console.log(req.file);

  const photo = req.file.originalname;
  const description = req.body.description;
  const username = req.body.username;
  const newImage = new Image({
    photo,
    description,
    username
  });

  newImage.save()
    .then(() => res.json('Image added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').delete((req, res) => {
  Image.findByIdAndDelete(req.params.id)
    .then(() => res.json('Image deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Image.findById(req.params.id)
    .then(exercise => {
      image.photo = req.body.photo;
      image.description = req.body.description;
      image.username = req.body.username;
      exercise.save()
        .then(() => res.json('Image updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;