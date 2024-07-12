/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,name,company from notloggedfor20 GROUP by company"
  }

  // remove
  collection.schema.removeField("e50s4lxy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwzlmexx",
    "name": "name",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4vx5ohny",
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

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,company from notloggedfor20 GROUP BY company"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e50s4lxy",
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
  collection.schema.removeField("lwzlmexx")

  // remove
  collection.schema.removeField("4vx5ohny")

  return dao.saveCollection(collection)
})
