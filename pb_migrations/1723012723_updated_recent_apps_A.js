/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gn6z3add0yq1xnz")

  collection.options = {
    "query": "SELECT ac.id from access as ac join apps as ap on ac.event=ap.app_id where  user='ar_shiji' AND ap.id in ('8dl1q2gymdbjmqj')"
  }

  // remove
  collection.schema.removeField("aqlm18xx")

  // remove
  collection.schema.removeField("uqod0rui")

  // remove
  collection.schema.removeField("vpsrawys")

  // remove
  collection.schema.removeField("rusryedj")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gn6z3add0yq1xnz")

  collection.options = {
    "query": "SELECT ac.id,ac.user,ac.event,ac.date_time,ac.ipaddr from access as ac join apps as ap on ac.event=ap.app_id where  user='ar_shiji' AND ap.id in ('8dl1q2gymdbjmqj')"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqlm18xx",
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
    "id": "uqod0rui",
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
    "id": "vpsrawys",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rusryedj",
    "name": "ipaddr",
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
})
