//var strings = {};
//strings.nl = {
//  "_Username": "Gebruikersnaam" 
//};
//strings.en = {
//  "_Username": "Username" 
//};
//
//String.prototype.l = function () {
//  console.log('name: ' + Ext.app.Application.name);
//  var lang = 'nl';
//  var result = this;
//  if (strings[lang] && strings[lang][this])
//    result = strings[lang][this];
//  return result;
//};
//
//Ext.application({
//    name: 'LM',
//
//    appFolder: 'app',
//
//    controllers: [
//        'LoginController'
//    ],
//    
//    launch: function() {
//			//Ext.create('LM.view.Main', {});
//     	Ext.create('LM.view.LoginWindow', {}).show();
//			Ext.create('Ext.container.Viewport', {
//          layout: 'fit',
//          items: [
//              {
//                  xtype: 'mainview',
//              }
//          ]
//			});
//    },
//    //autoCreateViewport: true
//});

Ext.require('Ext.container.Viewport');
Ext.application({
  name: 'HelloExt',
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          title: 'Hello Ext',
          html: 'Hello! Welcome to Ext JS.'
        }
      ]
    });
  }
}); //You should see a panel with a title bar containing the text "Hello Ext" and the "welcome" message in the panel's body area.