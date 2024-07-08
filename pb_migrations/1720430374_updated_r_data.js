/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0x3xcmtmvmg6bxf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "03xu3opy",
    "name": "file",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0x3xcmtmvmg6bxf")

  // remove
  collection.schema.removeField("03xu3opy")

  return dao.saveCollection(collection)
})
