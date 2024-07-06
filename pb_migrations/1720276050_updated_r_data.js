/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0x3xcmtmvmg6bxf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6saectd",
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
  const collection = dao.findCollectionByNameOrId("0x3xcmtmvmg6bxf")

  // remove
  collection.schema.removeField("u6saectd")

  return dao.saveCollection(collection)
})
