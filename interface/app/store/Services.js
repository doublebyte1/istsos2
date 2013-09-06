/*
 * File: app/store/Services.js
 * Date: Fri Sep 06 2013 11:01:42 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.Services', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'storeServices',
            proxy: {
                type: 'ajax',
                url: '/istsos/wa/istsos/services',
                reader: {
                    type: 'json',
                    idProperty: 'service',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'service',
                    type: 'string'
                },
                {
                    name: 'path',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});