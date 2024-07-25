/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,(json_object('name',a2.name,'logo',a2.internalport)) as app,a1.user from access as a1 join apps as a2 on a1.event=a2.app_id"
  }

  // remove
  collection.schema.removeField("opcizqvq")

  // remove
  collection.schema.removeField("i6dcchgh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvd66eva",
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
    "id": "zmuj7syy",
    "name": "user",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,(json_object(\"name\",a2.name,\"logo\",a2.internalport)) as app,a1.user from access as a1 join apps as a2 on a1.event=a2.app_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "opcizqvq",
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
    "id": "i6dcchgh",
    "name": "user",
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

  // remove
  collection.schema.removeField("yvd66eva")

  // remove
  collection.schema.removeField("zmuj7syy")

  return dao.saveCollection(collection)
})
