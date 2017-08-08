import {bindable, inject} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {toolbarItems} from './toolbar-items';
import {SearchFilter} from 'pragma-views/lib/search-filter';
import {Model, Project, modelToSchemaMapping} from './model';
import {TemplateParser} from 'pragma-views/lib/template-parser';

@inject(EventAggregator)
export class Main {
    @bindable toolbarItems;
    @bindable toolbarSelectedId;
    @bindable schema;
    @bindable model;
    @bindable selectedId;
    @bindable searchText;
    @bindable listTemplate;
    @bindable items;
    @bindable breadcrumb;
    @bindable sections;

    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.templateParser = new TemplateParser("model");
        this.breadcrumb = [];
        this.currentContext = this;
    }

    attached() {
        this.toolbarItems = toolbarItems;
        this.fetchItems();
    }

    detached() {
        this.schema = null;
        this.model = null;
        this.toolbarItems = null;
        this.sections = null;
    }


    toolbarSelectedIdChanged(newValue) {
        alert(newValue);
    }

    selectedIdChanged(newValue) {
        if (newValue != -1) {
            this.fetch(newValue);
        }
    }

    modelChanged(newValue, oldValue) {
        if (newValue !== undefined && newValue !== null) {
            if (oldValue) {
                this.addCrumb(oldValue);
            }

            this.schema = modelToSchemaMapping.get(newValue.constructor.name);
            this.setList("list");

            if (newValue instanceof Model) {
                this.sections = null;
            }
            else if (newValue instanceof Project) {
                this.sections = newValue.items;
            }
        }
    }

    itemsChanged() {
        this.selectedId = -1;
    }

    setList(templateId) {
        this.items = null;

        if (!this.schema.templates) {
            return;
        }

        const templateBody = this.schema.templates.find(item => item.id == templateId);

        if (!templateBody) {
            return;
        }

        const result = this.templateParser.parseElements(templateBody.elements);
        this.listTemplate = `<template>${result}</template>`;
        this.items = this.model.items;
    }

    fetchItems() {
        this.model = new Model();
    }

    fetch(id) {
        this.allowModelEvents = true;
        return new Promise(_ => {
            this.model = this.items.find(item => item.id == id);
        })
    }

    searchTextChanged(newValue, oldValue) {
        if ((oldValue || '').length == 0) {
            this.itemsBackup = this.items.slice(0);
        }

        SearchFilter(newValue, this.itemsBackup).then(result => {
            this.items = result;
        });
    }

    addCrumb(model) {
        if (this.allowModelEvents == false) {
            return;
        }

        this.breadcrumb.push(model);
    }

    propCrumb() {
        if (this.breadcrumb.length > 0) {
            this.crumbSelected(this.breadcrumb[this.breadcrumb.length - 1]);
        }
    }

    crumbSelected(item) {
        this.allowModelEvents = false;

        this.model = item;

        const index = this.breadcrumb.indexOf(item);
        this.breadcrumb.splice(index, this.breadcrumb.length - index);
    }

    validateOnKeyField(field) {
        console.warn(field);
    }

    print() {
        debugger;
    }
}