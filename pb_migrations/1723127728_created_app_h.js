/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "142srf5qysmeyfr",
    "created": "2024-08-08 14:35:28.606Z",
    "updated": "2024-08-08 14:35:28.606Z",
    "name": "app_h",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gkoedz0n",
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
        "id": "7hrxpjqd",
        "name": "d",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,app_name,json_object('0',(SELECT app_status from app_health where STRFTIME('%Y-%m-%d',datetime)='2024-08-08' and STRFTIME('%H',datetime)='0')) as d from app_health"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr");

  return dao.deleteCollection(collection);
})
