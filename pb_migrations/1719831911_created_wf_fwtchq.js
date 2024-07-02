/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p37e9rf927go5wc",
    "created": "2024-07-01 11:05:11.875Z",
    "updated": "2024-07-01 11:05:11.875Z",
    "name": "wf_fwtchq",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdtvglq8",
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
        "id": "fibsdg0j",
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
      "query": "SELECT wf.wfname,wfa.id,wfa.app_order from workflow as wf join workflow_app as wfa "
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p37e9rf927go5wc");

  return dao.deleteCollection(collection);
})
