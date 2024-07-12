/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,company from notloggedfor20 as t1 WHERE  (select json_group_array(name) FROM notloggedfor20 as t2 WHERE t2.company=t1.company)=(SELECT json_group_array(name) from users where users.company_id=(SELECT id from company WHERE company.company_name=t1.company))"
  }

  // remove
  collection.schema.removeField("lwzlmexx")

  // remove
  collection.schema.removeField("4vx5ohny")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuivxj67",
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
  const collection = dao.findCollectionByNameOrId("b4zy80prc6gzsvd")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,name,company from notloggedfor20 GROUP by company"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwzlmexx",
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
    "id": "4vx5ohny",
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
  collection.schema.removeField("wuivxj67")

  return dao.saveCollection(collection)
})
