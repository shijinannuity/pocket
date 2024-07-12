/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1pu5v7g6sukvo5g")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),\"\") as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') < strftime('%H:%M', 'now','localtime','+10 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') > strftime('%H:%M', 'now','localtime'))\n"
  }

  // remove
  collection.schema.removeField("3cmb5ha6")

  // remove
  collection.schema.removeField("hbykps9h")

  // remove
  collection.schema.removeField("rpsx5oht")

  // remove
  collection.schema.removeField("u91qfaym")

  // remove
  collection.schema.removeField("fooeslt3")

  // remove
  collection.schema.removeField("qa1w0uil")

  // remove
  collection.schema.removeField("nirm8isw")

  // remove
  collection.schema.removeField("7ruox7xa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "47ccsfhd",
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
    "id": "sbxwxf5b",
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
    "id": "kelzwhym",
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
    "id": "vjtqtxu1",
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
    "id": "ylpa0sup",
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
    "id": "jill45oe",
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
    "id": "o59hzgyb",
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
    "id": "aq2dm2ty",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),\"\") as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') < strftime('%H:%M', 'now','localtime','+10 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') > strftime('%H:%M', 'now','localtime','-20 minutes'))\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3cmb5ha6",
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
    "id": "hbykps9h",
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
    "id": "rpsx5oht",
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
    "id": "u91qfaym",
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
    "id": "fooeslt3",
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
    "id": "qa1w0uil",
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
    "id": "nirm8isw",
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
    "id": "7ruox7xa",
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
  collection.schema.removeField("47ccsfhd")

  // remove
  collection.schema.removeField("sbxwxf5b")

  // remove
  collection.schema.removeField("kelzwhym")

  // remove
  collection.schema.removeField("vjtqtxu1")

  // remove
  collection.schema.removeField("ylpa0sup")

  // remove
  collection.schema.removeField("jill45oe")

  // remove
  collection.schema.removeField("o59hzgyb")

  // remove
  collection.schema.removeField("aq2dm2ty")

  return dao.saveCollection(collection)
})
