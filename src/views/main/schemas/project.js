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
            "title": "Project",
            "elements": [
                {
                    "element": "input",
                    "title": "Id",
                    "field": "id",
                    "readonly": "true"
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
                    "title": "Add Section",
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
                    "element": "card",
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