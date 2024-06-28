/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trrnwi0c",
    "name": "wfname",
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
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // remove
  collection.schema.removeField("trrnwi0c")

  return dao.saveCollection(collection)
})
