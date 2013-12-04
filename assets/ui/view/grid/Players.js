/**
*   @class ui.view.grid.Players
*/

Ext.define('ui.view.grid.Players', {
    extend: 'Ext.grid.Panel',
    title: null,
    layout: 'fit',
    id: 'playerWins',
    store: Ext.create('ui.store.Players'),
    bodyStyle: 'background: #fff',
    minHeight: 300,
    margin: 10,
    border: 0,
    viewConfig: {
        markDirty:false
    },
    tbar:  [
      { 
        xtype: 'text', 
        text: 'Player Scores',
        cls: 'playerScores'
    }],
    columns: [
        { 
            text: 'Player',  
            dataIndex: 'name', 
            flex: 1 
        },
        { 
            text: 'Wins', 
            dataIndex: 'wins', 
            flex: 1
        }
    ]
})