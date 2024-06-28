/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o8l5j2lkidxl2f2")

  // remove
  collection.schema.removeField("2esvth4k")

  // remove
  collection.schema.removeField("uyozhnip")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d8weemo4",
    "name": "app",
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
  const collection = dao.findCollectionByNameOrId("o8l5j2lkidxl2f2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2esvth4k",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uyozhnip",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("d8weemo4")

  return dao.saveCollection(collection)
})
