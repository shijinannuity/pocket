/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd")

  collection.listRule = "@request.auth.id!=\"\""
  collection.viewRule = "@request.auth.id!=\"\""

  // remove
  collection.schema.removeField("zvagwpx9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzcvevuh",
    "name": "company",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvagwpx9",
    "name": "company",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("pzcvevuh")

  return dao.saveCollection(collection)
})
