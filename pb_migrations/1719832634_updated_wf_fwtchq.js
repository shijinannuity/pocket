/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p37e9rf927go5wc")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname,wfa.id as wfaid,wfa.app_order from workflow as wf join workflow_app as wfa "
  }

  // remove
  collection.schema.removeField("djdrdgpi")

  // remove
  collection.schema.removeField("bhov12ed")

  // remove
  collection.schema.removeField("ceumgiv8")

  // remove
  collection.schema.removeField("fuxb4cv1")

  // remove
  collection.schema.removeField("bjwltu9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qobpkwo9",
    "name": "wfid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k4aqc9j77xx9p02",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6rcnlq1",
    "name": "wfname",
    "type": "text",
    "required": false,
    "presentable": true,
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
    "id": "fgqnmjqq",
    "name": "wfaid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "odjq6hyswwnkalf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cucluwki",
    "name": "app_order",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p37e9rf927go5wc")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname,wfa.id as wfaid,wfa.app,wfa.app_order from workflow as wf join workflow_app as wfa "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djdrdgpi",
    "name": "wfid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k4aqc9j77xx9p02",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhov12ed",
    "name": "wfname",
    "type": "text",
    "required": false,
    "presentable": true,
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
    "id": "ceumgiv8",
    "name": "wfaid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "odjq6hyswwnkalf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fuxb4cv1",
    "name": "app",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "65s1fxbgy45qrki",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bjwltu9f",
    "name": "app_order",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("qobpkwo9")

  // remove
  collection.schema.removeField("j6rcnlq1")

  // remove
  collection.schema.removeField("fgqnmjqq")

  // remove
  collection.schema.removeField("cucluwki")

  return dao.saveCollection(collection)
})
