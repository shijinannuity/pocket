/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id,app_name from app_health WHERE id='2'"
  }

  // remove
  collection.schema.removeField("tyaqvj0j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y2ifpx7y",
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
    "query": "select (ROW_NUMBER() OVER()) as id,app_name from app_health  "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tyaqvj0j",
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
  collection.schema.removeField("y2ifpx7y")

  return dao.saveCollection(collection)
})
