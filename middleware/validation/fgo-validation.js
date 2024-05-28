const Joi = require('joi');
const ClientError = require('../../errors/ClientError');

const schema = Joi.object({
    name: Joi.string()
        .min(3),
    class: Joi.string()
        .required(),
    npType: Joi.string()
        .required(),
    illustratorId: Joi.string()
        .required(),
});

const validate = (req, res, next) => {
    try {
        const { error } = schema.validate(req.body);

        if (error) {
            throw new ClientError(error.message);
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = validate;