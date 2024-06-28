/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "llmgwdh3d91fx4p",
    "created": "2024-06-12 10:34:34.015Z",
    "updated": "2024-06-12 10:34:34.015Z",
    "name": "workflow_app_duplicate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bfrhxvdf",
        "name": "wf_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "k4aqc9j77xx9p02",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ylc5lror",
        "name": "app",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "65s1fxbgy45qrki",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "n24zjtv4",
        "name": "app_order",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("llmgwdh3d91fx4p");

  return dao.deleteCollection(collection);
})
