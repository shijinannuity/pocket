/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // remove
  collection.schema.removeField("5tmdpg0h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xavquwhz",
    "name": "isrepeating",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("09zimh2vxvjfnjm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5tmdpg0h",
    "name": "isrepeating",
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
  collection.schema.removeField("xavquwhz")

  return dao.saveCollection(collection)
})
