/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1pu5v7g6sukvo5g")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND DATE(al.triggdate)=DATE()  AND (TIME(al.triggtime) < TIME('now','+5 minutes'))"
  }

  // remove
  collection.schema.removeField("w3w5efna")

  // remove
  collection.schema.removeField("wmwd7lg0")

  // remove
  collection.schema.removeField("6kdj5rfz")

  // remove
  collection.schema.removeField("vpxrahcu")

  // remove
  collection.schema.removeField("1frotbcl")

  // remove
  collection.schema.removeField("gqg9jncl")

  // remove
  collection.schema.removeField("vivusxxl")

  // remove
  collection.schema.removeField("hhhextcm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "byg1cac5",
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
    "id": "togoe3ui",
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
    "id": "u3sqxq6w",
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
    "id": "3bbowsxl",
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
    "id": "pv8575uk",
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
    "id": "geqc568o",
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
    "id": "hsvwgwp2",
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
    "id": "fannseyi",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND DATE(al.triggdate)=DATE()  AND (TIME(al.triggtime) > TIME('now','-30 minutes') ) AND (TIME(al.triggtime) < TIME('now','+5 minutes'))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w3w5efna",
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
    "id": "wmwd7lg0",
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
    "id": "6kdj5rfz",
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
    "id": "vpxrahcu",
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
    "id": "1frotbcl",
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
    "id": "gqg9jncl",
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
    "id": "vivusxxl",
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
    "id": "hhhextcm",
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
  collection.schema.removeField("byg1cac5")

  // remove
  collection.schema.removeField("togoe3ui")

  // remove
  collection.schema.removeField("u3sqxq6w")

  // remove
  collection.schema.removeField("3bbowsxl")

  // remove
  collection.schema.removeField("pv8575uk")

  // remove
  collection.schema.removeField("geqc568o")

  // remove
  collection.schema.removeField("hsvwgwp2")

  // remove
  collection.schema.removeField("fannseyi")

  return dao.saveCollection(collection)
})