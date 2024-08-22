/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "with aaaa as (SELECT app_name,id,(ROW_NUMBER() OVER(ORDER by id)) as row_number from app_health)\nSELECT id,row_number,app_name from aaaa "
  }

  // remove
  collection.schema.removeField("u7m1lela")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bteh832f",
    "name": "row_number",
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
    "id": "yzhmdzow",
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
    "query": "with aaaa as (SELECT app_name,id,(ROW_NUMBER() OVER(ORDER by id)) as row_number from app_health)\nSELECT id,app_name from aaaa "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u7m1lela",
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
  collection.schema.removeField("bteh832f")

  // remove
  collection.schema.removeField("yzhmdzow")

  return dao.saveCollection(collection)
})
