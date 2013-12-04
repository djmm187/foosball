/**
*	@class ui.store.Players
*/

Ext.define('ui.store.Players',{
	extend: 'Ext.data.Store',
	model: 'ui.model.Player',
	storeId: 'players',
	proxy: {
		type: 'ajax',
		url: '/assets/data/players.json',
		reader: {
			type: 'json'
		}
	},
	autoLoad: true
});