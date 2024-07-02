/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("38qwc5b58jkfxtv")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    wf.id as wfid,\n    wf.wfname,\n    (\n        SELECT json_group_array(\n                   json_object(\n                       'id', workflow_app.id, \n                       'app_order', workflow_app.app_order, \n                       'app_id', (SELECT apps.app_id FROM apps WHERE apps.id = workflow_app.app)\n                   )\n               )\n        FROM workflow_app\n        WHERE workflow_app.wf_id = wf.id\n    ) as wfapps \nFROM \n    workflow as wf\nWHERE \n    wf.user_id = '3q8gebiwxes5hxo';"
  }

  // remove
  collection.schema.removeField("lnsp6jdt")

  // remove
  collection.schema.removeField("1h2hglrv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ghldfyxx",
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
    "id": "tkq69gw8",
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
    "id": "jmpeiibe",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname from workflow as wf  WHERE wf.user_id='3q8gebiwxes5hxo'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnsp6jdt",
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
    "id": "1h2hglrv",
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

  // remove
  collection.schema.removeField("ghldfyxx")

  // remove
  collection.schema.removeField("tkq69gw8")

  // remove
  collection.schema.removeField("jmpeiibe")

  return dao.saveCollection(collection)
})
