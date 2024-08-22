/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dgnld0j9mzjr49o");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "dgnld0j9mzjr49o",
    "created": "2024-05-28 12:02:40.544Z",
    "updated": "2024-05-28 12:03:30.679Z",
    "name": "sfasda",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "twoi8oxb",
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
        "id": "kfjqxsb2",
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
        "id": "rf8u4x7j",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT workflow_app.id, workflow_app.wf_id,workflow_app.app,workflow_app.app_order from workflow_app WHERE workflow_app.wf_id in (SELECT id FROM workflow WHERE workflow.user_id=\"njg9bhnnlo5ymnd\");"
    }
  });

  return Dao(db).saveCollection(collection);
})
