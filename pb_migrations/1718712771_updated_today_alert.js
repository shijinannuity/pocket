/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43m22t6cuxqvoyc")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,alert.owner,alert.secondary_user,alert.title,alert.description,alert.triggdate,alert.triggtime FROM alert WHERE SUBSTR(alert.triggdate,0,11)=SUBSTR(DATETIME(),0,11)"
  }

  // remove
  collection.schema.removeField("akgpdpxg")

  // remove
  collection.schema.removeField("vo8bsl4p")

  // remove
  collection.schema.removeField("mdgint7t")

  // remove
  collection.schema.removeField("l2k6cw3w")

  // remove
  collection.schema.removeField("xitlezv0")

  // remove
  collection.schema.removeField("uakzneau")

  // remove
  collection.schema.removeField("2pxvlvou")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h2hxk85k",
    "name": "owner",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3bdpetdx",
    "name": "secondary_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxvdiznp",
    "name": "title",
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
    "id": "wyd5vweo",
    "name": "description",
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
    "id": "qase7wh6",
    "name": "triggdate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "susqkfn3",
    "name": "triggtime",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43m22t6cuxqvoyc")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,alert.owner,alert.secondary_user,SUBSTR(DATETIME(),0,11) as ddxg,alert.title,alert.description,alert.triggdate,alert.triggtime FROM alert WHERE SUBSTR(alert.triggdate,0,11)=SUBSTR(DATETIME(),0,11)"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "akgpdpxg",
    "name": "owner",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vo8bsl4p",
    "name": "secondary_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p59w4sej4aswrhx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdgint7t",
    "name": "ddxg",
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
    "id": "l2k6cw3w",
    "name": "title",
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
    "id": "xitlezv0",
    "name": "description",
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
    "id": "uakzneau",
    "name": "triggdate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2pxvlvou",
    "name": "triggtime",
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
  collection.schema.removeField("h2hxk85k")

  // remove
  collection.schema.removeField("3bdpetdx")

  // remove
  collection.schema.removeField("rxvdiznp")

  // remove
  collection.schema.removeField("wyd5vweo")

  // remove
  collection.schema.removeField("qase7wh6")

  // remove
  collection.schema.removeField("susqkfn3")

  return dao.saveCollection(collection)
})
