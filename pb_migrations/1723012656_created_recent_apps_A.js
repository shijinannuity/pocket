/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gn6z3add0yq1xnz",
    "created": "2024-08-07 06:37:36.128Z",
    "updated": "2024-08-07 06:37:36.128Z",
    "name": "recent_apps_A",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aqlm18xx",
        "name": "user",
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
        "id": "uqod0rui",
        "name": "event",
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
        "id": "vpsrawys",
        "name": "date_time",
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
        "id": "rusryedj",
        "name": "ipaddr",
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
    "options": {
      "query": "SELECT ac.id,ac.user,ac.event,ac.date_time,ac.ipaddr from access as ac join apps as ap on ac.event=ap.app_id where  user='ar_shiji' AND ap.id in ('8dl1q2gymdbjmqj')"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gn6z3add0yq1xnz");

  return dao.deleteCollection(collection);
})
