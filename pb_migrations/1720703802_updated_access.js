/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8l5j2lkidxl2f2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cl6f2dyb",
    "name": "geolocation",
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
  const collection = dao.findCollectionByNameOrId("o8l5j2lkidxl2f2")

  // remove
  collection.schema.removeField("cl6f2dyb")

  return dao.saveCollection(collection)
})
