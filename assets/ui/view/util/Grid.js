/**
* @class ui.view.util.Grid
*/

Ext.define('ui.view.util.Grid', {
	extend: 'Ext.grid.Panel',
    currentSection: null,
	dockedItems: [],
    columns: [],
    border: 0,
    height: 100,
    viewConfig: {
        markDirty:false
    },
    selType: 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 2
        })
    ]
});