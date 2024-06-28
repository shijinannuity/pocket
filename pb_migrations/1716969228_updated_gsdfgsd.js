/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqknkmak1nz01nb")

  collection.options = {
    "query": "SELECT workflow.id,workflow.wfname,(SELECT workflow_app.app from workflow_app where workflow_app.wf_id=workflow.id) as apps from workflow WHERE workflow.user_id=\"v3wafp53tt1o9nh\"\n"
  }

  // remove
  collection.schema.removeField("9ffasmjz")

  // remove
  collection.schema.removeField("gywlde7r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbxpzktd",
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
    "id": "zye4qcde",
    "name": "apps",
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
  const collection = dao.findCollectionByNameOrId("wqknkmak1nz01nb")

  collection.options = {
    "query": "SELECT workflow.id,workflow.wfname,(SELECT workflow_app.app from workflow_app where workflow_app.wf_id=workflow.id) as apps from workflow WHERE workflow.user_id=\"njg9bhnnlo5ymnd\"\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ffasmjz",
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
    "id": "gywlde7r",
    "name": "apps",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("zbxpzktd")

  // remove
  collection.schema.removeField("zye4qcde")

  return dao.saveCollection(collection)
})
