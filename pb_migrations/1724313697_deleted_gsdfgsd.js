/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqknkmak1nz01nb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "wqknkmak1nz01nb",
    "created": "2024-05-29 07:47:33.071Z",
    "updated": "2024-05-29 07:53:48.579Z",
    "name": "gsdfgsd",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zbxpzktd",
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
        "id": "zye4qcde",
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
      "query": "SELECT workflow.id,workflow.wfname,(SELECT workflow_app.app from workflow_app where workflow_app.wf_id=workflow.id) as apps from workflow WHERE workflow.user_id=\"v3wafp53tt1o9nh\"\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
