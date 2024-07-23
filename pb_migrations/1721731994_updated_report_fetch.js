/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("knyxqkzx6fl7zbh")

  collection.options = {
    "query": "SELECT r.id,u.name as owner,r.created,(CASE WHEN r.password=\"\" THEN r.file ELSE \"\" END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id=\"wdyfaxu24v587e1\""
  }

  // remove
  collection.schema.removeField("ubom8qgc")

  // remove
  collection.schema.removeField("nlw8rvfk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "out99aiz",
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
    "id": "otzlce2o",
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
    "query": "SELECT r.id,u.name as owner,(CASE WHEN r.password=\"\" THEN r.file ELSE \"\" END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id=\"wdyfaxu24v587e1\""
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ubom8qgc",
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
    "id": "nlw8rvfk",
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
  collection.schema.removeField("out99aiz")

  // remove
  collection.schema.removeField("otzlce2o")

  return dao.saveCollection(collection)
})
