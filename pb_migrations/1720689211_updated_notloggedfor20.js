/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz2ere6czhdrihk")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,u.name,u.user_id,(SELECT c.company_name from company as c WHERE c.id=u.company_id) as company from users as u where u.user_id NOT IN (SELECT DISTINCT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%d',access.date_time)>=STRFTIME('%Y-%m-%d','now','-20 days'))"
  }

  // remove
  collection.schema.removeField("fxd1te9n")

  // remove
  collection.schema.removeField("i3i4m6yh")

  // remove
  collection.schema.removeField("m7s6law4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8s3pgv2",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o4bfxfew",
    "name": "user_id",
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
    "id": "7frduk1o",
    "name": "company",
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
  const collection = dao.findCollectionByNameOrId("bz2ere6czhdrihk")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,u.name,u.user_id,(SELECT c.company_name from company as c WHERE c.id=u.company_id) as company from users as u where u.name NOT IN (SELECT name from users where users.user_id IN (SELECT DISTINCT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%d',access.date_time)>=STRFTIME('%Y-%m-%d','now','-20 days')))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxd1te9n",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i3i4m6yh",
    "name": "user_id",
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
    "id": "m7s6law4",
    "name": "company",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("u8s3pgv2")

  // remove
  collection.schema.removeField("o4bfxfew")

  // remove
  collection.schema.removeField("7frduk1o")

  return dao.saveCollection(collection)
})
