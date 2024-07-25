/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xh5mgmkb",
    "name": "data_id",
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
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xh5mgmkb",
    "name": "newid",
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
})
