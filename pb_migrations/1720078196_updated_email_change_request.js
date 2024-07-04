/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d3clarlu",
    "name": "approved",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d3clarlu",
    "name": "bool",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
