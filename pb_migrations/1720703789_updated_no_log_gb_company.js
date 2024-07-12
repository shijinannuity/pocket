/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id,(SELECT json_group_array(name) from users_not_loggedfor20 as n2 where n2.company=n.company) as names,company FROM users_not_loggedfor20  as n GROUP BY n.company"
  }

  // remove
  collection.schema.removeField("f3dmt41w")

  // remove
  collection.schema.removeField("a0ckw4ni")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgrflrws",
    "name": "names",
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
    "id": "py1ppi5e",
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
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id,(SELECT json_group_array(name) from notloggedfor20 as n2 where n2.company=n.company) as names,company FROM notloggedfor20 as n GROUP BY n.company"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f3dmt41w",
    "name": "names",
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
    "id": "a0ckw4ni",
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
  collection.schema.removeField("dgrflrws")

  // remove
  collection.schema.removeField("py1ppi5e")

  return dao.saveCollection(collection)
})
