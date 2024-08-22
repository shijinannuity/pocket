/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,STRFTIME('%Y-%m-%d',datetime) as date,STRFTIME('%H',datetime) as hour,app_name,app_status from app_health \n\n\n\n"
  }

  // remove
  collection.schema.removeField("fgn8zeh6")

  // remove
  collection.schema.removeField("cb5nmgyc")

  // remove
  collection.schema.removeField("8f7c3dum")

  // remove
  collection.schema.removeField("v1posh3y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l2hktfta",
    "name": "date",
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
    "id": "7tuoad63",
    "name": "hour",
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
    "id": "xdb8mdrc",
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
    "id": "sqvgzbwq",
    "name": "app_status",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,STRFTIME('%Y-%m-%d',datetime) as date,STRFTIME('%H',datetime) as hour,app_name,app_status from app_health where  STRFTIME('%Y-%m-%d',datetime)='2024-08-08'\n\n\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgn8zeh6",
    "name": "date",
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
    "id": "cb5nmgyc",
    "name": "hour",
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
    "id": "8f7c3dum",
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
    "id": "v1posh3y",
    "name": "app_status",
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

  // remove
  collection.schema.removeField("l2hktfta")

  // remove
  collection.schema.removeField("7tuoad63")

  // remove
  collection.schema.removeField("xdb8mdrc")

  // remove
  collection.schema.removeField("sqvgzbwq")

  return dao.saveCollection(collection)
})
