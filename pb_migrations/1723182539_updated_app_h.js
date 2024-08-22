/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,app_name,json_object('0',(SELECT app_status from app_health as a where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='0' AND a.app_name=p.app_name) ) as d from app_health as p GROUP by p.app_name"
  }

  // remove
  collection.schema.removeField("gkoedz0n")

  // remove
  collection.schema.removeField("7hrxpjqd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jt7qwadp",
    "name": "app_name",
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
    "id": "rer7tv5c",
    "name": "d",
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
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,app_name,json_object('0',(SELECT app_status from app_health where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='0')) as d from app_health"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkoedz0n",
    "name": "app_name",
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
    "id": "7hrxpjqd",
    "name": "d",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("jt7qwadp")

  // remove
  collection.schema.removeField("rer7tv5c")

  return dao.saveCollection(collection)
})
