/**
* @class ui.controller.ScoreBoard
*   simple controller for ScoreBoard functionality
*/

Ext.define('ui.controller.ScoreBoard', {
    extend: 'Ext.app.Controller',
    init: function() {
        var me = this;

        this.control({
            "#mainView toolbar [itemId=addGame]": {
                click: this.onAddGameClick
            },
            "#mainView [itemId=scoreBoard]": {
                afterrender: this.afterGameStoreLoad
            }
        });
    },

    //click event handler bound to 'Add Game' button
    onAddGameClick: function (btn) {

        var me = this,
            grid = btn.up('panel'),
            form;

        form = Ext.create('ui.view.form.Game', {
                buttons: [
                    '->',
                    {
                        text: 'Save New Game',
                        itemId: 'saveForm',
                        handler: function (btn) {

                            var panel = this.up('form'),
                            form = panel.getForm(),
                            values = form.getValues(),
                            grid = Ext.ComponentQuery.query("#scoreBoard")[0],
                            players = Ext.getCmp('playerWins').getStore();

                            if (!form.isValid()) return;

                            panel.setLoading('Saving new Game...');

                            //add our new record
                            grid.getStore().add(values);

                            //update our score board
                            me.updateScoreBoardRanks(players, values);

                            //remove loader and close the window
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
                ]
            });

        Ext.create('ui.view.util.Modal', {
            title: "Add a New Game",
            items: [form]
        });
    },

    //fetch game data
    afterGameStoreLoad: function(cmp) {
        var me = this,
        rankGrid = Ext.getCmp('playerWins');

        //loader and populate our scoreboard
        rankGrid.setLoading(true);
        setTimeout(function(){
            me.populateRankings(rankGrid);
        }, 200);
    },

    //populate our ranking board
    populateRankings: function(cmp) {

        var me = this,
            gameScores = Ext.StoreMgr.lookup('games'),
            players = Ext.StoreMgr.lookup('players'),
            rec;
        
        //tally up the init game results
        gameScores.each(function(item, index, count) {
            rec = item.raw;

            //no need to compare equal scores. no one can brag about a stalemate
            if (rec.score1 !== rec.score2) {
                me.updateScoreBoardRanks(players, rec);
            }
        });

        cmp.setLoading(false);
    },

    //update our scoreboard
    updateScoreBoardRanks: function (store, rec) {

        var winner, 
            targetRec;

        //lets find the winners
        winner = (rec.score1 > rec.score2) ? rec.player1 : rec.player2;

        //find our winning player from our store
        targetRec = store.findRecord('name', winner);

        //update winning count
        targetRec.set('wins', parseInt(targetRec.get('wins')) + 1);
    },

    onRemoveClick: function (grid, rowIndex){
        this.getStore().removeAt(rowIndex);
    }
});
