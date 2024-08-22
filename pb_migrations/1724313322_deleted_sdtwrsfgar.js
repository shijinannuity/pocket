/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j7rqxs3sa23kzrh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "j7rqxs3sa23kzrh",
    "created": "2024-08-09 13:28:27.621Z",
    "updated": "2024-08-09 13:45:51.361Z",
    "name": "sdtwrsfgar",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hxc9k1rd",
        "name": "app_name",
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
      "query": "with aaaa as (SELECT app_name,(ROW_NUMBER() OVER(ORDER by created DESC)) as id from app_health)\nSELECT id,app_name from aaaa "
    }
  });

  return Dao(db).saveCollection(collection);
})
