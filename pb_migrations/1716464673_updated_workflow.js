/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k4aqc9j77xx9p02")

  // remove
  collection.schema.removeField("b1mtqc9h")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k4aqc9j77xx9p02")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b1mtqc9h",
    "name": "app",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "65s1fxbgy45qrki",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
