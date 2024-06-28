/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  // remove
  collection.schema.removeField("rfswu7ws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tdu9jleg",
    "name": "company_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zgt0nr3n4wtdqd8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65s1fxbgy45qrki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfswu7ws",
    "name": "company_id",
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
  collection.schema.removeField("tdu9jleg")

  return dao.saveCollection(collection)
})
