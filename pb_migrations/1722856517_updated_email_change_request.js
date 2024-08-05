/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // remove
  collection.schema.removeField("bqvlb5cy")

  return dao.saveCollection(collection)
})
