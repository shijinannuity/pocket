/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bz2ere6czhdrihk")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,u.name,(SELECT c.id from company as c WHERE c.id=u.company_id) as company from users as u where u.name NOT IN (SELECT name from users where users.user_id IN (SELECT DISTINCT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%d',access.date_time)>=STRFTIME('%Y-%m-%d','now','-20 days')))"
  }

  // remove
  collection.schema.removeField("sa9moeq6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibhk7cze",
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
    "id": "q1u8aa0v",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,name from users where name NOT IN (SELECT name from users where users.user_id IN (SELECT DISTINCT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%d',access.date_time)>=STRFTIME('%Y-%m-%d','now','-20 days')))"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sa9moeq6",
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
  collection.schema.removeField("ibhk7cze")

  // remove
  collection.schema.removeField("q1u8aa0v")

  return dao.saveCollection(collection)
})
