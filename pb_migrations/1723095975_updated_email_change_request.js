/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // remove
  collection.schema.removeField("kurwet5r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "53clcmdo",
    "name": "new_email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqvlb5cy",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Rejected",
        "Approved"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kurwet5r",
    "name": "approve",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "53clcmdo",
    "name": "newemail",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqvlb5cy",
    "name": "approval",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Rejected",
        "Approved"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
