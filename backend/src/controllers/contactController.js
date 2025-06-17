const { Contact } = require('../models');

const contactController = {
  // Create a new contact message
  async create(req, res) {
    try {
      const { name, email, subject, message } = req.body;
      
      const contact = await Contact.create({
        name,
        email,
        subject,
        message
      });

      return res.status(201).json({
        success: true,
        message: 'Message sent successfully',
        data: contact
      });
    } catch (error) {
      console.error('Error creating contact:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send message',
        error: error.message
      });
    }
  },

  // Get all contact messages (for admin panel)
  async getAll(req, res) {
    try {
      const contacts = await Contact.findAll({
        order: [['createdAt', 'DESC']]
      });

      return res.status(200).json({
        success: true,
        data: contacts
      });
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch messages',
        error: error.message
      });
    }
  },

  // Update contact message status
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const contact = await Contact.findByPk(id);
      
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact message not found'
        });
      }

      contact.status = status;
      await contact.save();

      return res.status(200).json({
        success: true,
        message: 'Status updated successfully',
        data: contact
      });
    } catch (error) {
      console.error('Error updating contact status:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to update status',
        error: error.message
      });
    }
  }
};

module.exports = contactController;
