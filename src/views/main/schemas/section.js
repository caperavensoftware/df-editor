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
            "element": "card",
            "elements": [
                {
                    "element": "button",
                    "title": "Back",
                    "action": "context.propCrumb",
                    "styles": ["back"]
                },
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
    ]
};