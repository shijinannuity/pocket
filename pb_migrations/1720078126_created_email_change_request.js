/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "epolvaxczyq5iih",
    "created": "2024-07-04 07:28:46.666Z",
    "updated": "2024-07-04 07:28:46.666Z",
    "name": "email_change_request",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ym6lcqs",
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
      },
      {
        "system": false,
        "id": "d3clarlu",
        "name": "bool",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("epolvaxczyq5iih");

  return dao.deleteCollection(collection);
})
