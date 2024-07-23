/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("knyxqkzx6fl7zbh")

  collection.options = {
    "query": "SELECT r.id,u.name as owner,(CASE WHEN r.password=\"\" THEN r.file ELSE \"\" END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id=\"wdyfaxu24v587e1\""
  }

  // remove
  collection.schema.removeField("9bt6k6zm")

  // remove
  collection.schema.removeField("t876mfhn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "33tqi6uc",
    "name": "owner",
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
    "id": "bi8aejde",
    "name": "file",
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
  const collection = dao.findCollectionByNameOrId("knyxqkzx6fl7zbh")

  collection.options = {
    "query": "SELECT r.id,u.name as owner,(CASE WHEN r.password=\"\" THEN r.file ELSE \"\" END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id=\"\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9bt6k6zm",
    "name": "owner",
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
    "id": "t876mfhn",
    "name": "file",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("33tqi6uc")

  // remove
  collection.schema.removeField("bi8aejde")

  return dao.saveCollection(collection)
})
