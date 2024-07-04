/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // remove
  collection.schema.removeField("1vnvyruc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btx0zr08",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nydk0rjscjlvueh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vnvyruc",
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

  // remove
  collection.schema.removeField("btx0zr08")

  return dao.saveCollection(collection)
})
