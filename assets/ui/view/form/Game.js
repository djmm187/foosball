/**
*	@class ui.view.form.Game
*/ 

Ext.define('ui.view.form.Game', {
	extend: 'Ext.form.Panel',
	title: null,
	bodyPadding: 5,
	layout: 'anchor',
	url: null,
	raw: null,
	grid: null,
	initComponent: function() {
		var me = this;

		this.items = [
		{
			fieldLabel: 'Player 1',
            xtype: 'combobox',
            name: 'player1',
            store: Ext.create('ui.store.Players'),
            valueField: 'name',
            displayField: 'name',
            typeAhead: true,
            queryMode: 'local',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            allowBlank: false,
            fieldLabel: 'Player 1 Score',
            name: 'score1',
            allowBlank: false
        }, {
			fieldLabel: 'Player 2',
            xtype: 'combobox',
            name: 'player2',
            store: Ext.create('ui.store.Players'),
            valueField: 'name',
            displayField: 'name',
            typeAhead: true,
            queryMode: 'local',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            allowBlank: false,
            fieldLabel: 'Player 2 Score',
            name: 'score2',
            allowBlank: false
        }];

		this.callParent(arguments);
	}

});