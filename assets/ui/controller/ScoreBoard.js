/**
* @class ui.controller.ScoreBoard
*	simple controller for ScoreBoard functionality
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

		var grid = btn.up('panel'),
		form;

        form = Ext.create('ui.view.form.Game');

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

    	var gameScores = Ext.StoreMgr.lookup('games'),
    	players = Ext.StoreMgr.lookup('players');
    	
    	//tally up the init game results
    	gameScores.each(function(item, index, count) {

    		var rec = item.raw,
    		winner, targetRec; 

    		//no need to compare equal scores. no one can brag about a stalemate
    		if (rec.score1 !== rec.score2) {

    			//lets find the winners
    			winner = (rec.score1 > rec.score2) ? rec.player1 : rec.player2;

    			//find our winning player from our store
    			targetRec = players.findRecord('name', winner);

    			//update winning count
    			targetRec.set('wins', parseInt(targetRec.get('wins')) + 1);
    		}
    	});

    	cmp.setLoading(false);
    },

    onRemoveClick: function(grid, rowIndex){
        this.getStore().removeAt(rowIndex);
    }
});
