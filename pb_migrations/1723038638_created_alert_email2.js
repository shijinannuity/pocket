/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "doo3r2rjmufyg5o",
    "created": "2024-08-07 13:50:38.845Z",
    "updated": "2024-08-07 13:50:38.845Z",
    "name": "alert_email2",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dhg7blaw",
        "name": "type",
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
        "id": "yo701wzy",
        "name": "title",
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
        "id": "r4y3man2",
        "name": "description",
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
        "id": "64zzmjh6",
        "name": "app",
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
        "id": "xvey1mlz",
        "name": "triggdate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "kkjaouny",
        "name": "triggtime",
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
        "id": "cfinpo1k",
        "name": "owner",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "pfjircya",
        "name": "secondary",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,al.type,al.title,al.description,al.app,al.triggdate,al.triggtime,(SELECT email FROM users where users.id=al.owner) as owner,COALESCE((SELECT email FROM users where users.id=al.secondary_user),\"\") as secondary FROM alert as al WHERE al.active=true AND al.email=true AND (SELECT email_notification  FROM users where users.id=al.owner)=true AND (strftime('%Y-%m-%d', al.triggdate,'localtime') = strftime('%Y-%m-%d', 'now','localtime')) AND (strftime('%H:%M', al.triggdate,'localtime') < strftime('%H:%M', 'now','localtime','+30 minutes')) AND (strftime('%H:%M', al.triggdate,'localtime') > strftime('%H:%M', 'now','localtime'))"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("doo3r2rjmufyg5o");

  return dao.deleteCollection(collection);
})
