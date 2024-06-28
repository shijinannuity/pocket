/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("slzo5jp7axvaygf")

  collection.options = {
    "query": "select id,wfname,user_id,description,isactive from workflow ORDER by workflow.isactive==TRUE DESC"
  }

  // remove
  collection.schema.removeField("gz6ebpiz")

  // remove
  collection.schema.removeField("igiblvzl")

  // remove
  collection.schema.removeField("uviplqge")

  // remove
  collection.schema.removeField("lmmhcjiu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jp0ndxvg",
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
    "id": "zyt1dsvb",
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
    "id": "bhlfihz4",
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
    "id": "uhvfsodd",
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
    "query": "select id,wfname,user_id,description,isactive from workflow ORDER by workflow.isactive!=TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gz6ebpiz",
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
    "id": "igiblvzl",
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
    "id": "uviplqge",
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
    "id": "lmmhcjiu",
    "name": "isactive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jp0ndxvg")

  // remove
  collection.schema.removeField("zyt1dsvb")

  // remove
  collection.schema.removeField("bhlfihz4")

  // remove
  collection.schema.removeField("uhvfsodd")

  return dao.saveCollection(collection)
})
