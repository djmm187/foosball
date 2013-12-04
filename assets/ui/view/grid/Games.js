/**
*   @class ui.view.grid.Games
*/

Ext.define('ui.view.grid.Games', {
    extend: 'ui.view.util.Grid',
    itemId: 'scoreBoard',
    initComponent: function () {
        var me = this;

        this.border = 0;
        this.margin = 10;
        this.height = 300;

        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                border: 0,
                items: [
                    {
                        xtype: 'text',
                        cls: 'recentGames',
                        text: 'Recent Games'
                    }, '->',
                    { 
                        xtype: 'button', 
                        text: 'Add Game',
                        itemId: 'addGame'
                    }
                ]
            }
        ];

        this.columns = [
            { 
                text: 'Player 1', 
                dataIndex: 'player1',
                flex: 2
            },
            { 
                text: 'Score', 
                dataIndex: 'score1',
                flex: 1
            },
            { 
                text: 'Player 2', 
                dataIndex: 'player2',
                flex: 2
            },
            { 
                text: 'Score', 
                dataIndex: 'score2',
                flex: 1
            }
        ];

        this.store = Ext.create('ui.store.Games');

        this.callParent(arguments);
    }
    
});