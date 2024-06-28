/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e1writrz",
    "name": "ticket_no",
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
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7")

  // remove
  collection.schema.removeField("e1writrz")

  return dao.saveCollection(collection)
})
