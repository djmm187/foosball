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

        this.buttons = [
		'->',
		{
			text: 'Save',
			itemId: 'saveForm',
			handler: function (btn) {


				var panel = this.up('form'),
				form = panel.getForm(),
				values = form.getValues(),
				grid = Ext.ComponentQuery.query("#scoreBoard")[0],
				players = Ext.getCmp('playerWins').getStore(),
				winner, prec;

				if (form.isValid()) {

					panel.setLoading('Saving new Game...');

					//add our new record
					grid.getStore().add(values);

					//update our score board
					winner = (values.score1 > values.score2) ? values.player1 : values.player2;
					prec = players.findRecord('name', winner);
					prec.set('wins', parseInt(prec.get('wins')) + 1);

				} else {
					return;
				}

				panel.setLoading(false);
				panel.up('window').close();
				return;
			}
		},
		{
			text: 'Cancel',
			itemId: 'cancel',
			handler: function (btn) {
				btn.up('window').close();
			}
		}
	],

		this.callParent(arguments);
	}

});