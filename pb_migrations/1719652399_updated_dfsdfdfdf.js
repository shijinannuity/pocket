/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oj07cck3cgnbtk9")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,alert.triggdate,alert.active from  alert  WHERE reminder = \"7m4hrbw4wjoxmy6\" AND DATE(alert.triggdate) <> \"2024-06-20\""
  }

  // remove
  collection.schema.removeField("sswtsbug")

  // remove
  collection.schema.removeField("xfgrhvzl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djkplmbh",
    "name": "triggdate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pin4gxzy",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oj07cck3cgnbtk9")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,alert.triggdate,alert.active from  alert  WHERE reminder = \"7m4hrbw4wjoxmy6\" AND triggdate <> \"2024-06-20\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sswtsbug",
    "name": "triggdate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfgrhvzl",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("djkplmbh")

  // remove
  collection.schema.removeField("pin4gxzy")

  return dao.saveCollection(collection)
})
