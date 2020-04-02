<?php
include "model/logic.php";

//var_dump(getDataByColumn('*', 'tasks', 'list_id', 7));
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
	<body>
		<div class="container">
			<nav>
				<ul>
					<li><a href="index.php">Home</a></li>
					<li><a href=".php">---</a></li>
				</ul>
			</nav>

			<h1>Overzicht lijsten</h1>
			<div class="container">
            	<div class="row">
            		<?php
					foreach (getData('*', 'lists') as $list) {
						?>
						<div class="col-lg-4 p-1 lists">
							<details>
								<summary class="listName"> <?= $list['name'] ?> </summary>
								<ul class="list-group">
								<?php
								foreach (getDataByColumn('*', 'tasks', 'list_id', $list['id']) as $task) {
									?>
									<li class="list-group-item tasks"> <?= $task['description'] ?> </li>
									<?php
								}
								?>
								</ul>
							</details>
						</div>
						<?php
					}
					?>
				</div>
			</div>

			<footer>&copy; Mike de Jong</footer>
		</div>
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	 </body>
</html>