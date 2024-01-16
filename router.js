const express = require('express');
const User = require('./user');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html')
})

router.get('/create', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})


router.post('/create-finish', async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });

    try {
        const savedUser = await user.save();
        console.log('User saved:', savedUser);
        res.send('User saved successfully!');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user');
    }
});

module.exports = router;