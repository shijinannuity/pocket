/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // remove
  collection.schema.removeField("d3clarlu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "53clcmdo",
    "name": "newemail",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d3clarlu",
    "name": "approved",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("53clcmdo")

  return dao.saveCollection(collection)
})
