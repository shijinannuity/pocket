/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "with aaaa as (SELECT (ROW_NUMBER() OVER()) as id,app_name from app_health order by id desc)\nSELECT id,app_name from aaaa "
  }

  // remove
  collection.schema.removeField("ig9iakuq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmhahvyf",
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
    "query": "with aaaa as (SELECT (ROW_NUMBER() OVER()) as id,app_name from app_health )\nSELECT id,app_name from aaaa "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ig9iakuq",
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
  collection.schema.removeField("tmhahvyf")

  return dao.saveCollection(collection)
})