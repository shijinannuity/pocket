/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5ep4z7s15xkypf7",
    "created": "2024-06-19 12:12:26.030Z",
    "updated": "2024-06-19 12:12:26.030Z",
    "name": "support",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gs8442u9",
        "name": "subject",
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
        "id": "480qhql0",
        "name": "category",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "App Error",
            "Workflow Error",
            "Profile",
            "Access Issue",
            "Reminder / Task",
            "Notification.Others"
          ]
        }
      },
      {
        "system": false,
        "id": "d4mefxu0",
        "name": "Priority",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Urgent",
            "Fast",
            "Normal"
          ]
        }
      },
      {
        "system": false,
        "id": "ksouseum",
        "name": "Message",
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
        "id": "r75m7jzf",
        "name": "attachments",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "iehzketj",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "opened",
            "working",
            "closed"
          ]
        }
      },
      {
        "system": false,
        "id": "zqbakxmh",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5ep4z7s15xkypf7");

  return dao.deleteCollection(collection);
})
