/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("32om4nbzac8k70l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfqlcicp",
    "name": "profile_pic",
    "type": "url",
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
  const collection = dao.findCollectionByNameOrId("32om4nbzac8k70l")

  // remove
  collection.schema.removeField("sfqlcicp")

  return dao.saveCollection(collection)
})
