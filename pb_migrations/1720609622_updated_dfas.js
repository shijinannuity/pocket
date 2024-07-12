/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.name = "no_log_gb_company"

  // remove
  collection.schema.removeField("zhcf93dz")

  // remove
  collection.schema.removeField("qfu9cnbr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3dmt41w",
    "name": "names",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a0ckw4ni",
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
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.name = "dfas"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhcf93dz",
    "name": "names",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfu9cnbr",
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
  collection.schema.removeField("f3dmt41w")

  // remove
  collection.schema.removeField("a0ckw4ni")

  return dao.saveCollection(collection)
})
