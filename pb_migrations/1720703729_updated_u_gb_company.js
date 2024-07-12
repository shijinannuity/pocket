/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u5i8bb3z0mlln6b")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,company,(SELECT json_group_array(name) from users where users.company_id=(SELECT id from company WHERE company.company_name=t1.company)) as names FROM users_not_loggedfor20 as t1 GROUP by company"
  }

  // remove
  collection.schema.removeField("n17ww29b")

  // remove
  collection.schema.removeField("n0pdw3u1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcwdlhy8",
    "name": "company",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bmdxntts",
    "name": "names",
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
  const collection = dao.findCollectionByNameOrId("u5i8bb3z0mlln6b")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,company,(SELECT json_group_array(name) from users where users.company_id=(SELECT id from company WHERE company.company_name=t1.company)) as names FROM notloggedfor20 as t1 GROUP by company"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n17ww29b",
    "name": "company",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n0pdw3u1",
    "name": "names",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("xcwdlhy8")

  // remove
  collection.schema.removeField("bmdxntts")

  return dao.saveCollection(collection)
})
