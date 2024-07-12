/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, name FROM notloggedfor20 as n, JSON_EACH(n.name) GROUP BY n.company"
  }

  // remove
  collection.schema.removeField("763nod3w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lm8uyncv",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id, name FROM notloggedfor20 GROUP BY company"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "763nod3w",
    "name": "name",
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
  collection.schema.removeField("lm8uyncv")

  return dao.saveCollection(collection)
})
