/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ukfy3zn0z7f0c5g",
    "created": "2024-05-27 12:58:07.683Z",
    "updated": "2024-05-27 12:58:07.683Z",
    "name": "passwordreset",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gmsaxzr5",
        "name": "mailotp",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hjndyytf",
        "name": "mobileotp",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ka6fqegy",
        "name": "time",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ukfy3zn0z7f0c5g");

  return dao.deleteCollection(collection);
})
