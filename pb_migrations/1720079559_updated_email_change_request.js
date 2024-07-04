/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // remove
  collection.schema.removeField("3ym6lcqs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "02o7tkf1",
    "name": "user",
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
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ym6lcqs",
    "name": "user_id",
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

  // remove
  collection.schema.removeField("02o7tkf1")

  return dao.saveCollection(collection)
})
