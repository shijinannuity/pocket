/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4fduf5bcx6hvhne");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4fduf5bcx6hvhne",
    "created": "2024-05-24 06:18:23.545Z",
    "updated": "2024-05-24 06:19:29.152Z",
    "name": "ussq",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ispeynb7",
        "name": "uid",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "p59w4sej4aswrhx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "zc7hp6lb",
        "name": "user_id",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "select (ROW_NUMBER() OVER()) as id,users.id as uid ,users.user_id FROM users "
    }
  });

  return Dao(db).saveCollection(collection);
})
