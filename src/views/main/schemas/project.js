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
            "element": "div",
            "styles": ["card", "default-padding"],
            "elements": [
                {
                    "element": "button",
                    "title": "Add Section",
                    "action": "model.add",
                    "styles": ["action"]
                },
                {
                    "element": "button",
                    "title": "Back",
                    "action": "propCrumb"
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