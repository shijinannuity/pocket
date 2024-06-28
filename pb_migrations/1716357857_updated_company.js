/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgt0nr3n4wtdqd8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smo4oilc",
    "name": "designation",
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
  const collection = dao.findCollectionByNameOrId("zgt0nr3n4wtdqd8")

  // remove
  collection.schema.removeField("smo4oilc")

  return dao.saveCollection(collection)
})
