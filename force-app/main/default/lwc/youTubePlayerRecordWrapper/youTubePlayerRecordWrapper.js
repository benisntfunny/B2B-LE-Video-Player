/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class YouTubePlayerRecordWrapper extends LightningElement {
    @api fieldName;
    @api objectApiName;
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' })
    record;

    renderedCallback() {
        console.log('YouTubePlayerRecordWrapper - inside renderedCallback()');
        console.log('fieldName: ' + this.fieldName);
        console.log('objectApiName: ' + this.objectApiName);
        console.log('recordId: ' + this.recordId);
    }

    get youTubeId() {
        return this.record.data
            ? this.record.data.fields[this.fieldName].value
            : '';
    }

    get fields() {
        return [this.objectApiName + '.' + this.fieldName];
    }
}