/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "with aaaa as (SELECT (ROW_NUMBER() OVER()) as id,app_name from app_health ORDER by id DESC)\nSELECT id,app_name from aaaa WHERE id=2"
  }

  // remove
  collection.schema.removeField("eosqpe7a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwu6qutx",
    "name": "app_name",
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
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "with aaaa as (SELECT (ROW_NUMBER() OVER()) as id,app_name from app_health)\nSELECT id,app_name from aaaa WHERE id=2"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eosqpe7a",
    "name": "app_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("wwu6qutx")

  return dao.saveCollection(collection)
})
