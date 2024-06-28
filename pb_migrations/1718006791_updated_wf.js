/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("slzo5jp7axvaygf")

  collection.options = {
    "query": "select id,wfname,user_id,description,isactive from workflow ORDER by workflow.isactive==TRUE & workflow.created DESC "
  }

  // remove
  collection.schema.removeField("3bomsbpy")

  // remove
  collection.schema.removeField("qznqwflq")

  // remove
  collection.schema.removeField("oami5cgg")

  // remove
  collection.schema.removeField("usyo9pyd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wbyxxjqo",
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
    "id": "4cafxnsf",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grc2sepi",
    "name": "description",
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
    "id": "vc08kbhs",
    "name": "isactive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("slzo5jp7axvaygf")

  collection.options = {
    "query": "select id,wfname,user_id,description,isactive from workflow ORDER by workflow.isactive==TRUE & workflow.created "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3bomsbpy",
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
    "id": "qznqwflq",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oami5cgg",
    "name": "description",
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
    "id": "usyo9pyd",
    "name": "isactive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("wbyxxjqo")

  // remove
  collection.schema.removeField("4cafxnsf")

  // remove
  collection.schema.removeField("grc2sepi")

  // remove
  collection.schema.removeField("vc08kbhs")

  return dao.saveCollection(collection)
})
