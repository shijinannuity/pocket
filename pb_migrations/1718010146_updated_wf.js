/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("slzo5jp7axvaygf")

  collection.options = {
    "query": "select id,wfname,user_id,description,isactive,updated from workflow ORDER by -workflow.updated  & workflow.isactive!=TRUE "
  }

  // remove
  collection.schema.removeField("5gvtcg64")

  // remove
  collection.schema.removeField("nwqd3juu")

  // remove
  collection.schema.removeField("rycer43l")

  // remove
  collection.schema.removeField("hqaeifv1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wi6ms0g9",
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
    "id": "7j5gxzph",
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
    "id": "eii40ysu",
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
    "id": "fxrm4gp4",
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
    "query": "select id,wfname,user_id,description,isactive,updated from workflow ORDER by -workflow.updated  & workflow.isactive!=TRUE DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5gvtcg64",
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
    "id": "nwqd3juu",
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
    "id": "rycer43l",
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
    "id": "hqaeifv1",
    "name": "isactive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("wi6ms0g9")

  // remove
  collection.schema.removeField("7j5gxzph")

  // remove
  collection.schema.removeField("eii40ysu")

  // remove
  collection.schema.removeField("fxrm4gp4")

  return dao.saveCollection(collection)
})
