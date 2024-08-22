/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v417ooy21yk08nc");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "v417ooy21yk08nc",
    "created": "2024-05-27 10:48:41.288Z",
    "updated": "2024-05-27 10:48:41.288Z",
    "name": "user_com",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h0z2ritd",
        "name": "name",
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
      "query": "select (ROW_NUMBER() OVER()) as id ,users.name from users where users.company_id='wdyfaxu24v587e1'"
    }
  });

  return Dao(db).saveCollection(collection);
})
