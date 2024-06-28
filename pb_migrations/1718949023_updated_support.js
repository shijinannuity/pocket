/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iehzketj",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Opened",
        "Working",
        "Closed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iehzketj",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "opened",
        "working",
        "closed"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
