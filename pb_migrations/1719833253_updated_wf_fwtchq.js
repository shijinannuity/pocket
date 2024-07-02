/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p37e9rf927go5wc")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname,wfa.id as wfaid ,wfa.app_order from workflow as wf INNER join workflow_app as wfa"
  }

  // remove
  collection.schema.removeField("uims7w6o")

  // remove
  collection.schema.removeField("dkwcrujx")

  // remove
  collection.schema.removeField("ny0ctkbd")

  // remove
  collection.schema.removeField("b1jm4ys6")

  // remove
  collection.schema.removeField("is30smyw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2q66yma9",
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
    "id": "qtnuz2g8",
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
    "id": "abr7xpg1",
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
    "id": "hvjpngab",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname,wfa.id as wfaid,\n apps.app_id ,wfa.app_order from workflow as wf INNER join workflow_app as wfa Inner JOIN apps"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uims7w6o",
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
    "id": "dkwcrujx",
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
    "id": "ny0ctkbd",
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
    "id": "b1jm4ys6",
    "name": "app_id",
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
    "id": "is30smyw",
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
  collection.schema.removeField("2q66yma9")

  // remove
  collection.schema.removeField("qtnuz2g8")

  // remove
  collection.schema.removeField("abr7xpg1")

  // remove
  collection.schema.removeField("hvjpngab")

  return dao.saveCollection(collection)
})
