/**
*	@class ui.store.Games
*/

Ext.define('ui.store.Games',{
	extend: 'Ext.data.Store',
	model: 'ui.model.Game',
	storeId: 'games',
	proxy: {
		type: 'ajax',
		url: '/assets/data/scores.json',
		reader: {
			type: 'json'
		}
	},
	autoLoad: true
});