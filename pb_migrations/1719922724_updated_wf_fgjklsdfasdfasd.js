/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("38qwc5b58jkfxtv")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    wf.id as wfid,\n    wf.wfname,\n    (\n        SELECT json_group_array(\n                   json_object(\n                       'id', workflow_app.id, \n                       'app_order', workflow_app.app_order, \n                       'app', ( SELECT\n                   json_object('table_id',apps.id,'app_id',apps.app_id,'name',apps.name,'logo',apps.logo,'internalurl',apps.internalurl,'internalport',apps.internalport,'company_id',apps.company_id  ) FROM apps WHERE apps.id = workflow_app.app)\n                   )\n               )\n        FROM workflow_app\n        WHERE workflow_app.wf_id = wf.id\n    ) as wfapps \nFROM \n    workflow as wf\nWHERE \n    wf.user_id = '3q8gebiwxes5hxo';"
  }

  // remove
  collection.schema.removeField("wkxcnyhn")

  // remove
  collection.schema.removeField("h38un3s3")

  // remove
  collection.schema.removeField("rfg1q3ip")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k9nuw5zw",
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
    "id": "qfnc47oy",
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
    "id": "sjdhgaog",
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
    "query": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    wf.id as wfid,\n    wf.wfname,\n    (\n        SELECT json_group_array(\n                   json_object(\n                       'id', workflow_app.id, \n                       'app_order', workflow_app.app_order, \n                       'app', (SELECT * FROM apps WHERE apps.id = workflow_app.app)\n                   )\n               )\n        FROM workflow_app\n        WHERE workflow_app.wf_id = wf.id\n    ) as wfapps \nFROM \n    workflow as wf\nWHERE \n    wf.user_id = '3q8gebiwxes5hxo';"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkxcnyhn",
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
    "id": "h38un3s3",
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
    "id": "rfg1q3ip",
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
  collection.schema.removeField("k9nuw5zw")

  // remove
  collection.schema.removeField("qfnc47oy")

  // remove
  collection.schema.removeField("sjdhgaog")

  return dao.saveCollection(collection)
})
