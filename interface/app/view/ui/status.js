/*
 * File: app/view/ui/status.js
 * Date: Mon Sep 02 2013 14:02:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.status', {
    extend: 'Ext.grid.Panel',

    title: '',
    forceFit: true,
    store: 'serverstatus',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'service',
                    text: 'Service'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'featuresOfInterest',
                    text: 'Features Of Interest',
                    format: 0
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'offerings',
                    text: 'Offerings',
                    format: 0
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'procedures',
                    text: 'Procedures',
                    format: 0
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'observedProperties',
                    text: 'Observed Properties',
                    format: 0
                },
                {
                    xtype: 'gridcolumn',
                    id: 'colAvailability',
                    dataIndex: 'availability',
                    text: 'Availability'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'colDatabase',
                    dataIndex: 'database',
                    text: 'Database'
                },
                {
                    xtype: 'booleancolumn',
                    id: 'colGetcapabilities',
                    dataIndex: 'getcapabilities',
                    text: 'GetCapabilities'
                },
                {
                    xtype: 'booleancolumn',
                    id: 'colDescribesensor',
                    dataIndex: 'describesensor',
                    text: 'DescribeSensor'
                },
                {
                    xtype: 'booleancolumn',
                    id: 'colGetobservation',
                    dataIndex: 'getobservation',
                    text: 'GetObservation'
                },
                {
                    xtype: 'booleancolumn',
                    id: 'colGetfeatureofinterest',
                    dataIndex: 'getfeatureofinterest',
                    text: 'GetFeatureOfInterest'
                },
                {
                    xtype: 'booleancolumn',
                    id: 'colInsertobservation',
                    dataIndex: 'insertobservation',
                    text: 'InsertObservation'
                },
                {
                    xtype: 'booleancolumn',
                    id: 'colRegistersensor',
                    dataIndex: 'registersensor',
                    text: 'RegisterSensor'
                }
            ]
        });

        me.callParent(arguments);
    }
});