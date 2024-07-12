/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gio8f86ojzi6d")

  // remove
  collection.schema.removeField("grqp8joc")

  // remove
  collection.schema.removeField("8m5frcrn")

  // remove
  collection.schema.removeField("v3ti8mec")

  // remove
  collection.schema.removeField("ilssfkuc")

  // remove
  collection.schema.removeField("g7yfox8k")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gio8f86ojzi6d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grqp8joc",
    "name": "server_connected",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8m5frcrn",
    "name": "server_disconnected",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v3ti8mec",
    "name": "browser_res",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilssfkuc",
    "name": "pixel_ratio",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g7yfox8k",
    "name": "browser_connected",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
