/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bz2ere6czhdrihk",
    "created": "2024-07-10 08:08:53.357Z",
    "updated": "2024-07-10 08:08:53.357Z",
    "name": "notloggedfor20",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j7pdwbe9",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,name from users where name NOT IN (SELECT name from users where users.user_id IN (SELECT access.user from access WHERE access.event='login' AND STRFTIME('%Y-%m-%D',access.date_time)>=STRFTIME('%Y-%m-%D',access.date_time,'-20 days')))"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bz2ere6czhdrihk");

  return dao.deleteCollection(collection);
})
