//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocat(name,arm){
  this.Name = name; // Inputs
  this.Arm = arm;

  this.Slap = function(){
    for(var b=0; b<this.Arm; b++){
      console.log ("SLAP");
      }
    }
}

//Write your 3 new octocat objects below here.
var Luke = new Octocat("Luke",2);
var Paul = new Octocat("Paul",5);
var Mike = new Octocat("Mike",4);

Mike.Slap();
