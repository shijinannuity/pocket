/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "38qwc5b58jkfxtv",
    "created": "2024-07-01 12:29:00.769Z",
    "updated": "2024-07-01 12:29:00.769Z",
    "name": "wf_fgjklsdfasdfasd",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y2mkni4m",
        "name": "wfid",
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
        "id": "co1w9tac",
        "name": "wfname",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "f1masw4m",
        "name": "wfapps",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname, (SELECT workflow_app.id,workflow_app.app_order, (SELECT apps.app_id FROM apps WHERE apps.id = workflow_app.app ) as app_id FROM workflow_app WHERE workflow_app.wf_id=wf.id) as wfapps from workflow as wf  WHERE wf.user_id='3q8gebiwxes5hxo'"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("38qwc5b58jkfxtv");

  return dao.deleteCollection(collection);
})
