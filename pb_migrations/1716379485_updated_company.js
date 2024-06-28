/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgt0nr3n4wtdqd8")

  // remove
  collection.schema.removeField("wmchdwpo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulc1ypyv",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgt0nr3n4wtdqd8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmchdwpo",
    "name": "user_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("ulc1ypyv")

  return dao.saveCollection(collection)
})
