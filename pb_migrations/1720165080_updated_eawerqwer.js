/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1pu5v7g6sukvo5g")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND DATE(al.triggdate)=DATE()"
  }

  // remove
  collection.schema.removeField("kz6djpsl")

  // remove
  collection.schema.removeField("add0hsla")

  // remove
  collection.schema.removeField("rfsg66ef")

  // remove
  collection.schema.removeField("bl38wtfd")

  // remove
  collection.schema.removeField("o4fec7sr")

  // remove
  collection.schema.removeField("7ofnpyet")

  // remove
  collection.schema.removeField("hsiypxhm")

  // remove
  collection.schema.removeField("opj1lo6t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnjtgwj5",
    "name": "type",
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
    "id": "ei6na4zc",
    "name": "title",
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
    "id": "qefipmen",
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
    "id": "cbqehin1",
    "name": "app",
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
    "id": "dcojnhql",
    "name": "triggdate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "85gyvg67",
    "name": "triggtime",
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
    "id": "mlmr3z28",
    "name": "owner",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhrbzc4d",
    "name": "secondary",
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
  const collection = dao.findCollectionByNameOrId("1pu5v7g6sukvo5g")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND DATE(al.triggdate)=DATE() AND TIME(al.triggtime) BETWEEN TIME('now','-30 minutes') AND TIME('now','+5 minutes')"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kz6djpsl",
    "name": "type",
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
    "id": "add0hsla",
    "name": "title",
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
    "id": "rfsg66ef",
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
    "id": "bl38wtfd",
    "name": "app",
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
    "id": "o4fec7sr",
    "name": "triggdate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7ofnpyet",
    "name": "triggtime",
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
    "id": "hsiypxhm",
    "name": "owner",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "opj1lo6t",
    "name": "secondary",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("fnjtgwj5")

  // remove
  collection.schema.removeField("ei6na4zc")

  // remove
  collection.schema.removeField("qefipmen")

  // remove
  collection.schema.removeField("cbqehin1")

  // remove
  collection.schema.removeField("dcojnhql")

  // remove
  collection.schema.removeField("85gyvg67")

  // remove
  collection.schema.removeField("mlmr3z28")

  // remove
  collection.schema.removeField("zhrbzc4d")

  return dao.saveCollection(collection)
})
