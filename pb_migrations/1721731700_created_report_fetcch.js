/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "knyxqkzx6fl7zbh",
    "created": "2024-07-23 10:48:20.477Z",
    "updated": "2024-07-23 10:48:20.477Z",
    "name": "report_fetcch",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9bt6k6zm",
        "name": "owner",
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
        "id": "t876mfhn",
        "name": "file",
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
      "query": "SELECT r.id,u.name as owner,(CASE WHEN r.password=\"\" THEN r.file ELSE \"\" END) as file from report as r JOIN users as u on r.email=u.email WHERE u.company_id=\"\""
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("knyxqkzx6fl7zbh");

  return dao.deleteCollection(collection);
})
