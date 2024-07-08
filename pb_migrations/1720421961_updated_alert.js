/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzet5gxu",
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
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  // remove
  collection.schema.removeField("lzet5gxu")

  return dao.saveCollection(collection)
})
