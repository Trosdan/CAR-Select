var db = openDatabase("POSWEB", "1.0", "DevInterface", 2 * 1024 * 1024);

db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS CONTATOS (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT unique, titulo NVARCHAR(255), mensagem NVARCHAR(255), telefone NVARCHAR(255), email NVARCHAR(255))');
})

function insertContato(titulo, mensagem, telefone, email) {
  db.transaction(function (tx) {
    tx.executeSql('INSERT INTO CONTATOS (titulo, mensagem, telefone, email) VALUES ("' + titulo + '","' + mensagem + '","' + telefone + '","' + email + '")');
  })
};