/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vf93pjsq64ene6f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mppt4wc3",
    "name": "filename",
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
  const collection = dao.findCollectionByNameOrId("vf93pjsq64ene6f")

  // remove
  collection.schema.removeField("mppt4wc3")

  return dao.saveCollection(collection)
})
