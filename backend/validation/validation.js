const Joi = require('joi');

const userSchema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
});

const journalValidationSchema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    journalContent: Joi.string().required(),
    author: Joi.string().required(),
});

module.exports = {userSchema, journalValidationSchema}