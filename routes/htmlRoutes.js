const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile();
});

router.get('*', (req, res) => {
    res.sendFile();
});
  
module.exports = router; 