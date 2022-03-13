<?php
    // initialisation de la base de données
    $bdd = new PDO('mysql:host=localhost;dbname=tluk7536_trading', 'tluk7536_trading', 'sasuno3000');

    // Récupération de la date de dernière mise à jour
    $request = $bdd->prepare("SELECT date FROM trade ORDER BY id DESC LIMIT 1");
    $request->execute();
    $dateLastMaj = $request->fetchAll()[0]['date'];
?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<div class="row" style="margin-top:20%;">
    <div class="col-3">
    </div>
    <div class="col-6">
        <div class="alert alert-primary" role="alert">
            <i><b>Rapport sur les données de trading</b> (Date de dernière mise à jour : <?php echo $dateLastMaj ?>)</i>
            <form method="POST">
                <label>Performance &nbsp&nbsp</label><input type="number" name="performance" value="0"><br /><br />
                <label>Date &nbsp&nbsp</label><input type="date" name="date" value="0"><br /><br />
                <button type="submit" class="btn btn-primary">Valider</button>
            </form>
        </div>
    </div>
    <div class="col-3">
    </div>
</div>


<?php 
    if(isset($_POST['performance'])) {

        // Transormation de la date reçu en date valide pour la base de données
        $date = strtotime($_POST['date']);
        $date = date('Y-m-d', $date);

        $request = $bdd->prepare("INSERT INTO trade(performance, date) VALUES(:performance, :date)");
        $request->bindParam(':performance', $_POST['performance']);
        $request->bindParam(':date', $date);
        $request->execute();
    }
?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>