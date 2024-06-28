/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wqknkmak1nz01nb",
    "created": "2024-05-29 07:47:33.071Z",
    "updated": "2024-05-29 07:47:33.071Z",
    "name": "gsdfgsd",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dcxw5twh",
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
        "id": "ue6pf4db",
        "name": "apps",
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
      "query": "SELECT workflow.id,workflow.wfname,(SELECT workflow_app.app from workflow_app where workflow_app.wf_id=workflow.id) as apps from workflow WHERE workflow.user_id=\"njg9bhnnlo5ymnd\""
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqknkmak1nz01nb");

  return dao.deleteCollection(collection);
})
