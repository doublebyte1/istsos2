/*
 * File: app/view/ui/Calc.js
 * Date: Mon Sep 02 2013 14:02:44 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.Calc', {
    extend: 'Ext.panel.Panel',

    border: 0,
    height: 150,
    minWidth: 450,
    width: 450,
    layout: {
        type: 'border'
    },
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    height: 100,
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    title: '',
                    region: 'north',
                    items: [
                        {
                            xtype: 'gridpanel',
                            border: 0,
                            id: 'editableProcedureGrid',
                            width: 180,
                            title: '',
                            store: 'editableProcedure',
                            flex: 0.3,
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    border: 0,
                                    dataIndex: 'name',
                                    flex: 1,
                                    text: 'Procedures'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            border: 0,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: '',
                            flex: 0.7,
                            items: [
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    height: 30,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    title: '',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'plus',
                                            text: '+',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'moltiply',
                                            text: '*',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'sqrt',
                                            text: 'sqrt',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'sin',
                                            text: 'sin',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'exp',
                                            text: '^',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'acos',
                                            text: 'acos',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'openparentesis',
                                            text: '(',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    height: 30,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    title: '',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'minus',
                                            text: '-',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'divide',
                                            text: '/',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'cos',
                                            text: 'cos',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'asin',
                                            text: 'asin',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'tan',
                                            text: 'tan',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'atan',
                                            text: 'atan',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'closedparentesis',
                                            text: ')',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    height: 30,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    title: '',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'less',
                                            text: '<',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'grater',
                                            text: '>',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'equal',
                                            text: '=',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'lesseq',
                                            text: '&le;',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'gretereq',
                                            text: '&ge;',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'andop',
                                            text: 'AND',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'orop',
                                            text: 'OR',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    border: 0,
                    layout: {
                        type: 'border'
                    },
                    title: '',
                    region: 'center',
                    items: [
                        {
                            xtype: 'form',
                            border: 0,
                            width: 120,
                            bodyPadding: 10,
                            title: '',
                            region: 'west',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    id: 'pEditing',
                                    hideLabel: true,
                                    anchor: '100%'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            border: 0,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            title: '',
                            region: 'center',
                            items: [
                                {
                                    xtype: 'panel',
                                    border: 0,
                                    id: 'codePanel',
                                    layout: {
                                        align: 'stretch',
                                        padding: '6 0 0 0',
                                        type: 'hbox'
                                    },
                                    title: '',
                                    flex: 0.5
                                },
                                {
                                    xtype: 'form',
                                    border: 0,
                                    bodyPadding: 10,
                                    title: '',
                                    flex: 0.5,
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            id: 'calcQiCombo',
                                            fieldLabel: 'QI',
                                            labelSeparator: '=',
                                            labelWidth: 40,
                                            emptyText: 'choosing a qi will update the selectded values..',
                                            displayField: 'combo',
                                            queryMode: 'local',
                                            store: 'calcQiStore',
                                            valueField: 'code',
                                            anchor: '100%'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            border: 0,
                            width: 40,
                            layout: {
                                align: 'stretch',
                                padding: '5px',
                                type: 'vbox'
                            },
                            title: '',
                            region: 'east',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'btnExecute',
                                    text: '&crarr;',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});