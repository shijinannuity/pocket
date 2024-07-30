/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgt0nr3n4wtdqd8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6of8roya",
    "name": "viewbanner",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgt0nr3n4wtdqd8")

  // remove
  collection.schema.removeField("6of8roya")

  return dao.saveCollection(collection)
})
