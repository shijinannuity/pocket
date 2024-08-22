/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p37e9rf927go5wc");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "p37e9rf927go5wc",
    "created": "2024-07-01 11:05:11.875Z",
    "updated": "2024-07-01 11:37:13.897Z",
    "name": "wf_fwtchq",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aqvxofqq",
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
        "id": "aemfadj7",
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
        "id": "btqrljwb",
        "name": "wfaid",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "odjq6hyswwnkalf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "koc61vha",
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
      },
      {
        "system": false,
        "id": "skj8wxlx",
        "name": "app_id",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,wf.id as wfid,wf.wfname,wfa.id as wfaid, wfa.app_order ,(SELECT apps.app_id FROM apps WHERE apps.id = wfa.app ) as app_id from workflow as wf  join workflow_app as wfa ON wf.id=wfa.wf_id WHERE wf.user_id='3q8gebiwxes5hxo'"
    }
  });

  return Dao(db).saveCollection(collection);
})
