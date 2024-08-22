/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "j7rqxs3sa23kzrh",
    "created": "2024-08-09 13:28:27.621Z",
    "updated": "2024-08-09 13:28:27.621Z",
    "name": "sdtwrsfgar",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fgee2u6a",
        "name": "app_name",
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
      "query": "select (ROW_NUMBER() OVER()) as id,app_name from app_health  where id='2' order by id DESC"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh");

  return dao.deleteCollection(collection);
})
