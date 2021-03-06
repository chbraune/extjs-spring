Ext.define('Arp.view.article.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.articleForm',

    stores: {
        currencies: {
            fields: ['id', 'name'],
            data : [
                {"id":"euro", "name":"Euro"},
                {"id":"dollar", "name":"Dollar"},
                {"id":"pound", "name":"Pound"},
                {"id":"yen", "name":"Yen"}
            ]
        }
    }
});