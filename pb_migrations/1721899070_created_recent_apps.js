/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wqhtd66wkwm7jx6",
    "created": "2024-07-25 09:17:50.389Z",
    "updated": "2024-07-25 09:17:50.389Z",
    "name": "recent_apps",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ouvkwtxq",
        "name": "app",
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
        "id": "h1bivfeg",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,(json_object(\"name\",a2.name,\"logo\",a2.logo)) as app,a1.user from access as a1 join apps as a2 on a1.event=a2.app_id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqhtd66wkwm7jx6");

  return dao.deleteCollection(collection);
})
