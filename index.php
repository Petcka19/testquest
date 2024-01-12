<?php
echo '<table id ="some">';
for($j=0;$j<5;$j++){
echo '<tr>';
 for($i=0;$i<5;$i++){
   $a = rand(0,1);
   $arra[$j][$i] = $a;
   echo '<td>'.$arra[$j][$i].' </td>';
 }
 echo '</tr><br>';
}
echo '</table>';
echo '<button name = "button1" onclick = "myScript1()"> Button 1</button>';
echo '<button name = "button2" onclick = "myScript2(';echo json_encode($arra);echo')"> Button 2</button>';
echo '<button name = "button3" onclick = "myScript3()"> Button 3</button>';
echo '<script src="script.js"></script>';
?>
