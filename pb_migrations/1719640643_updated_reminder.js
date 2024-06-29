/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7vqq3df",
    "name": "is_not_deleted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7vqq3df",
    "name": "is_deleted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
