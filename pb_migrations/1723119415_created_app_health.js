/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sjg1f5jqrtv2tph",
    "created": "2024-08-08 12:16:55.380Z",
    "updated": "2024-08-08 12:16:55.380Z",
    "name": "app_health",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zno3kpun",
        "name": "datetime",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "iochjowk",
        "name": "app_name",
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
        "id": "ixskqkee",
        "name": "app_status",
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
  const collection = dao.findCollectionByNameOrId("sjg1f5jqrtv2tph");

  return dao.deleteCollection(collection);
})
