/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,a1.user,a1.date_time,(ROW_NUMBER() OVER()) as id from access as a1  where a1.user='ar_shiji' order by a1.created desc "
  }

  // remove
  collection.schema.removeField("gpgjup2c")

  // remove
  collection.schema.removeField("pkrtdbx8")

  // remove
  collection.schema.removeField("u74zpcoo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cbdmkodv",
    "name": "event",
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
    "id": "dq4nnuyo",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dje6e5g5",
    "name": "date_time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,a1.user,a1.date_time,(ROW_NUMBER() OVER()) as id from access as a1 join apps as a2 on a1.event=a2.app_id where a1.user='ar_shiji' order by a1.created desc "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gpgjup2c",
    "name": "event",
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
    "id": "pkrtdbx8",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u74zpcoo",
    "name": "date_time",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("cbdmkodv")

  // remove
  collection.schema.removeField("dq4nnuyo")

  // remove
  collection.schema.removeField("dje6e5g5")

  return dao.saveCollection(collection)
})
