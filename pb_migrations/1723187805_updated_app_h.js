/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr")

  collection.options = {
    "query": "With AppHealth as (SELECT STRFTIME('%Y-%m-%d',datetime) as date,STRFTIME('%H',datetime) as hour,app_name,app_status from app_health)\nSELECT (ROW_NUMBER() OVER()) as id,date,app_name,json_object(\n  '00',(CASE WHEN hour = '00' THEN app_status ELSE NULL END),\n  '12',(CASE WHEN hour = '12' THEN app_status ELSE NULL END),\n  '18',(CASE WHEN hour = '18' THEN app_status ELSE NULL END),\n  '19',(CASE WHEN hour = '19' THEN app_status ELSE NULL END)\n) as data from AppHealth GROUP by app_name\n\n\n\n"
  }

  // remove
  collection.schema.removeField("l2hktfta")

  // remove
  collection.schema.removeField("7tuoad63")

  // remove
  collection.schema.removeField("xdb8mdrc")

  // remove
  collection.schema.removeField("sqvgzbwq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rtj2eus1",
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
    "id": "dlvpa2ay",
    "name": "app_name",
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
    "id": "fhbzjjzz",
    "name": "data",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,STRFTIME('%Y-%m-%d',datetime) as date,STRFTIME('%H',datetime) as hour,app_name,app_status from app_health \n\n\n\n"
  }

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

  // remove
  collection.schema.removeField("rtj2eus1")

  // remove
  collection.schema.removeField("dlvpa2ay")

  // remove
  collection.schema.removeField("fhbzjjzz")

  return dao.saveCollection(collection)
})
