/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e113lqcmj51dtyg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dx6ao705",
    "name": "data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e113lqcmj51dtyg")

  // remove
  collection.schema.removeField("dx6ao705")

  return dao.saveCollection(collection)
})
