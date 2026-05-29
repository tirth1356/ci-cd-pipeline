const path = require('path');

const home = (req, res) => {
    res.sendFile(path.resolve() + '/source/pages/home.html');
};

const getTodayDate = (req, res) => {
    const d = new Date();
    res.json({ today: `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getUTCFullYear()}` });
};

const getMonthsName = (req, res) => {
    res.json({
        1: 'January', 2: 'February', 3: 'March', 4: 'April',
        5: 'May', 6: 'June', 7: 'July', 8: 'August',
        9: 'September', 10: 'October', 11: 'November', 12: 'December'
    });
};

const getPeople = (req, res) => {
    res.json([
        { FirstName: 'Yann', LastName: 'Mulonda', title: 'Software Engineer' },
        { FirstName: 'Bernard', LastName: 'Ng', title: 'Software Developer' },
        { FirstName: 'Clerc', LastName: 'Kapema', title: 'Web Developer' },
        { FirstName: 'Gloire', LastName: 'Kafwalubi', title: 'Web Developer' }
    ]);
};

module.exports = { home, getTodayDate, getMonthsName, getPeople };
