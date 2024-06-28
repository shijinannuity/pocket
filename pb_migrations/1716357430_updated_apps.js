/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  // remove
  collection.schema.removeField("7f3pwxnr")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7f3pwxnr",
    "name": "app_id",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("mxndntll")

  return dao.saveCollection(collection)
})
