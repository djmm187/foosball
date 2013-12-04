
Ext.application({
    name: 'ui',
    appFolder: '/assets/ui/',
    views: ['ui.view.util.*'],
    controllers: ['ui.controller.ScoreBoard'],
    launch: function() {

    	//our main VP (to scope all of our events)
    	Ext.create('Ext.container.Viewport', {
            layout: 'border',
            id: 'mainView',
            border: 0,
            items: [
            {
                region: 'north',
                cls: 'header',
                height: 50,
                border: 0,
                items: [
                {
                	xtype: 'container',
                	html: '<h1 class="foosball-header">Foosball Scoreboard</h1>'
                }]
            }, {
                region: 'center',
                title: null,
                id: 'scoreBoard',
                xtype: 'panel',
                border:0,
                cls: 'main',
                items: [Ext.create('ui.view.grid.Games')]
            },
            {
            	region: 'east',
            	title: null,
            	id: 'rankings',
            	border:0,
            	cls: 'rankings',
            	width: 400,
            	items: [
            	Ext.create('ui.view.grid.Players')
            	]
            }
            ]
        });

    }
});