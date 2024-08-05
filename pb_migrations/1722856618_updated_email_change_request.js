/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqvlb5cy",
    "name": "approval",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Rejected",
        "Approved"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqvlb5cy",
    "name": "approval",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "rejected",
        "approved"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
