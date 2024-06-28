/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukfy3zn0z7f0c5g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwbxe8ta",
    "name": "email",
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
  const collection = dao.findCollectionByNameOrId("ukfy3zn0z7f0c5g")

  // remove
  collection.schema.removeField("dwbxe8ta")

  return dao.saveCollection(collection)
})
