/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dgnld0j9mzjr49o")

  collection.options = {
    "query": "SELECT workflow_app.id, workflow_app.wf_id,workflow_app.app,workflow_app.app_order from workflow_app WHERE workflow_app.wf_id in (SELECT id FROM workflow WHERE workflow.user_id=\"njg9bhnnlo5ymnd\");"
  }

  // remove
  collection.schema.removeField("wis52qxp")

  // remove
  collection.schema.removeField("wz2mpeu2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twoi8oxb",
    "name": "wf_id",
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
    "id": "kfjqxsb2",
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
    "id": "rf8u4x7j",
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
  const collection = dao.findCollectionByNameOrId("dgnld0j9mzjr49o")

  collection.options = {
    "query": "SELECT workflow_app.id,workflow_app.app,workflow_app.app_order from workflow_app WHERE workflow_app.wf_id in (SELECT id FROM workflow WHERE workflow.user_id=\"njg9bhnnlo5ymnd\");"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wis52qxp",
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
    "id": "wz2mpeu2",
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
  collection.schema.removeField("twoi8oxb")

  // remove
  collection.schema.removeField("kfjqxsb2")

  // remove
  collection.schema.removeField("rf8u4x7j")

  return dao.saveCollection(collection)
})
