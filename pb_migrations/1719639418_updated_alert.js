/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdyqv0tg",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("565u0nuqr7pzxcf")

  // remove
  collection.schema.removeField("zdyqv0tg")

  return dao.saveCollection(collection)
})
