<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>UBNR Plugin</title>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
  <div id="content">Carregando README...</div>
  <script>
    fetch('../README.md')
      .then(res => res.text())
      .then(md => {
        document.getElementById('content').innerHTML = marked.parse(md);
      })
      .catch(err => {
        document.getElementById('content').innerHTML = '<h1>Erro ao carregar README</h1>';
      });
  </script>
</body>
</html>
