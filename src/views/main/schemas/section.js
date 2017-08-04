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
            "element": "group",
            "title": "Section",
            "elements": [
                {
                    "element": "input",
                    "title": "Id",
                    "field": "id"
                },
                {
                    "element": "input",
                    "title": "Name",
                    "field": "name"
                }
            ]
        },
        {
            "element": "div",
            "styles": ["card", "default-padding"],
            "elements": [
                {
                    "element": "button",
                    "title": "Add Item",
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
                        "styles": ["default-padding"],
                        "elements": [
                            {
                                "element": "div",
                                "content": "${name}",
                            },
                            {
                                "element": "div",
                                "content": "${description}",
                                "styles": ["suppressed"]
                            }
                        ]
                    }
                ]
            }
        }
    ]
};