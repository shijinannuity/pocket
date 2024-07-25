/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,(ROW_NUMBER() OVER()) as id from access as a1  where a1.user='ar_shiji'"
  }

  // remove
  collection.schema.removeField("cqrjn3r4")

  // remove
  collection.schema.removeField("7veag5dx")

  // remove
  collection.schema.removeField("fmtzku9x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ksrrc1me",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6")

  collection.options = {
    "query": "SELECT DISTINCT a1.event,a1.user,a1.date_time,(ROW_NUMBER() OVER()) as id from access as a1  where a1.user='ar_shiji'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqrjn3r4",
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
    "id": "7veag5dx",
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
    "id": "fmtzku9x",
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
  collection.schema.removeField("ksrrc1me")

  return dao.saveCollection(collection)
})
