/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "epn7ut4ozl6z1pk",
    "created": "2024-07-12 06:38:47.234Z",
    "updated": "2024-07-12 06:38:47.234Z",
    "name": "r_images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7by4vl9y",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("epn7ut4ozl6z1pk");

  return dao.deleteCollection(collection);
})
