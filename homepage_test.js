Feature('homepage_test.js');

Scenario('Acessando Home Page da Amazon',  ({ I }) => {
  I.amOnPage('https://www.google.com.br');
  I.fillField('q', 'amazon');
  I.amOnPage('https://www.amazon.com.br/');
  //I.click('Amazon.com.br - Compre na Amazon.com.brAd·https://www.amazon.com.br/');
  //I.see('Dispositivos Amazon com Alexa');
  //I.amOnPage('/');
  //I.fillField('field-keywords', 'fire tv stick 4k+');
  //I.see('Conheça os E-readers Kindle');
});

