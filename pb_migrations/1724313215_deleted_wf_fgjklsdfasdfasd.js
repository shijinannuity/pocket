/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("38qwc5b58jkfxtv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "38qwc5b58jkfxtv",
    "created": "2024-07-01 12:29:00.769Z",
    "updated": "2024-07-02 12:37:37.701Z",
    "name": "wf_fgjklsdfasdfasd",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qlqu6iqv",
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
        "id": "sxoz1dm2",
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
        "id": "ytptvnq5",
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
      "query": "SELECT \n    (ROW_NUMBER() OVER()) as id,\n    wf.id as wfid,\n    wf.wfname,\n    (\n        SELECT json_group_array(\n                   json_object(\n                       'wf_app_row_id', workflow_app.id, \n                       'app_order', workflow_app.app_order, \n                       'app', ( SELECT json_object('table_id',apps.id,'app_id',apps.app_id,'name',apps.name,'logo',apps.logo,'internalurl',apps.internalurl,'internalport',apps.internalport,'company_id',apps.company_id  ) FROM apps WHERE apps.id = workflow_app.app)\n                   )\n               )\n        FROM workflow_app\n        WHERE workflow_app.wf_id = wf.id\n    ) as wfapps \nFROM \n    workflow as wf\nWHERE \n    wf.user_id = '3q8gebiwxes5hxo';"
    }
  });

  return Dao(db).saveCollection(collection);
})
