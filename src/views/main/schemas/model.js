export const template =
{
    "type": "view",
    "fields": [
      {
            "field": "id",
            "map": "id"
      }
    ],
    "body": {
        "elements": [
            {
                "element": "h3",
                "content": "Dynamic Forms Editor"
            },
            {
                "element": "div",
                "styles": ["card", "default-padding"],
                "elements": [
                    {
                        "element": "button",
                        "title": "Add Project",
                        "action": "model.add",
                        "styles": ["action"]
                    }
                ]
            }

        ]
    },
    "templates": [
        {
            "id": "list",
            "fields": [],
            "body": {
                "elements": [
                    {
                        "element": "div",
                        "content": "${name}",
                        "styles": ["default-padding"]
                    }
                ]
            }
        }
    ]
};