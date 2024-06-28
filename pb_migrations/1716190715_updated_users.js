/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // remove
  collection.schema.removeField("oophnfqg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vukyql0e",
    "name": "apps",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "65s1fxbgy45qrki",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oophnfqg",
    "name": "apps",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 9,
      "values": [
        "a",
        "B",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i"
      ]
    }
  }))

  // remove
  collection.schema.removeField("vukyql0e")

  return dao.saveCollection(collection)
})
