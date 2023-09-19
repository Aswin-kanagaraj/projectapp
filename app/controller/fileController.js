const multer = require('multer');
const fs = require('fs');
const path = require('path');
const Myfile = require('../models/blogFile');
const { getFileSize } = require('../helpers/fileHelper');


exports.getFileId = (async (req, res) => {
  try {
    const { id } = req.params;
    const file = await Myfile.findById(id);
    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }
    const filePath = file.file;
    const fileName = path.basename(filePath);
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error(`Error downloading file ${filePath}:`, err);
        res.status(500).json({ message: 'Error downloading file' });
      }
    });
  } catch (err) {
    console.error('Error downloading file:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

exports.getFile =( async (req, res) => {
  try {
    const files = await Myfile.find();
    res.status(200).send(files)
    // const result = files.map((file) => ({
    //   id: file._id,
    //   fileName: path.basename(file.file),
    //   size: getFileSize(file.file),
    //   uploadDate: file._id.getTimestamp()
    // }));
    // res.json(result);
  } catch (err) {
    console.error('Error getting files:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

exports.postFile =( async (req, res) => {
  try {
    const { name, email , description,description1,description2 } = req.body;
    console.log(req.file);
    const file = new Myfile({ name, email, description,description1,description2,file: req.file.path });
    await file.save();
    res.json(file);
  } catch (err) {
    console.error('Error saving file:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

exports.deleteFile =( async (req, res) => {
  try {
    const { id } = req.params;
    const file = await Myfile.findById(id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const filePath = file.file;

    fs.unlink(filePath, async (err) => {
      if (err) {
        console.error(`Error deleting file ${filePath}:`, err);
        return res.status(500).json({ message: 'Error deleting file' });
      }

      await Myfile.findOneAndDelete({ _id: id });
      res.json({ message: 'File deleted successfully' });
    });
  } catch (err) {
    console.error('Error deleting file:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
