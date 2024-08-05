/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnzhj2228uo390j")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,company.company_id,count(*) as count from apps join company on apps.company_id=company.id where apps.company_id='wdyfaxu24v587e1'"
  }

  // remove
  collection.schema.removeField("eddn2tb9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nn6kqi3h",
    "name": "company_id",
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
    "id": "hnlhzd0g",
    "name": "count",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnzhj2228uo390j")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,count(*) as count from apps where apps.company_id='wdyfaxu24v587e1'"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eddn2tb9",
    "name": "count",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("nn6kqi3h")

  // remove
  collection.schema.removeField("hnlhzd0g")

  return dao.saveCollection(collection)
})
