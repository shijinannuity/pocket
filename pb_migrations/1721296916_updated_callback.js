/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibnakxbq",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Resolved"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibnakxbq",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Called"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
