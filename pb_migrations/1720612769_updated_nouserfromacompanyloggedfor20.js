/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("pzcvevuh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdovhdtw",
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

  collection.listRule = "@request.auth.id!=\"\""
  collection.viewRule = "@request.auth.id!=\"\""

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

  // remove
  collection.schema.removeField("cdovhdtw")

  return dao.saveCollection(collection)
})
