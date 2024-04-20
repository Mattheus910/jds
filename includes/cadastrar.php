<?php
    if ($_POST["nome"] != "") {
        include_once "includes/conexao.php";
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $tel = $_POST["tel"];
        $vei = $_POST["vei"];
        $sql = "insert into tbcliente(nome, email, tel, vei)
        values
        ('$nome', '$email', '$tel', '$vei')";
        $result = mysqli_query($conn, $sql);
        echo "Dados Gravados com sucesso!";
    } else {
        echo "Dados não cadastrados, preencher campo nome!";
    }
    
?>