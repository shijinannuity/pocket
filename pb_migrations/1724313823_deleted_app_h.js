/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("142srf5qysmeyfr");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "142srf5qysmeyfr",
    "created": "2024-08-08 14:35:28.606Z",
    "updated": "2024-08-09 08:38:24.815Z",
    "name": "app_h",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mzejoxpu",
        "name": "app_name",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "j2wncu6f",
        "name": "data",
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
      "query": "WITH App_health_hour AS (SELECT STRFTIME('%H',datetime) as hour,app_name,app_status from app_health WHERE STRFTIME('%Y-%m-%d',datetime)='2024-08-08')\nSELECT (ROW_NUMBER() OVER()) as id,a.app_name,JSON_OBJECT('data',(SELECT json_object(p.hour,p.app_status) from App_health_hour p WHERE p.app_name=a.app_name)) as data from App_health_hour as a GROUP by a.app_name\n\n\n\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
