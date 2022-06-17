const dotenv = require('dotenv');
const dnsimple = require('../api/api');

dotenv.config();

let accountId = process.env.ACCOUNT_ID;
let contactId = process.env.CONTACT_ID;

const domainController = {
  whoami: (req, res) => {
    dnsimple.identity.whoami().then(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error),
    );
  },

  checkDomain: (req, res) => {
    // Check for domain availability
    const { domain } = req.body;
    dnsimple.registrar
      .checkDomain(accountId, domain)
      .then((response) => {
        res.send(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  },

  getDomain: (req, res) => {
    const { domain } = req.body;

    dnsimple.domains.getDomain(accountId, domain).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      },
    );
  },

  registerContact: (req, res) => {
    const contact = {
      email: 'isiagigeofrey0@gmail.com',
      first_name: 'Geofrey',
      last_name: 'Isiagi',
      address1: 'old kampala',
      city: 'Kampala',
      state_province: 'FL',
      postal_code: '11111',
      country: 'US',
      phone: '+256 777 963 365',
    };
    // Register a domain
    dnsimple.contacts
      .createContact(accountId, contact)
      .then((response) => console.log(response.data));
  },

  getContact: async (req, res) => {
    let response = await dnsimple.contacts.listContacts(accountId);
    console.log(response.data);
  },

  registerDomain: async (req, res) => {
    const { domain } = req.body;

    const attributes = {
      registrant_id: contactId,
      whois_privacy: true,
      auto_renew: true,
    };

    try {
      let response = await dnsimple.registrar.registerDomain(
        accountId,
        domain,
        attributes,
      );

      res.status(200).json({ message: response.data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createDomain: (req, res) => {
    // Create a domain
    dnsimple.domains.createDomain(accountId, { name: 'isiagi.com' }).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      },
    );
  },
};

module.exports = domainController;
