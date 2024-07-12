/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u5i8bb3z0mlln6b")

  collection.name = "u_gb_company"

  // remove
  collection.schema.removeField("ikymlkot")

  // remove
  collection.schema.removeField("ixirsycq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n17ww29b",
    "name": "company",
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
    "id": "n0pdw3u1",
    "name": "names",
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
  const collection = dao.findCollectionByNameOrId("u5i8bb3z0mlln6b")

  collection.name = "ddff"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ikymlkot",
    "name": "company",
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
    "id": "ixirsycq",
    "name": "names",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("n17ww29b")

  // remove
  collection.schema.removeField("n0pdw3u1")

  return dao.saveCollection(collection)
})
