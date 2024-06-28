/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p4439wgymqa3b9x")

  // remove
  collection.schema.removeField("yhmzhuic")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9bd0jsmt",
    "name": "triggdatetime",
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
  const collection = dao.findCollectionByNameOrId("p4439wgymqa3b9x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhmzhuic",
    "name": "duedate",
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
  collection.schema.removeField("9bd0jsmt")

  return dao.saveCollection(collection)
})
