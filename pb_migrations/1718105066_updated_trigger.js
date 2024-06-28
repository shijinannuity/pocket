/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2nq2lbe2f0ua90")

  // remove
  collection.schema.removeField("h5lye4xn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ijpfw1dc",
    "name": "triggerdate",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2nq2lbe2f0ua90")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h5lye4xn",
    "name": "triggerdate",
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

  // remove
  collection.schema.removeField("ijpfw1dc")

  return dao.saveCollection(collection)
})
