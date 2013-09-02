/*
 * File: app/view/ui/ObservationEditorAdvancedOperations.js
 * Date: Mon Sep 02 2013 14:02:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.ObservationEditorAdvancedOperations', {
    extend: 'Ext.form.Panel',

    border: 1,
    height: 45,
    width: 300,
    bodyPadding: 10,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    id: 'oeaTf',
                    name: 'val',
                    fieldLabel: 'New value',
                    enableKeyEvents: true,
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    }
});