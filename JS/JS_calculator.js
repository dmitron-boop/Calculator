'use strict'

function Calculator () {

	//find elements
	this.numb1 = document.getElementById('input1');
	this.numb1.value = '0';
	this.numb2 = document.getElementById('input2');
	this.numb2.value = '0';
	this.numb3 = document.getElementById('result');
	this.numb3.value = '0';

	this.result = function(elId) {
		let that = this;

		let elSelector = '#' + elId;
		let el = document.querySelector(elSelector);

		this.operationBtn = el.querySelector('.onClick');
		/*this.onMinusBtn = el.querySelector('.onMinus');
		this.onMultiPlyBtn = el.querySelector('.onMultiPly');
		this.onDivideBtn = el.querySelector('.onDivide');*/

		this.operationBtn.onclick = function (event){
			that.onBtnClick(event);
		};

		this.onBtnClick = function (elId) {
		this.numb1 = Number(input1.value);
		this.numb2 = Number(input2.value);
		

			if (elId === '+'){
				let result = this.numb1 + this.numb2;
			} else if (elId === '-'){
				let result = this.numb1 - this.numb2;
			} else if (elId === '*'){
				let result = this.numb1 * this.numb2;
			} else if (elId === '/'){
				let result = this.numb1 / this.numb2;
			} else {
				this.numb3 = 'operation is unknow';
			}
			this.num3 = result;
		};

		this.operationBtnClick = function (event){
			//let clickedElement = that.event.currentTarget;
			let operation = this.clickedElement;
			that.onBtnClick(operation);
		};

		for (let i = 0; this.i < this.operationBtn.length; this.i++){
		let button = this.operationBtn[this.i];
		let that = this;
		this.button.addEventListener('click', this.operationBtnClick);
		};

		this.operationBtn.onclick[0] = function (event){
			this.operationBtnClick();
		};
		/*this.operationBtn[1].onclick = this.operationBtnClick();
		this.operationBtn[2].onclick = this.operationBtnClick();
		this.operationBtn[3].onclick = this.operationBtnClick();
	*/};
}
