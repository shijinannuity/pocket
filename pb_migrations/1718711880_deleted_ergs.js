/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y990if8gr5itqyh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "y990if8gr5itqyh",
    "created": "2024-06-18 11:54:01.051Z",
    "updated": "2024-06-18 11:54:01.051Z",
    "name": "ergs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "59ltasxc",
        "name": "fe",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
})
