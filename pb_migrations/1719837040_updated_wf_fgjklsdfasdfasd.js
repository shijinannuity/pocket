/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("38qwc5b58jkfxtv")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname,(SELECT workflow_app.id,workflow_app.app_order, (SELECT apps.app_id FROM apps WHERE apps.id = workflow_app.app) as app_id FROM workflow_app WHERE workflow_app.wf_id=wf.id) as wfapps from workflow as wf  WHERE wf.user_id='3q8gebiwxes5hxo'"
  }

  // remove
  collection.schema.removeField("y2mkni4m")

  // remove
  collection.schema.removeField("co1w9tac")

  // remove
  collection.schema.removeField("f1masw4m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8jsxo8ef",
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
    "id": "geerxno8",
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
    "id": "jhuamg5b",
    "name": "wfapps",
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
  const collection = dao.findCollectionByNameOrId("38qwc5b58jkfxtv")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname, (SELECT workflow_app.id,workflow_app.app_order, (SELECT apps.app_id FROM apps WHERE apps.id = workflow_app.app ) as app_id FROM workflow_app WHERE workflow_app.wf_id=wf.id) as wfapps from workflow as wf  WHERE wf.user_id='3q8gebiwxes5hxo'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y2mkni4m",
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
    "id": "co1w9tac",
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
    "id": "f1masw4m",
    "name": "wfapps",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("8jsxo8ef")

  // remove
  collection.schema.removeField("geerxno8")

  // remove
  collection.schema.removeField("jhuamg5b")

  return dao.saveCollection(collection)
})
