/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p59w4sej4aswrhx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oophnfqg",
    "name": "apps",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
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

  return dao.saveCollection(collection)
})
