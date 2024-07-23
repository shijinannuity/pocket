/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4meflw6n",
    "name": "whitelist",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybrvepku",
    "name": "blacklist",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vgigvbgk",
    "name": "multiple_login",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gumfofly",
    "name": "geolocation_protection",
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
  collection.schema.removeField("4meflw6n")

  // remove
  collection.schema.removeField("ybrvepku")

  // remove
  collection.schema.removeField("vgigvbgk")

  // remove
  collection.schema.removeField("gumfofly")

  return dao.saveCollection(collection)
})
