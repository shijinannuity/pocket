/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id,app_name from app_health  where id=2 order by id"
  }

  // remove
  collection.schema.removeField("cpzl70wv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebgmp0s8",
    "name": "app_name",
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
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id,app_name from app_health  where id=2 order by id DESC"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cpzl70wv",
    "name": "app_name",
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
  collection.schema.removeField("ebgmp0s8")

  return dao.saveCollection(collection)
})
