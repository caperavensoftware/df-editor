import {bindable, inject} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';
import {toolbarItems} from './toolbar-items';
import {SearchFilter} from 'pragma-views/lib/search-filter';
import {Model, modelToSchemaMapping} from './model';
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

    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.templateParser = new TemplateParser("model");
    }

    attached() {
        this.toolbarItems = toolbarItems;
        this.fetchItems();
    }

    detached() {
        this.schema = null;
        this.model = null;
        this.toolbarItems = null;
    }


    toolbarSelectedIdChanged(newValue) {
        alert(newValue);
    }

    selectedIdChanged(newValue) {
        this.fetch(newValue);
    }

    modelChanged(newValue) {
        if (newValue !== undefined && newValue !== null) {
            this.schema = modelToSchemaMapping.get(newValue.constructor.name);
            this.setList("list")
        }
    }

    setList(templateId) {
        if (!this.schema.templates) {
            return;
        }

        const templateBody = this.schema.templates.find(item => item.id == templateId);

        if (!templateBody) {
            return;
        }

        this.items = null;
        this.templateParser.parse(templateBody).then(result => this.listTemplate = `<template>${result}</template>`);
        this.items = this.model.items;
    }

    fetchItems() {
        this.model = new Model();
    }

    fetch(id) {
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
}