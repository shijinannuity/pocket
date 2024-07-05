/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1pu5v7g6sukvo5g")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND DATE(al.triggdate)=DATE() "
  }

  // remove
  collection.schema.removeField("lm1xqaqy")

  // remove
  collection.schema.removeField("wvt3xxpm")

  // remove
  collection.schema.removeField("vhu3y07y")

  // remove
  collection.schema.removeField("yymo5v4d")

  // remove
  collection.schema.removeField("d7rfh2iz")

  // remove
  collection.schema.removeField("z0xstuc8")

  // remove
  collection.schema.removeField("pakbqm3q")

  // remove
  collection.schema.removeField("vcjvgup4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1r8pglua",
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
    "id": "8xrlhhez",
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
    "id": "8nv3z4pc",
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
    "id": "5wejkyls",
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
    "id": "zwzpse1h",
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
    "id": "7ia6se2r",
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
    "id": "0oxm6tgt",
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
    "id": "3lofrngn",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,(SELECT email FROM users where users.id=al.secondary_user) as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND DATE(al.triggdate)=DATE() AND (al.triggtime < strftime('%H:%M', 'now'))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm1xqaqy",
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
    "id": "wvt3xxpm",
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
    "id": "vhu3y07y",
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
    "id": "yymo5v4d",
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
    "id": "d7rfh2iz",
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
    "id": "z0xstuc8",
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
    "id": "pakbqm3q",
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
    "id": "vcjvgup4",
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
  collection.schema.removeField("1r8pglua")

  // remove
  collection.schema.removeField("8xrlhhez")

  // remove
  collection.schema.removeField("8nv3z4pc")

  // remove
  collection.schema.removeField("5wejkyls")

  // remove
  collection.schema.removeField("zwzpse1h")

  // remove
  collection.schema.removeField("7ia6se2r")

  // remove
  collection.schema.removeField("0oxm6tgt")

  // remove
  collection.schema.removeField("3lofrngn")

  return dao.saveCollection(collection)
})
