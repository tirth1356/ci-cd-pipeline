const { home, getTodayDate, getMonthsName, getPeople } = require('../controllers/controller.js');

const routes = (app) => {
    app.route('/').get(home);
    app.route('/home').get(home);
    app.route('/today').get(getTodayDate);
    app.route('/months').get(getMonthsName);
    app.route('/people').get(getPeople);
};

module.exports = routes;
