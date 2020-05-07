'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/recipes/{recipeId}/comments',
    options: {
        tags: ['api'],
        validate: {
            params: Joi.object({
                recipeId: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { recipeId } = request.params;
            const { commentService } = request.services();

            const comments = await commentService.browse({ recipe_id: recipeId });

            return comments;
        }
    }
});
