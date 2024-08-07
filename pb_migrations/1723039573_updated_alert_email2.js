/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("doo3r2rjmufyg5o")

  collection.options = {
    "query": "WITH original as (SELECT al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,u.email as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),\"\") as secondary,u.company_id FROM alert as al join users as u on al.owner=u.id WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') < strftime('%H:%M', 'now','localtime','+30 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') > strftime('%H:%M', 'now','localtime')))\nSELECT (ROW_NUMBER() OVER()) as id,ol.type,ol.title,ol.description,ol.app,ol.triggdate,ol.triggtime,ol.owner,ol.secondary from original as ol join apps as ap on ol.app=ap.name WHERE ap.company_id=ol.company_id and ap.isactive=TRUE"
  }

  // remove
  collection.schema.removeField("lzik2rdq")

  // remove
  collection.schema.removeField("cepsejtk")

  // remove
  collection.schema.removeField("davmlx9x")

  // remove
  collection.schema.removeField("gksx2c9v")

  // remove
  collection.schema.removeField("yfluqlkw")

  // remove
  collection.schema.removeField("cbrk3vw5")

  // remove
  collection.schema.removeField("zrkhadvv")

  // remove
  collection.schema.removeField("0t4fa318")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4xz4saed",
    "name": "type",
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
    "id": "acggjmf5",
    "name": "title",
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
    "id": "avbxfy3x",
    "name": "description",
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
    "id": "spnf9ivo",
    "name": "app",
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
    "id": "udgvb7bx",
    "name": "triggdate",
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
    "id": "lpgu4tey",
    "name": "triggtime",
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
    "id": "8lznhjxn",
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
    "id": "en96ovj8",
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
  const collection = dao.findCollectionByNameOrId("doo3r2rjmufyg5o")

  collection.options = {
    "query": "WITH original as (SELECT al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,u.email as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),\"\") as secondary FROM alert as al join users as u on al.owner=u.id WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') < strftime('%H:%M', 'now','localtime','+30 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') > strftime('%H:%M', 'now','localtime')))\nSELECT (ROW_NUMBER() OVER()) as id,ol.type,ol.title,ol.description,ol.app,ol.triggdate,ol.triggtime,ol.owner,ol.secondary from original as ol"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzik2rdq",
    "name": "type",
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
    "id": "cepsejtk",
    "name": "title",
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
    "id": "davmlx9x",
    "name": "description",
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
    "id": "gksx2c9v",
    "name": "app",
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
    "id": "yfluqlkw",
    "name": "triggdate",
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
    "id": "cbrk3vw5",
    "name": "triggtime",
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
    "id": "zrkhadvv",
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
    "id": "0t4fa318",
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
  collection.schema.removeField("4xz4saed")

  // remove
  collection.schema.removeField("acggjmf5")

  // remove
  collection.schema.removeField("avbxfy3x")

  // remove
  collection.schema.removeField("spnf9ivo")

  // remove
  collection.schema.removeField("udgvb7bx")

  // remove
  collection.schema.removeField("lpgu4tey")

  // remove
  collection.schema.removeField("8lznhjxn")

  // remove
  collection.schema.removeField("en96ovj8")

  return dao.saveCollection(collection)
})
