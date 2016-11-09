"use strict";

let orchard = document.getElementById("orchard");
let heightCounter = 0;

let Plant = function() {
	this.height = 0;
};

Plant.prototype.increaseHeight = function(increase) {
	this.height += increase;
};

Plant.prototype.decreaseHeight = function(decrease) {
	this.height -=  decrease;
};

let Tree = function() {
	this.branches = 0;
	this.growthCounter = 0;
};

Tree.prototype = new Plant();

Tree.prototype.grow = function(growth) {
	this.increaseHeight(growth);
	this.growthCounter += growth;

	while(this.growthCounter >= 10) {
		this.growthCounter -= 10;
		this.branches++;
	}
};


Tree.prototype.trim = function(num) {
	this.decreaseHeight(num);
	this.branches--;
};

let PearTree = new Tree();
console.log("PearTree", PearTree);
let OakTree = new Tree();
console.log("OakTree", OakTree);

function growTrees(pearAmt, oakAmt) {
	PearTree.grow(pearAmt);
	OakTree.grow(oakAmt);
}

function trimTrees(pearTrim, oakTrim) {
	PearTree.trim(pearTrim);
	OakTree.trim(oakTrim);
}


let orchardTimer = setInterval(function(){
	growTrees(4,9);

	heightCounter++;

	if (heightCounter % 10 === 0) {
		trimTrees(2,4);
	}

	if (heightCounter === 30) {
		clearInterval(orchardTimer);
		nuclearHolocaust();
	}

	growOrchard();

}, 500);

function growOrchard() {
	orchard.innerHTML += `<p>Your Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches.</p></p>Your Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`;
}

function nuclearHolocaust() {
	orchard.innerHTML = `<h1>Due to the results of the presidential election, your country has come under nuclear attack and your orchard has suffered the effects of a nuclear fallout. Remember your orchard as it was.</h1>`;
}


















