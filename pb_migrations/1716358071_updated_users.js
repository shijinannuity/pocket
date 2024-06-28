/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qpekaldz",
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
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // remove
  collection.schema.removeField("qpekaldz")

  return dao.saveCollection(collection)
})
