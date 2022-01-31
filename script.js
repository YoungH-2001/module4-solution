var names=new Array();
names[0]="simran";
names[1]="John";
names[2]="ram";
names[3]="jahnavi";
names[4]="prajakta";
names[5]="freddie";
names[6]="nick";
names[7]="giri";
names[8]="Jhangir";
names[9]="janaki";

for (var i=0; i < names.length; i++){
	if(names[i].charAt(0)=='J' || names[i].charAt(0)=='j'){
		console.log("Goodbye "+ names[i])
    }
    else{
    	console.log("Hello "+ names[i])
    }
}
