/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz2ere6czhdrihk")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,u.name,u.user_id,(SELECT c.company_name from company as c WHERE c.id=u.company_id) as company from users as u where u.name NOT IN (SELECT name from users where users.user_id IN (SELECT DISTINCT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%d',access.date_time)>=STRFTIME('%Y-%m-%d','now','-20 days')))"
  }

  // remove
  collection.schema.removeField("f35oliut")

  // remove
  collection.schema.removeField("tphpvhge")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkp7iyaz",
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
    "id": "o9ignsm0",
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
    "id": "1gsmh76q",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,u.name,(SELECT c.company_name from company as c WHERE c.id=u.company_id) as company from users as u where u.name NOT IN (SELECT name from users where users.user_id IN (SELECT DISTINCT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%d',access.date_time)>=STRFTIME('%Y-%m-%d','now','-20 days')))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f35oliut",
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
    "id": "tphpvhge",
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
  collection.schema.removeField("vkp7iyaz")

  // remove
  collection.schema.removeField("o9ignsm0")

  // remove
  collection.schema.removeField("1gsmh76q")

  return dao.saveCollection(collection)
})
