/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "with aaaa as (SELECT app_name,(ROW_NUMBER() OVER(ORDER by created DESC)) as id from app_health)\nSELECT id,app_name from aaaa "
  }

  // remove
  collection.schema.removeField("jg49colo")

  // remove
  collection.schema.removeField("dhxo60ts")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hxc9k1rd",
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
    "query": "with aaaa as (SELECT app_name,id,(ROW_NUMBER() OVER(ORDER by created DESC)) as row_number from app_health)\nSELECT id,row_number,app_name from aaaa "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jg49colo",
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
    "id": "dhxo60ts",
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
  collection.schema.removeField("hxc9k1rd")

  return dao.saveCollection(collection)
})
