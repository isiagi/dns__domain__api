const express = require('express');
const {
  whoami,
  checkDomain,
  getDomain,
  registerDomain,
  createDomain,
} = require('../controllers/domainController');

const router = express.Router();

router.route('/whoami').get(whoami);
router.route('/domain').post(checkDomain);
router.route('/getDomain').post(getDomain);
router.route('/register').post(registerDomain);
router.route('/create').post(createDomain);

module.exports = router;
