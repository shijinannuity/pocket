/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxndntll",
    "name": "app_id",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxndntll",
    "name": "app_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
