/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("58s8dmviyb6wx36")

  collection.options = {
    "query": "select (ROW_NUMBER() OVER()) as id,(SELECT json_group_array(name) from notloggedfor20 as n2 where n2.company=n.company) as names,company FROM notloggedfor20 as n GROUP BY n.company"
  }

  // remove
  collection.schema.removeField("lm8uyncv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhcf93dz",
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
    "id": "qfu9cnbr",
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
    "query": "select (ROW_NUMBER() OVER()) as id, name FROM notloggedfor20 as n, JSON_EACH(n.name) GROUP BY n.company"
  }

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

  // remove
  collection.schema.removeField("zhcf93dz")

  // remove
  collection.schema.removeField("qfu9cnbr")

  return dao.saveCollection(collection)
})
