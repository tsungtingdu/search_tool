'use strict';
const faker = require('faker')
const db = require('../models')
const { Comment, Tag } = db

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // create comments
    await queryInterface.bulkInsert('Comments',
      Array.from({ length: 100 }).map(d => ({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        content: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )

    // create tags
    await queryInterface.bulkInsert('Tags',
      Array.from({ length: 20 }).map(d => ({
        name: faker.lorem.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )

    // get comments & tags
    let comments = await Comment.findAll().then(comments => {
      let data = []
      for (let i = 0; i < comments.length; i++) {
        data.push(comments[i].id)
      }
      return data
    })

    let tags = await Tag.findAll().then(tags => {
      let data = []
      for (let i = 0; i < tags.length; i++) {
        data.push(tags[i].id)
      }
      return data
    })

    // create tagmaps
    await queryInterface.bulkInsert('Tagmaps',
      Array.from({ length: 200 }).map(d => ({
        CommentId: faker.random.number({
          min: comments[0],
          max: comments[comments.length - 1]
        }),
        TagId: faker.random.number({
          min: tags[0],
          max: tags[tags.length - 1]
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {})
    await queryInterface.bulkDelete('Tags', null, {})
    await queryInterface.bulkDelete('Tagmaps', null, {})
  }
};
